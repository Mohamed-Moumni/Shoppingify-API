import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../../database/database.service';
import { User } from '@prisma/client';
import { userCreateDto } from '../../Dtos/userCreate.dto';
import * as bcrypt from 'bcrypt';
import { GoogleUserDto } from '../../Dtos/google.user.dto';


@Injectable()
export class UsersService {
    constructor(
        private databaseService: DatabaseService,) {
        }

    async createUser(createUserDetail: userCreateDto): Promise<any> {
        const hashedPassword: string = await bcrypt.hash(createUserDetail.password, 10);
        createUserDetail.password = hashedPassword;

        const { password, ...user } = await this.databaseService.user.create({
            data: { ...createUserDetail },
        });
        return user;
    }

    async getUsers() {
        const users: any = await this.databaseService.user.findMany({
            select: {
                firstname: true,
                lastname: true,
                email: true,
                created_at:true,
                password: false,
            }
        });
        return users;
    }

    async createGoogleUser(googleUserDto: GoogleUserDto) {
        return await this.databaseService.user.create({
            data: { ...googleUserDto },
        });
    }

    findOneByEmail(_email: string) {
        return this.databaseService.user.findUnique({
            where: {
                email: _email,
            }
        });
    }    
}
