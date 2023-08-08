import { Injectable } from '@nestjs/common';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { UserRepository } from 'src/users/repository/user.repository';
import { EntityManager } from 'typeorm';

@Injectable()
export class EmpresaService {

  constructor(private dataSource: EntityManager) {}

 async InsertarEmpresa(dto: CreateEmpresaDto): Promise<any | undefined> {  
  try {
    const empresa = await this.dataSource.query('call InsertarEmpresa(?,?,?,?,?,?,?,?,?,?,?)', [
      dto.id,dto.rnc,dto.nombre,dto.telefonos,dto.direccion,dto.eslogan,dto.piepag1,dto.piepag2,dto.pcapital,dto.pmora,dto.email,]);   
    return empresa[0];
  } catch (error) {
    console.log(error);  
  }
}

async getEmpresaId(dto: CreateEmpresaDto): Promise<any | undefined> {
    try {
      const usuario = await this.dataSource.query('call getEmpresa(?)', [
        dto.id]);
      return usuario[0];
    } catch (error) {
      console.log(error);
    }
  }
}
