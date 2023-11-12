import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { userCreateDto } from '../../Dtos/userCreate.dto';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { DatabaseService } from '../../../database/database.service';

@Injectable()
export class UsersService {
    constructor(private databaseService:DatabaseService) {

    }

    async createUser(createUserDetail: userCreateDto) {
        const hashedPassword:string = await bcrypt.hash(createUserDetail.password, 10);
        createUserDetail.password = hashedPassword;

        await this.databaseService.user.create({
            data: { ...createUserDetail },
        });
    }
}
