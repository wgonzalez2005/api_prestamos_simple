import { Module } from '@nestjs/common';
import { RutascobradoresService } from './rutascobradores.service';
import { RutascobradoresController } from './rutascobradores.controller';

@Module({
  controllers: [RutascobradoresController],
  providers: [RutascobradoresService]
})
export class RutascobradoresModule {}
