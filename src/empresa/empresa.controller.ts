import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmpresaService } from './empresa.service';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';

@Controller('empresa')
export class EmpresaController {
  constructor(private readonly empresaService: EmpresaService) {}

  @Post("InsertarEmpresa")
  async InsertarEmpresa(@Body() dto: CreateEmpresaDto) {
    return this.empresaService.InsertarEmpresa(dto[0]);
  }


  @Post("getEmpresaId")
  async getEmpresaId(@Body() dto: CreateEmpresaDto) {    
    return this.empresaService.getEmpresaId(dto[0]);
  }

  
}
