import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConfiguracionService } from './configuracion.service';
import { CreateConfiguracionDto } from './dto/create-configuracion.dto';
import { UpdateConfiguracionDto } from './dto/update-configuracion.dto';

@Controller('configuracion')
export class ConfiguracionController {
  constructor(private readonly configuracionService: ConfiguracionService) {}

  @Post("InsertarConfiguracion")
  InsertarConfiguracion(@Body() dto: CreateConfiguracionDto) {
    return this.configuracionService.InsertarConfiguracion(dto[0]);
  }

  @Post("getConfiguracionAll")
  getConfiguracionAll(@Body() dto: CreateConfiguracionDto) {
    return this.configuracionService.getConfiguracionAll(dto[0]);
  }

  @Post("getConfiguracionId")
  getConfiguracionId(@Body() dto: CreateConfiguracionDto) {
    return this.configuracionService.getConfiguracionId(dto[0]);
  }

  @Post("ExisteConfiguracion")
  ExisteConfiguracion(@Body() dto: CreateConfiguracionDto) {
    return this.configuracionService.ExisteConfiguracion(dto[0]);
  }

 }
