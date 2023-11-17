import { Module } from '@nestjs/common';
import { ItemsController } from './contollers/items.controller';
import { ItemsService } from './services/items.service';
import { DatabaseService } from '../database/database.service';

@Module({
  controllers: [ItemsController],
  providers: [ItemsService, DatabaseService]
})
export class ItemsModule {}
