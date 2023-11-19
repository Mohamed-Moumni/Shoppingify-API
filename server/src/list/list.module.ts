import { Module } from '@nestjs/common';
import { ListController } from './controller/list.controller';
import { DatabaseService } from '../database/database.service';
import { UsersService } from '../users/service/users/users.service';
import { ListService } from './service/list.service';

@Module({
  controllers: [ListController],
  providers: [ListService, DatabaseService, UsersService],
})
export class ListModule { }
