import { Injectable } from '@nestjs/common';
import { CreateReporteDto } from './dto/create-reporte.dto';
import { UpdateReporteDto } from './dto/update-reporte.dto';
import { EntityManager } from 'typeorm';

@Injectable()
export class ReportesService {
  constructor(private dataSource: EntityManager) {}
   
  async getReportesPagosHoy(dto: CreateReporteDto): Promise<any | undefined> { 
    
    try {
      const reporte = await this.dataSource.query('call getReportesPagosHoy(?,?)', [
        dto.empresa_id,dto.op]); 
        
      return reporte[0];
    } catch (error) {
      console.log(error);  
    }
  }

  async getReportesPagosFechas(dto: CreateReporteDto): Promise<any | undefined> {  
    try {
      const reporte = await this.dataSource.query('call getReportesPagosFechas(?,?,?,?)', [
        dto.empresa_id,dto.inicio,dto.fin,dto.op]);   
      return reporte[0];
    } catch (error) {
      console.log(error);  
    }
  }

  async getReportesPrestamosClientes(dto: CreateReporteDto): Promise<any | undefined> {  
    try {
      const reporte = await this.dataSource.query('call getPrestamosClientesId(?,?)', [
        dto.empresa_id,dto.clientes_id]);   
      return reporte[0];
    } catch (error) {
      console.log(error);  
    }
  }

  async getReportesPrestamosClientesBalance(dto: CreateReporteDto): Promise<any | undefined> {  
    try {
      const reporte = await this.dataSource.query('call getPrestamosClientesIdBalance(?,?,?)', [
        dto.empresa_id,dto.clientes_id,dto.op]);   
      return reporte[0];
    } catch (error) {
      console.log(error);  
    }
  }
  
  async getCuotasPrestamosAll(dto: CreateReporteDto): Promise<any | undefined> { 

    try {
      const reporte = await this.dataSource.query('call getCuotasPrestamosAll(?,?)', [
        dto.empresa_id,dto.prestamos_id]); 
        
      return reporte[0];
    } catch (error) {
      console.log(error);  
    }
  }

  async getReportesPrestamosAll(dto: CreateReporteDto): Promise<any | undefined> { 
    console.log(dto);  
    try {
      const reporte = await this.dataSource.query('call getReportePrestamosAll(?,?,?,?)', [
        dto.empresa_id,dto.inicio,dto.fin,dto.op]); 
        console.log(reporte[0]);   
      return reporte[0];
    } catch (error) {
      console.log(error);  
    }
  }
  
  async getPrestamosClientesAll(dto: CreateReporteDto): Promise<any | undefined> { 

    try {
      const reporte = await this.dataSource.query('call getPrestamosClientesAll(?)', [
        dto.empresa_id]); 
        
      return reporte[0];
    } catch (error) {
      console.log(error);  
    }
  }

  async getPrestamosClientesId(dto: CreateReporteDto): Promise<any | undefined> { 
   console.log(dto);
    try {
      const reporte = await this.dataSource.query('call getPrestamoClientesId(?,?)', [
        dto.empresa_id,dto.clientes_id]); 
        
      return reporte[0];
    } catch (error) {
      console.log(error);  
    }
  }  
}
