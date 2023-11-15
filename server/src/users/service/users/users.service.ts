import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../../database/database.service';
import { User } from '@prisma/client';
import { userCreateDto } from '../../Dtos/userCreate.dto';
import * as bcrypt from 'bcrypt';


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
                password: false,
            }
        });
        return users;
    }

    findOneByEmail(_email: string) {
        return this.databaseService.user.findUnique({
            where: {
                email: _email,
            }
        });
    }    
}
