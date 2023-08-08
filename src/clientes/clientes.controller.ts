import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { CreateTrabajosDto } from './dto/create-trabajos.dto';
import { CreateReferenciasDto } from './dto/create-referencias.dto';

@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  @Post('InsertarClientes')
  InsertarClientes(@Body() dto: CreateClienteDto) {
    return this.clientesService.InsertarClientes(dto[0]);
  }

  @Post('InsertarTrabajos')
  InsertarTrabajos(@Body() dto: CreateTrabajosDto) {
    return this.clientesService.InsertarTrabajos(dto[0]);
  }

  @Post('InsertarReferencias')
  InsertarReferencias(@Body() dto: CreateReferenciasDto) {
    return this.clientesService.InsertarReferencias(dto[0]);
  }

  
  @Post('ExisteClientes')
  ExisteClientes(@Body() dto: CreateClienteDto) {
    return this.clientesService.ExisteClientes(dto[0]);
  }


  @Post('getClientesAll')
  getClientesAll(@Body() dto: CreateClienteDto) {
    return this.clientesService.getClientesAll(dto[0]);
  }

  @Post('getClientesId')
  getClientesId(@Body() dto: CreateClienteDto) {
    return this.clientesService.getClientesId(dto[0]);
  }

  @Post('getReferencias')
  getReferencias(@Body() dto: CreateReferenciasDto) {
    return this.clientesService.getReferencias(dto[0]);
  }

  @Post('getTrabajos')
  getTrabajos(@Body() dto: CreateTrabajosDto) {
    return this.clientesService.getTrabajos(dto[0]);
  }

  @Post('BuscarClientes')
  BuscarClientes(@Body() dto: CreateClienteDto) {
    return this.clientesService.BuscarClientes(dto[0]);
  }

  @Post('BloquearClientes')
  BloquearClientes(@Body() dto: CreateClienteDto) {
    return this.clientesService.BloquearClientes(dto[0]);
  }

  @Post('EliminarClientes')
  EliminarClientes(@Body() dto: CreateClienteDto) {
    return this.clientesService.EliminarClientes(dto[0]);
  }

  @Post('EliminarTrabajos')
  EliminarTrabajos(@Body() dto: CreateClienteDto) {
    return this.clientesService.EliminarTrabajos(dto[0]);
  }

  @Post('EliminarReferencias')
  EliminarReferencias(@Body() dto: CreateClienteDto) {
    return this.clientesService.EliminarReferencias(dto[0]);
  }
}
