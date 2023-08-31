import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReportesService } from './reportes.service';
import { CreateReporteDto } from './dto/create-reporte.dto';
import { UpdateReporteDto } from './dto/update-reporte.dto';

@Controller('reportes')
export class ReportesController {
  constructor(private readonly reportesService: ReportesService) {}


  @Post("getReportesPagosHoy")
  async getReportesPagosHoy(@Body() dto: CreateReporteDto) {
    return this.reportesService.getReportesPagosHoy(dto[0]);
  }

  @Post("getReportesPagosFechas")
  async getReportesPagosFechas(@Body() dto: CreateReporteDto) {
    return this.reportesService.getReportesPagosFechas(dto[0]);
  }

  
}
