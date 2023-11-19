import { Module } from '@nestjs/common';
import { ItemsController } from './contollers/items.controller';
import { ItemsService } from './services/items.service';
import { DatabaseModule } from '../database/database.module';
import { DatabaseService } from '../database/database.service';
import { CategoriesService } from '../categories/service/categories.service';
import { UsersService } from '../users/service/users/users.service';

@Module({
  controllers: [ItemsController],
  providers: [ItemsService, DatabaseService, CategoriesService, UsersService]
})
export class ItemsModule {}
