import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../../database/database.service';
import { User } from '@prisma/client';

@Injectable()
export class UsersService {
    constructor(
        private databaseService: DatabaseService,
    ) {

    }
    
    getUsers():Promise<User[]> | []{
        return this.databaseService.user.findMany({

        });
    }

    findOneByEmail(_email: string) {
        return this.databaseService.user.findFirst({
            where: {
                email: _email,
            }
        });
    }    
}
