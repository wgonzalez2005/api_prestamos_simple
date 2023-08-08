import { Test, TestingModule } from '@nestjs/testing';
import { RutascobradoresController } from './rutascobradores.controller';
import { RutascobradoresService } from './rutascobradores.service';

describe('RutascobradoresController', () => {
  let controller: RutascobradoresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RutascobradoresController],
      providers: [RutascobradoresService],
    }).compile();

    controller = module.get<RutascobradoresController>(RutascobradoresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
