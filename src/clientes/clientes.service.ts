import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { EntityManager } from 'typeorm';
import { CreateTrabajosDto } from './dto/create-trabajos.dto';
import { CreateReferenciasDto } from './dto/create-referencias.dto';

@Injectable()
export class ClientesService {
  constructor(private dataSource: EntityManager) { }

  async InsertarClientes(dto: CreateClienteDto): Promise<any | undefined> {

    try {
      const clientes = await this.dataSource.query(
        'call InsertarClientes(?,?,?,?,?,?,?,?,?,?,?,?)',
        [
          dto.clientes_id,
          dto.empresa_id,
          dto.cedula,
          dto.nombre,
          dto.direccion,
          dto.negocio,
          dto.ubicacion,
          dto.telefon1,
          dto.telefon2,
          dto.estadocivil,
          dto.sexo,
          dto.email,
        ],
      );

      return clientes[0];
    } catch (error) {
      console.log(error);
    }
  }

  async InsertarTrabajos(dto: CreateClienteDto): Promise<any | undefined> {
      
      for (let i = 0; i < dto.trabajos.length; i++) {
          const r: any = dto.trabajos[i];       
          try {
            const clientes = await this.dataSource.query(
                    'call InsertarTrabajos(?,?,?,?,?,?,?)',
                    [
                      r.clientes_id,
                      r.empresa_id,
                      r.nombre,
                      r.direccion,
                      r.telefono  ,
                      r.sueldo,
                      r.puesto,
                    ],
                  );   
                  return clientes[0];
          } catch (error) {
            console.log(error);
          }
        }

  }

  async InsertarReferencias(dto: CreateClienteDto,): Promise<any | undefined> {
    try {
      for (let i = 0; i < dto.referencias.length; i++) {
        const r: any = dto.referencias[i];       
        try {
          const referencias = await this.dataSource.query(
                  'call InsertarReferencias(?,?,?,?,?,?,?)',
                  [
                    r.clientes_id,
                    r.empresa_id,
                    r.nombres,
                    r.direccion,
                    r.telefono,
                   r.parentezco,
                   r.coodeudor,
                  ],
                );     
        
        } catch (error) {
          console.log(error);
        }
      }
      
      return [];
    } catch (error) {
      console.log(error);
    }
  }

  async ExisteClientes(dto: CreateClienteDto): Promise<any | undefined> {
    
    try {
      const clientes = await this.dataSource.query(
        'call ExistClientes(?,?)',
        [
          dto.empresa_id,
          dto.cedula
        ],
      );
      return clientes[0];
    } catch (error) {
      console.log(error);
    }
  }


  async getClientesAll(dto: CreateClienteDto): Promise<any | undefined> {
    try {
      const clientes = await this.dataSource.query('call getClientesAll(?)', [
        dto.empresa_id,
      ]);
      return clientes[0];
    } catch (error) {
      console.log(error);
    }
  }

  async getClientesId(dto: CreateClienteDto): Promise<any | undefined> {
    try {
      const clientes = await this.dataSource.query('call getClientesId(?,?)', [
        dto.empresa_id,
        dto.clientes_id,
      ]);
      return clientes[0];
    } catch (error) {
      console.log(error);
    }
  }

  async getReferencias(dto: CreateReferenciasDto): Promise<any | undefined> {
    
    try {
      const clientes = await this.dataSource.query('call getReferencias(?,?)', [
        dto.empresa_id,
        dto.clientes_id,
      ]);
      return clientes[0];
    } catch (error) {
      console.log(error);
    }
  }

  async getTrabajos(dto: CreateTrabajosDto): Promise<any | undefined> {
    console.log(dto);
    try {
      const clientes = await this.dataSource.query('call getTrabajos(?,?)', [
        dto.empresa_id,
        dto.clientes_id,
      ]);
      return clientes[0];
    } catch (error) {
      console.log(error);
    }
  }

  async BuscarClientes(dto: CreateClienteDto): Promise<any | undefined> {
    
    try {
      const buscar = '%' + dto.buscar + '%';
      const clientes = await this.dataSource.query('call BuscarClientes(?,?)', [
        dto.empresa_id,
        buscar,
      ]);
      return clientes[0];
    } catch (error) {
      console.log(error);
    }
  }

  async BloquearClientes(dto: CreateClienteDto): Promise<any | undefined> {
    
    try {
      const clientes = await this.dataSource.query(
        'call BloquearClientes(?,?)',
        [dto.empresa_id, dto.clientes_id]);

       return clientes[0];
    } catch (error) {
      console.log(error);
    }
  }

  async EliminarClientes(dto: CreateClienteDto): Promise<any | undefined> {
    try {
      const clientes = await this.dataSource.query(
        'call EliminarClientes(?,?)',
        [dto.empresa_id, dto.clientes_id]);
      return clientes[0];
    } catch (error) {
      console.log(error);
    }
  }

  async EliminarTrabajos(dto: CreateClienteDto): Promise<any | undefined> {
    try {
      const clientes = await this.dataSource.query(
        'call DeleteTrabajos(?,?,?)',
        [dto.empresa_id, dto.clientes_id,dto.nombre]);
      return clientes[0];
    } catch (error) {
      console.log(error);
    }
  }

  async EliminarReferencias(dto: CreateClienteDto): Promise<any | undefined> {
    try {
      const clientes = await this.dataSource.query(
        'call DeleteReferencias(?,?,?)',
        [dto.empresa_id, dto.clientes_id,dto.nombre]);
      return clientes[0];
    } catch (error) {
      console.log(error);
    }
  }
}
