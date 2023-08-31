import { Injectable } from '@nestjs/common';
import { CreateReporteDto } from './dto/create-reporte.dto';
import { UpdateReporteDto } from './dto/update-reporte.dto';
import { EntityManager } from 'typeorm';

@Injectable()
export class ReportesService {
  constructor(private dataSource: EntityManager) {}
   
  async getReportesPagosHoy(dto: CreateReporteDto): Promise<any | undefined> {  
    try {
      const empresa = await this.dataSource.query('call getReportesPagosHoy(?)', [
        dto.empresa_id]);   
      return empresa[0];
    } catch (error) {
      console.log(error);  
    }
  }

  async getReportesPagosFechas(dto: CreateReporteDto): Promise<any | undefined> {  
    try {
      const empresa = await this.dataSource.query('call getReportesPagosFechas(?,?,?)', [
        dto.empresa_id,dto.inicio,dto.fin,]);   
      return empresa[0];
    } catch (error) {
      console.log(error);  
    }
  }
  

  
}
