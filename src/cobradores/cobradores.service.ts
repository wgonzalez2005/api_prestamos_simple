import { Injectable } from '@nestjs/common';
import { CreateCobradoreDto } from './dto/create-cobradore.dto';
import { UpdateCobradoreDto } from './dto/update-cobradore.dto';
import { EntityManager } from 'typeorm';

@Injectable()
export class CobradoresService {
constructor(private dataSource: EntityManager) {}

async InsertarCobradores(dto: CreateCobradoreDto): Promise<any | undefined> {  
  try {
    const cobradores = await this.dataSource.query('call InsertarCobradores(?,?)', [
      dto.usuario_id,dto.empresa_id]);   
    return cobradores[0];
  } catch (error) {
      console.log(error);  
  }
}

async QuitarCobradores(dto: CreateCobradoreDto): Promise<any | undefined> {  
  try {
    const cobradores = await this.dataSource.query('call QuitarCobradores(?,?)', [
      dto.empresa_id,dto.usuario_id]);   
    return cobradores[0];
  } catch (error) {
      console.log(error);  
  }
}

async getCobradores(dto: CreateCobradoreDto): Promise<any | undefined> {  
  try {
    const cobradores = await this.dataSource.query('call getUsuariosCobradores(?)', [
      dto.empresa_id]);   
    return cobradores[0];
  } catch (error) {
      console.log(error);  
  }
}

async getUsuarios(dto: CreateCobradoreDto): Promise<any | undefined> {  
  try {
    const configuracion = await this.dataSource.query('call getUsuariosNoCobrador(?)', [
      dto.empresa_id]);   
    return configuracion[0];
  } catch (error) {
      console.log(error);  
  }
}



}
