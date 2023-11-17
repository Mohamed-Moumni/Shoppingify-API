import { Module } from '@nestjs/common';
import { CategoriesService } from './service/categories.service';
import { CategoriesController } from './controller/categories.controller';
import { DatabaseService } from '../database/database.service';

@Module({
  providers: [CategoriesService, DatabaseService],
  controllers: [CategoriesController]
})
export class CategoriesModule { }
