import { Injectable } from '@nestjs/common';
import { ItemCreateDto } from '../Dtos/item.create.dto';
import { DatabaseService } from '../../database/database.service';
import { CategoriesService } from '../../categories/service/categories.service';
import { Item } from '@prisma/client';

@Injectable()
export class ItemsService {
    constructor(private databaseService: DatabaseService,
                private categoryService: CategoriesService) {   
    }


    async createItem(itemCreateDto: ItemCreateDto): Promise<Item>{
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
                }
            },
        });
    }

    deleteItem() {
        
    }

    updateItem() {
        
    }
}
