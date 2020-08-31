import { Test, TestingModule } from '@nestjs/testing';
import { TestdemoService } from './testdemo.service';

describe('TestdemoService', () => {
  let service: TestdemoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestdemoService],
    }).compile();

    service = module.get<TestdemoService>(TestdemoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
