import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CobradoresService } from './cobradores.service';
import { CreateCobradoreDto } from './dto/create-cobradore.dto';
import { UpdateCobradoreDto } from './dto/update-cobradore.dto';

@Controller('cobradores')
export class CobradoresController {
  constructor(private readonly cobradoresService: CobradoresService) {}

  @Post("InsertarCobradores")
  InsertarCobradores(@Body() dto: CreateCobradoreDto) {
    return this.cobradoresService.InsertarCobradores(dto[0]);
  }

  @Post("QuitarCobradores")
  QuitarCobradores(@Body() dto: CreateCobradoreDto) {
    return this.cobradoresService.QuitarCobradores(dto[0]);
  }

  @Post("getCobradores")
  getCobradores(@Body() dto: CreateCobradoreDto) {
    return this.cobradoresService.getCobradores(dto[0]);
  }

  @Post("getUsuarios")
  getUsuarios(@Body() dto: CreateCobradoreDto) {
    return this.cobradoresService.getUsuarios(dto[0]);
  }

}
