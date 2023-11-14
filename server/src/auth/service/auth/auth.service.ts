import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../../../users/service/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { userCreateDto } from '../../../users/Dtos/userCreate.dto';
import { DatabaseService } from '../../../database/database.service';
import * as bcrypt from 'bcrypt';
import { Response } from 'express';

export type payload = {
    sub: string,
    email:string,
}

@Injectable()
export class AuthService {
    constructor(
        private userService: UsersService,
        private jwtService: JwtService,
        private databaseService: DatabaseService
    ) {
    }
    
    async userLogin(Email: string, Password: string): Promise<any>{
        return this.validateUser(Email, Password);
    }

    async createUser(createUserDetail: userCreateDto): Promise<any> {
        const hashedPassword: string = await bcrypt.hash(createUserDetail.password, 10);
        createUserDetail.password = hashedPassword;

        const { password, ...user } = await this.databaseService.user.create({
            data: { ...createUserDetail },
        });
        return user;
    }

    signToken(payload: payload, res:Response) {
        const token: string = this.jwtService.sign(payload);
        res.cookie('jwt', token, {
            maxAge: 2592000000,
            sameSite: true,
            secure: false,
        });
        res.redirect("http://localhost:3000/api/users/home");
    }

    async matchPassword(password: string, storedHashedPassword: string): Promise<Boolean> {
        return !!await bcrypt.compare(password, storedHashedPassword);
    }

    async validateUser(Email: string, Password: string) {
        const user = await this.userService.findOneByEmail(Email);
        const match = await this.matchPassword(Password, user.password);
        if (!user || !(await this.matchPassword(Password, user.password)))
            throw new UnauthorizedException();
        const { password, ...rest } = user;
        return rest;
    }

}
