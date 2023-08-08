import { Test, TestingModule } from '@nestjs/testing';
import { RutascobradoresService } from './rutascobradores.service';

describe('RutascobradoresService', () => {
  let service: RutascobradoresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RutascobradoresService],
    }).compile();

    service = module.get<RutascobradoresService>(RutascobradoresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
