import { Test, TestingModule } from '@nestjs/testing';
import { ItemsService } from './items.service';
import { DatabaseService } from '../../database/database.service';
import { v4 as uuidv4 } from 'uuid';
import { ItemCreateDto } from '../Dtos/item.create.dto';
import { Item } from '@prisma/client';
import { CategoriesService } from '../../categories/service/categories.service';
import { ItemUpdateDto } from '../Dtos/item.update.dto';

const category1Id = uuidv4();
const category2Id = uuidv4();
const category3Id = uuidv4();

const itemsId = [uuidv4(), uuidv4(), uuidv4(), uuidv4(), uuidv4()];

const items = [
  { id: itemsId[0], name: "Avocado", note: "bla bla avocado note", image: "./src/public/img1.png", created_at: new Date(), categoryId: category1Id },
  { id: itemsId[1], name: "Banana", note: "bla bla Banana note", image: "./src/public/img2.png", created_at: new Date(), categoryId: category1Id },
  { id: itemsId[2], name: "Salamon", note: "bla bla Salamon note", image: "./src/public/img3.png", created_at: new Date(), categoryId: category2Id },
  { id: itemsId[3], name: "Chicken", note: "bla bla Chiken note", image: "./src/public/img4.png", created_at: new Date(), categoryId: category2Id },
  { id: itemsId[4], name: "Watermelon", note: "bla bla Watermelon note", image: "./src/public/img5.png", created_at: new Date(), categoryId: category3Id },
];

const category = [
  { id:category1Id, name: "Fruit" },
  { id:category2Id, name: "Vegetable"},
];

const UpdatedItem = { id: itemsId[1], name: "Watermelon", note: "bla bla Watermelon note", image: "./src/public/img5.png", created_at: new Date(), categoryId: category3Id };

const db = {
  item: {
    findMany: jest.fn().mockResolvedValue(items),
    // findUnique: jest.fn().mockResolvedValue(),
    // findFirst: jest.fn().mockResolvedValue(),
    create: jest.fn().mockReturnValue(items[0]),
    // save: jest.fn(),
    update: jest.fn().mockResolvedValue(UpdatedItem),
    delete: jest.fn().mockResolvedValue(items[3])
  },
  category: {
    create: jest.fn().mockReturnValue(category[0]),
    findFirst: jest.fn().mockResolvedValue(category[0]),
  }
};

describe('ItemsService', () => {
  let itemService: ItemsService;
  let databaseService: DatabaseService;
  let categoryService: CategoriesService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ItemsService, {
        provide: DatabaseService,
        useValue:db,
        },
        CategoriesService,
      ],
    }).compile();

    itemService = module.get<ItemsService>(ItemsService);
    databaseService = module.get<DatabaseService>(DatabaseService);
    categoryService = module.get<CategoriesService>(CategoriesService);
  });

  it('should be defined', () => {
    expect(itemService).toBeDefined();
  });

  it('should return the created item', async () => {
    
    let itemCreateDto: ItemCreateDto = {
        name: "Avocado",
        note: "bla bla avocado note",
        image: "./src/public/img1.png",
        category: "Fruit"
    }

    const item: Item = await itemService.createItem(itemCreateDto);

    expect(item).toEqual(expect.objectContaining({
      name: items[0].name,
      note: items[0].note,
      image: items[0].image,
      categoryId:items[0].categoryId
    }));
  });

  it('should return the updated item', async () => {
    const itemUpdateDto: ItemUpdateDto = {
      name: "Watermelon",
      note: "bla bla Watermelon note",
      image: "./src/public/img5.png",
      category: "Fruit"
    }
    const UpdateItem = await itemService.updateItemById(itemsId[0].id, itemUpdateDto);

    expect(UpdateItem).toEqual(UpdatedItem);
  });

  it('should return the deleted item', async () => {
    const item1 = await itemService.deleteItemById(itemsId[3].id);
    expect(item1).toEqual(items[3]);
  });
});
