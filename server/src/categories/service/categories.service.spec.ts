import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesService } from './categories.service';
import { DatabaseService } from '../../database/database.service';

describe('CategoriesService', () => {
  let CategoryService: CategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoriesService,DatabaseService],
    }).compile();

    CategoryService = module.get<CategoriesService>(CategoriesService);
  });

  it('should be defined', () => {
    expect(CategoryService).toBeDefined();
  });

});
