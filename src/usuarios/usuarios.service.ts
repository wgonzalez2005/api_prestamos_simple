import { Usuario } from './entities/usuario.entity';
import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { EntityManager } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { CreateTipoDto } from './dto/create-tipo.dto';

@Injectable()
export class UsuariosService {
  constructor(private dataSource: EntityManager) {}
  
  async InsertarUsuarios(dto: CreateUsuarioDto): Promise<any | undefined> {  
    try {
      const hash = await this.hashPassword(dto.clave);

      const empresa = await this.dataSource.query('call InsertarUsuario(?,?,?,?,?,?)', [
        dto.userId,dto.empresaId,dto.nombre,dto.cuenta,hash,dto.tipoId,]);   
      return empresa[0];
    } catch (error) {
      console.log(error);  
    }
  }

  async getAllUsuarios(dto: CreateUsuarioDto): Promise<any | undefined> {  
    try {
      const usuario = await this.dataSource.query('call getUsuariosAll(?)', [dto.id,]);      
      return usuario[0];
    } catch (error) {
      console.log(error);  
    }
  }

  async getUsuariosId(dto: CreateUsuarioDto): Promise<any | undefined> {  
  try {
   
    const usuario = await this.dataSource.query('call getUsuariosId(?,?)', [
      dto.empresaId,dto.userId]);
      console.log(usuario[0]);   
    return usuario[0];

  } catch (error) {
    console.log(error);  
  }
}

async getTiposUsuarios(dto: CreateUsuarioDto): Promise<any | undefined> {  
  try {
    const tipos = await this.dataSource.query('call getTipoUsuarios()', []);       
    return tipos[0];
  } catch (error) {
    console.log(error);  
  }
}

async BuscarUsuarios(dto: CreateUsuarioDto): Promise<any | undefined> {  
  try {
    const usuario = await this.dataSource.query('call BuscarUsuarios(?,?)', [
      dto.empresaId,dto.buscar,]);   
      console.log(usuario)
      return usuario[0];
  } catch (error) {
    console.log(error);  
  }
}

async BloquearUsuarios(dto: CreateUsuarioDto): Promise<any | undefined> {  
  try {
    const usuario = await this.dataSource.query('call BloquearUsuario(?,?)', [
      dto.empresaId,dto.userId,]);   
      console.log(usuario)
      return usuario[0];
  } catch (error) {
    console.log(error);  
  }
}
async CambiarContrasena(dto: CreateUsuarioDto): Promise<any | undefined> {  
  try {
    console.log(dto);

    const hash = await this.hashPassword(dto.clave);
    const usuario = await this.dataSource.query('call cambiarContrasena(?,?,?,?)', [
      dto.empresaId,dto.userId,dto.cuenta,hash]); 

    return usuario[0];
  } catch (error) {
    console.log(error);  
  }
}

async InsertarTipoUsuarios(dto: CreateTipoDto): Promise<any | undefined> {  
  try {
    const tipousuarios = await this.dataSource.query('call InsertarTipoUsuarios(?,?)', [
      dto.id,dto.nombre]);   
    return tipousuarios[0];
  } catch (error) {
    console.log(error);  
  }
}

async getTipoUsuariosId(dto: CreateTipoDto): Promise<any | undefined> {  
  try {
    const tipousuarios = await this.dataSource.query('call getTipoUsuariosId(?)', [
      dto.id]);   
    return tipousuarios[0];
  } catch (error) {
    console.log(error);  
  }
}

async hashPassword(data: string){
  return bcrypt.hash(data, 10);
}

}
