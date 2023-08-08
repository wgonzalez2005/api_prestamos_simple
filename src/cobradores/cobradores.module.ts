import { Module } from '@nestjs/common';
import { CobradoresService } from './cobradores.service';
import { CobradoresController } from './cobradores.controller';

@Module({
  controllers: [CobradoresController],
  providers: [CobradoresService]
})
export class CobradoresModule {}
