import { Injectable } from '@nestjs/common';
import { CreateRutascobradoreDto } from './dto/create-rutascobradore.dto';
import { UpdateRutascobradoreDto } from './dto/update-rutascobradore.dto';
import { EntityManager } from 'typeorm';

@Injectable()
export class RutascobradoresService {
  constructor(private dataSource: EntityManager) {}

  async InsertarRutasCobradores(dto: CreateRutascobradoreDto): Promise<any | undefined> {  
    try {
      const rutascobradores = await this.dataSource.query('call InsertarRutasCobradores(?,?,?)', [
        dto.empresa_id,dto.cobradores_id,dto.rutas_id]);   
      return rutascobradores[0];
    } catch (error) {
        console.log(error);  
    }
  }
  
  async getRutasCobradorRutasId(dto: CreateRutascobradoreDto): Promise<any | undefined> {  
    try {
      const rutascobradores = await this.dataSource.query('call getRutasCobradorRutasId(?,?,?)', [
        dto.empresa_id,dto.cobradores_id,dto.rutas_id]);   
      return rutascobradores[0];
    } catch (error) {
        console.log(error);  
    }
  }

  async getRutasCobrador(dto: CreateRutascobradoreDto): Promise<any | undefined> {  
   console.log(dto);

    try {
      const rutascobradores = await this.dataSource.query('call getRutasCobrador(?,?)', [
        dto.empresa_id,dto.id]);   
      return rutascobradores[0];
    } catch (error) {
        console.log(error);  
    }
  }

  async getRutasCobradorAll(dto: CreateRutascobradoreDto): Promise<any | undefined> {  
    try {
      const rutascobradores = await this.dataSource.query('call getRutasCobradorAll(?)', [
        dto.empresa_id]);   
      return rutascobradores[0];
    } catch (error) {
        console.log(error);  
    }
  }

  async QuitarRutasCobrador(dto: CreateRutascobradoreDto): Promise<any | undefined> {  
    try {
      const rutascobradores = await this.dataSource.query('call QuitarRutasCobrador(?,?,?)', [
        dto.empresa_id,dto.cobradores_id,dto.rutas_id]);   
      return rutascobradores[0];
    } catch (error) {
        console.log(error);  
    }
  }
    
}
