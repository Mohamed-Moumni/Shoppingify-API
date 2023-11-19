import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../database/database.service';

@Injectable()
export class CategoriesService {
    constructor(private databaseService: DatabaseService) {
        
    }

    createCategory(categoryName: string) {
        return this.databaseService.category.create({
            data: {
                name: categoryName,
            }
        });
    }

    getCategoryByName(categoryName: string) {
        return this.databaseService.category.findFirst({
            where:{name:categoryName,}
        });
    }

    getCategoryById(categoryId: string) {
        return this.databaseService.category.findFirst({
            where: { id: categoryId },
        });
    }
}
