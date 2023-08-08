import { Injectable } from '@nestjs/common';
import { CreateRutaDto } from './dto/create-ruta.dto';
import { UpdateRutaDto } from './dto/update-ruta.dto';
import { EntityManager } from 'typeorm';

@Injectable()
export class RutasService {
  constructor(private dataSource: EntityManager) {}

  async InsertarRutas(dto: CreateRutaDto): Promise<any | undefined> {  
    try {
      const rutas = await this.dataSource.query('call InsertarRutas(?,?,?)', [
        dto.id,dto.nombres,dto.empresa_id]);   
      return rutas[0];
    } catch (error) {
      console.log(error);  
    }
  }

  async getRutasAll(dto: CreateRutaDto): Promise<any | undefined> {  
    try {
      const rutas = await this.dataSource.query('call getRutasAll(?)', [
        dto.id]);   
      return rutas[0];
    } catch (error) {
      console.log(error);  
    }
  }

  async getRutasId(dto: CreateRutaDto): Promise<any | undefined> {  
    try {
      const rutas = await this.dataSource.query('call getRutasId(?,?)', [
        dto.id,dto.empresa_id]);   
      return rutas[0];
    } catch (error) {
      console.log(error);  
    }
  }
  async ExisteRutas(dto: CreateRutaDto): Promise<any | undefined> {  
    try {
      const rutas = await this.dataSource.query('call ExisteRutas(?,?)', [
        dto.empresa_id,dto.nombres]);   
      return rutas[0];
    } catch (error) {
      console.log(error);  
    }
  }
  
}
