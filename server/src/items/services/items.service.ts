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
        let Category = await this.categoryService.getCategoryByName(itemCreateDto.category);
        if (!Category)
            Category = await this.categoryService.createCategory(itemCreateDto.category);
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

    async getItemsByUserId(userId: string) {
        let userItems: { categoryName: string, item: Item }[] = [];
        let allItems: Item[] = await this.databaseService.item.findMany({
            where: {
                userId: userId,
            }
        });
        for (const item of allItems) {
            const name: string = (await this.categoryService.getCategoryById(item.categoryId)).name;
            userItems.push({ categoryName: name, item: item });
        }
        return userItems;
    }
}
