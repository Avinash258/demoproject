import { Test, TestingModule } from '@nestjs/testing';
import { DemosensorService } from './demosensor.service';

describe('DemosensorService', () => {
  let service: DemosensorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DemosensorService],
    }).compile();

    service = module.get<DemosensorService>(DemosensorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
