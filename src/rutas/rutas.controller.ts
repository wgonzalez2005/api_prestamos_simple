import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RutasService } from './rutas.service';
import { CreateRutaDto } from './dto/create-ruta.dto';
import { UpdateRutaDto } from './dto/update-ruta.dto';

@Controller('rutas')
export class RutasController {
  constructor(private readonly rutasService: RutasService) {}

  @Post("InsertarRutas")
  InsertarRutas(@Body() dto: CreateRutaDto) {
    return this.rutasService.InsertarRutas(dto[0]);
  }

  @Post("getRutasAll")
  getRutasAll(@Body() dto: CreateRutaDto) {
    return this.rutasService.getRutasAll(dto[0]);
  }

  @Post("getRutasId")
  getRutasId(@Body() dto: CreateRutaDto) {
    return this.rutasService.getRutasId(dto[0]);
  }

  @Post("ExisteRutas")
  ExisteRutas(@Body() dto: CreateRutaDto) {
    return this.rutasService.ExisteRutas(dto[0]);
  }
}
