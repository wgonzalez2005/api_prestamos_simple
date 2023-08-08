import { Injectable } from '@nestjs/common';
import { CreateConfiguracionDto } from './dto/create-configuracion.dto';
import { UpdateConfiguracionDto } from './dto/update-configuracion.dto';
import { EntityManager } from 'typeorm';

@Injectable()
export class ConfiguracionService {
  constructor(private dataSource: EntityManager) {}

  async InsertarConfiguracion(dto: CreateConfiguracionDto): Promise<any | undefined> {  
    try {
      const configuracion = await this.dataSource.query('call InsertarConfiguracion(?,?,?,?)', [
        dto.id,dto.empresa_id,dto.nombre,dto.valor]);   
      return configuracion[0];
    } catch (error) {
        console.log(error);  
    }
  }

  async getConfiguracionAll(dto: CreateConfiguracionDto): Promise<any | undefined> {  
    try {
      const configuracion = await this.dataSource.query('call getConfiguracionAll(?)', [
        dto.id]);   
      return configuracion[0];
    } catch (error) {
      console.log(error);  
    }
  }

  async getConfiguracionId(dto: CreateConfiguracionDto): Promise<any | undefined> {  
    try {
      const configuracion = await this.dataSource.query('call getConfiguracionId(?,?)', [
        dto.empresa_id,dto.id]);   
      return configuracion[0];
    } catch (error) {
      console.log(error);  
    }
  }
  
  async ExisteConfiguracion(dto: CreateConfiguracionDto): Promise<any | undefined> {  
    try {
      const configuracion = await this.dataSource.query('call ExisteConfiguracion(?,?)', [
        dto.empresa_id,dto.nombre]);   
      return configuracion[0];
    } catch (error) {
      console.log(error);  
    }
  }
  
}
