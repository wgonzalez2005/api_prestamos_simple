import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RutascobradoresService } from './rutascobradores.service';
import { CreateRutascobradoreDto } from './dto/create-rutascobradore.dto';
import { UpdateRutascobradoreDto } from './dto/update-rutascobradore.dto';

@Controller('rutascobradores')
export class RutascobradoresController {
  constructor(private readonly rutascobradoresService: RutascobradoresService) {}

  @Post("InsertarRutasCobradores")
  InsertarRutasCobradores(@Body() dto: CreateRutascobradoreDto) {
    return this.rutascobradoresService.InsertarRutasCobradores(dto[0]);
  }  

  @Post("getRutasCobradorRutasId")
  getRutasCobradorRutasId(@Body() dto: CreateRutascobradoreDto) {
    return this.rutascobradoresService.getRutasCobradorRutasId(dto[0]);
  }

  @Post("getRutasCobrador")
  getRutasCobrador(@Body() dto: CreateRutascobradoreDto) {
    return this.rutascobradoresService.getRutasCobrador(dto[0]);
  }

  @Post("getRutasCobradorAll")
  getRutasCobradorAll(@Body() dto: CreateRutascobradoreDto) {
    return this.rutascobradoresService.getRutasCobradorAll(dto[0]);
  }

  @Post("QuitarRutasCobrador")
  QuitarRutasCobrador(@Body() dto: CreateRutascobradoreDto) {
    return this.rutascobradoresService.QuitarRutasCobrador(dto[0]);
  }

  

}
