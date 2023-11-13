import { Injectable } from '@nestjs/common';
import { userCreateDto } from '../../Dtos/userCreate.dto';
import * as bcrypt from 'bcrypt';
import { DatabaseService } from '../../../database/database.service';
import { User } from '@prisma/client';

@Injectable()
export class UsersService {
    constructor(private databaseService:DatabaseService) {

    }

    async createUser(createUserDetail: userCreateDto): Promise<any>{
        const hashedPassword:string = await bcrypt.hash(createUserDetail.password, 10);
        createUserDetail.password = hashedPassword;

        const {password, ...user}= await this.databaseService.user.create({
            data: { ...createUserDetail },
        });
        return user;
    }

    getUsers():Promise<User[]> | []{
        return this.databaseService.user.findMany({

        });
    }
}
