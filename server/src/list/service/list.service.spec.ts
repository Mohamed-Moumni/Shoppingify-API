import { Test, TestingModule } from '@nestjs/testing';
import { ListService } from './list.service';
import { DatabaseService } from '../../database/database.service';


const db = {
  list: {
    create:
    update:
    delete:
  },
  listItem: {

  }
}

describe('ListService', () => {
  let service: ListService;
  let databaseService: DatabaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ListService,
        {
          provide: DatabaseService,
          useValue: db,
        }
      ],
    }).compile();

    service = module.get<ListService>(ListService);
    databaseService = module.get<DatabaseService>(DatabaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  
});
