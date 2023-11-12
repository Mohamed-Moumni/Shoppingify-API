import { Module } from '@nestjs/common';
import { UsersService } from './service/users/users.service';
import { UsersController } from './controller/users/users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseService } from '../database/database.service';

@Module({
  imports:[],
  providers: [UsersService, DatabaseService],
  controllers: [UsersController]
})
export class UsersModule {}
