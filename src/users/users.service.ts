import { Injectable } from '@nestjs/common';

import * as bcrypt from 'bcrypt';

import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from './repository/user.repository';
import { EntityManager } from 'typeorm';
import { Generico } from './dto/Generico';
import { DatosCuentas } from './dto/datosCuentas';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UserRepository,private dataSource: EntityManager) {}

  async findOneByEmail(cuenta: string): Promise<any | undefined> {
    try {
      const usuario = await this.dataSource.query('call login(?)', [
        cuenta,
      ]);
      
      return usuario[0];

    } catch (error) {
      console.log(error);
    }
  }

  async InsertarUsuarios(dto: CreateUserDto) {
    const hash = await this.hashPassword(dto.clave);
    try {

      const usuario = await this.dataSource.query('call InsertarUsuario(?,?,?,?,?,?)', [
        dto.userId,dto.empresaId,dto.nombre,dto.cuenta,hash,dto.tipoId,]);   
      console.log(usuario[0]);
      return usuario[0];

    } catch (error) {
      console.log(error);
    }

  }

  async getEmpresas(dto: Generico) {
    
    try {
      const usuario = await this.dataSource.query('call getEmpresaAll();', []);      
      return usuario[0];
    } catch (error) {
      console.log(error);
    }

  }

  async getTipo(dto: Generico) {   

    try {
      const usuario = await this.dataSource.query('call getTipoUsuarios()', []);  
      console.log(usuario[0])   ;
      return usuario[0];
    } catch (error) {
      console.log(error);
    }

  }

  async existenusuarios(dto: Generico): Promise<any | undefined> {
    
    try {
      const usuario = await this.dataSource.query('call ContarUsuarios()', [
        ,
      ]);
      //const result = usuario.find((e: any) => e !== undefined) || [];
      return usuario[0];
    } catch (error) {
      console.log(error);
    }
  }

  async CuentaExiste(dto: DatosCuentas): Promise<any | undefined> {

    try {
      const usuario = await this.dataSource.query('call ExisteCuenta(?,?)', [
        dto.empresaId,dto.cuenta,
      ]);
      
      return usuario[0];
    } catch (error) {
      console.log(error);
    }
  }

  async hashPassword(data: string){
    return bcrypt.hash(data, 10);
  }
  
}
