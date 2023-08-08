import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrestamosService } from './prestamos.service';
import { CreatePrestamoDto } from './dto/create-prestamo.dto';
import { UpdatePrestamoDto } from './dto/update-prestamo.dto';

@Controller('prestamos')
export class PrestamosController {
  constructor(private readonly prestamosService: PrestamosService) {}

  @Post('BuscarClientes')
  BuscarClientes(@Body() dto: CreatePrestamoDto) {
    return this.prestamosService.BuscarClientes(dto[0]);
  }

  @Post('getPlazos')
  getPlazos(@Body() dto: CreatePrestamoDto) {
    return this.prestamosService.getPlazos(dto[0]);
  }

  @Post('getRutas')
  getRutas(@Body() dto: CreatePrestamoDto) {
    return this.prestamosService.getRutas(dto[0]);
  }

  @Post('getTiposPrestamos')
  getTiposPrestamos(@Body() dto: CreatePrestamoDto) {
    return this.prestamosService.getTiposPrestamos(dto[0]);
  }

  @Post('getConfiguracionAllActiva')
  getConfiguracionAllActiva(@Body() dto: CreatePrestamoDto) {
    return this.prestamosService.getConfiguracionAllActiva(dto[0]);
  }
  
  @Post('getPrestamosClientes')
  getPrestamosClientes(@Body() dto: CreatePrestamoDto) {
    return this.prestamosService.getPrestamosClientes(dto[0]);
  }

  @Post('getCuotasPrestamosClientes')
  getCuotasPrestamosClientes(@Body() dto: CreatePrestamoDto) {
    return this.prestamosService.getCuotasPrestamosClientes(dto[0]);
  }
  
  @Post('InsertarPrestamos')
  InsertarPrestamos(@Body() dto: CreatePrestamoDto) {
    return this.prestamosService.InsertarPrestamos(dto[0]);
  }

  @Post('getPrestamosId')
  getPrestamosId(@Body() dto: CreatePrestamoDto) {
    return this.prestamosService.getPrestamosId(dto[0]);
  }
  
  @Post('getCuotasVencidas')
  getCuotasVencidas(@Body() dto: CreatePrestamoDto) {
    return this.prestamosService.getCuotasVencidas(dto[0]);
  }
  
}
