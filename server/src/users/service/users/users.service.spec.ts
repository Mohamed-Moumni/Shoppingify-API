// testing createUser, getusers, findOneByEmail

import { v4 as uuidv4 } from 'uuid';
import { UsersService } from './users.service';
import { DatabaseService } from '../../../database/database.service';
import { Test, TestingModule } from '@nestjs/testing';

const users = [
    { firstname: "Mohamed", lastname: "Moumni", email: "moha@gmail.com",  created_at: new Date()},
    { firstname: "lionel", lastname: "Messi", email: "moha@gmail.com",  created_at:  new Date()},
    { firstname: "armando", lastname: "Maradon", email: "moha@gmail.com",  created_at: new Date()},
    { firstname: "roberto", lastname: "Bajio", email: "moha@gmail.com",  created_at: new Date()},
];

const oneUser = users[0];

const db = {
    user: {
        findMany: jest.fn().mockResolvedValue(users),
        findUnique: jest.fn().mockResolvedValue(oneUser),
        findFirst: jest.fn().mockResolvedValue(oneUser),
        create: jest.fn().mockReturnValue(oneUser),
    }
}

describe('userService', () => {
    let service: UsersService;
    let database: DatabaseService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                UsersService,
                {
                    provide: DatabaseService,
                    useValue: db,
                }
            ]

        }).compile();

        service = module.get<UsersService>(UsersService);
        database = module.get<DatabaseService>(DatabaseService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    describe('create User', () => {
        it('should return the created user', () => {
            const user = {
                firstname: "Mohamed",
                lastname: "Moumni",
                email: "moha@gmail.com",
                created_at: new Date(),
            }
            expect(user).toEqual(expect.objectContaining({
                firstname: oneUser.firstname,
                lastname: oneUser.lastname,
                email: oneUser.email,
            }));
        })
    });
})