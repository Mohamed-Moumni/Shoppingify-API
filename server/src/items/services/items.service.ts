import { Injectable } from '@nestjs/common';
import { ItemCreateDto } from '../Dtos/item.create.dto';
import { DatabaseService } from '../../database/database.service';
import { CategoriesService } from '../../categories/service/categories.service';
import { Item } from '@prisma/client';
import { ItemUpdateDto } from '../Dtos/item.update.dto';

@Injectable()
export class ItemsService {
    constructor(private databaseService: DatabaseService, private categoryService: CategoriesService)
    {   
    }

    async createItem(itemCreateDto: ItemCreateDto, userId:string): Promise<Item>{
        let Category = await this.categoryService.getCategoryByName(itemCreateDto.name);
        if (!Category)
            Category = await this.categoryService.createCategory(itemCreateDto.name);
        return this.databaseService.item.create({
            data: {
                name: itemCreateDto.name,
                note: itemCreateDto.note,
                image: itemCreateDto.image,
                category: {
                    connect: { id: Category.id },
                },
                user: {
                    connect: {id: userId},
                }
            },
        });
    }

    deleteItemById(ItemId: string) {
        return this.databaseService.item.delete({
            where: { id: ItemId },
        });
    }

    async updateItemById(ItemId: string, itemUpdateDto: ItemUpdateDto): Promise<Item>{
        let Category = await this.categoryService.createCategory(itemUpdateDto.name);
        if (!Category)
            Category = await this.categoryService.createCategory(itemUpdateDto.name);
        return this.databaseService.item.update({
            where: {
                id:ItemId,
            },
            data: {
                name: itemUpdateDto.name,
                note: itemUpdateDto.note,
                image: itemUpdateDto.image,
                category: {
                    connect:{id:Category.id},
                }
            }
        });
    }
    
}
