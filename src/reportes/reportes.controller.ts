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


  @Post("getReportesPrestamosClientesId")
  async getReportesPrestamosClientes(@Body() dto: CreateReporteDto) {
    return this.reportesService.getReportesPrestamosClientes(dto[0]);
  }

  @Post("getReportesPrestamosClientesBalance")
  async getReportesPrestamosClientesBalance(@Body() dto: CreateReporteDto) {
    return this.reportesService.getReportesPrestamosClientesBalance(dto[0]);
  }

  @Post("getCuotasPrestamosAll")
  async getCuotasPrestamosAll(@Body() dto: CreateReporteDto) {
    return this.reportesService.getCuotasPrestamosAll(dto[0]);
  }

  @Post("getPrestamosClientesAll")
  async getPrestamosClientesAll(@Body() dto: CreateReporteDto) {
    return this.reportesService.getPrestamosClientesAll(dto[0]);
  }

  @Post("getPrestamosClientesId")
  async getPrestamosClientesId(@Body() dto: CreateReporteDto) {
    return this.reportesService.getPrestamosClientesId(dto[0]);
  }
  
  @Post("getReportePagosPrestamosId")
  async getReportePagosPrestamosId(@Body() dto: CreateReporteDto) {
    return this.reportesService.getReportePagosPrestamosId(dto[0]);
  }
  
  @Post("getReportesPrestamosAll")
  async getReportesPrestamosAll(@Body() dto: CreateReporteDto) {
    return this.reportesService.getReportesPrestamosAll(dto[0]);
  }

  @Post("getReportePrestamosAlDia")
  async getReportePrestamosAlDia(@Body() dto: CreateReporteDto) {
    return this.reportesService.getReportePrestamosAlDia(dto[0]);
  }

  @Post("getReportePagosFecha")
  async getReportePagosFecha(@Body() dto: CreateReporteDto) {
    return this.reportesService.getReportePagosFecha(dto[0]);
  }

  @Post("getReportePrestamosAtrasos")
  async getReportePrestamosAtrasos(@Body() dto: CreateReporteDto) {
    return this.reportesService.getReportePrestamosAtrasos(dto[0]);
  }

  @Post("getImprimirPrestamos")
  async getImprimirPrestamos(@Body() dto: CreateReporteDto) {
    return this.reportesService.getImprimirPrestamos(dto[0]);
  }

  @Post("getPrestamosClientesPrestamosId")
  async getPrestamosClientesPrestamosId(@Body() dto: CreateReporteDto) {
    return this.reportesService.getPrestamosClientesPrestamosId(dto[0]);
  }

  @Post("getpagosImprimir")
  async getpagosImprimir(@Body() dto: CreateReporteDto) {
    return this.reportesService.getpagosImprimir(dto[0]);
  }
  
  @Post("CalcularMora")
  async CalcularMora(@Body() dto: CreateReporteDto) {
    return this.reportesService.CalcularMora(dto[0]);
  }

  @Post("getResumen")
  async getResumen(@Body() dto: CreateReporteDto) {
    return this.reportesService.getResumen(dto[0]);
  }

  @Post("getGrafico1")
  async getGrafico1(@Body() dto: CreateReporteDto) {
    return this.reportesService.getGrafico1(dto[0]);
  }

  @Post("getGrafico2")
  async getGrafico2(@Body() dto: CreateReporteDto) {
    return this.reportesService.getGrafico2(dto[0]);
  }
}
