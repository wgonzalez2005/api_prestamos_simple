import { Test, TestingModule } from '@nestjs/testing';
import { CobradoresController } from './cobradores.controller';
import { CobradoresService } from './cobradores.service';

describe('CobradoresController', () => {
  let controller: CobradoresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CobradoresController],
      providers: [CobradoresService],
    }).compile();

    controller = module.get<CobradoresController>(CobradoresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
