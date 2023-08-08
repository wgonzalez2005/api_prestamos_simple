import { Injectable } from '@nestjs/common';
import { CreatePagoDto } from './dto/create-pago.dto';
import { UpdatePagoDto } from './dto/update-pago.dto';
import { EntityManager } from 'typeorm';

@Injectable()
export class PagosService {
  constructor(private dataSource: EntityManager) {}

  async InsertarPagos(dto: CreatePagoDto): Promise<any | undefined> {
    try {
      const pagos = await this.dataSource.query(
        'call InsertarPagos(?,?,?,?,?,?,?,?,?,?)',
        [
          dto.empresa_id,
          dto.prestamos_id,
          dto.notransaccion,
          dto.detallepagos,
          dto.tcapital,
          dto.tinteres,
          dto.tseguro,
          dto.totros,
          dto.tmora,
          dto.cobrador_id,
        ],
      );

      const id = pagos[0][0].id;

      for (let i = 0; i < dto.detalle.length; i++) {
        const r: any = dto.detalle[i];
        try {
          const trabajos = await this.dataSource.query(
            'call InsertarDetallePagos(?,?,?,?,?,?,?,?,?,?)',
            [
              id,
              dto.empresa_id,
              dto.prestamos_id,
              r.linea,
              r.proceso,
              r.pcapital,
              r.pinteres,
              r.pseguro,
              r.potros,
              r.pmora,
            ],
          );
        } catch (error) {
          console.log(error);
        }
      }

      return pagos[0];
      // return [];
    } catch (error) {
      console.log(error);
    }
  }

  async getBuscarPrestamosClientes(dto: CreatePagoDto,): Promise<any | undefined> {
    try {
      const buscar = '%' + dto.buscar + '%';
      const pagos = await this.dataSource.query(
        'call getBuscarPrestamosClientes(?,?)',
        [dto.empresa_id, buscar],
      );
      return pagos[0];
    } catch (error) {
      console.log(error);
    }
  }

  async getBuscarPrestamosClientesFechas( dto: CreatePagoDto,): Promise<any | undefined> {
    
    try {
      const pagos = await this.dataSource.query(
        'call getBuscarPrestamosClientesFechas(?,?,?)',
        [dto.empresa_id, dto.fechaini, dto.fechafin],
      );

      return pagos[0];
    } catch (error) {
      console.log(error);
    }
  }

  async getBuscarPrestamosClientesTipoPrestamos(dto: CreatePagoDto,): Promise<any | undefined> {
    
    try {
      const pagos = await this.dataSource.query(
        'call getBuscarPrestamosClientesTipoPrestamos(?,?)',
        [dto.empresa_id, dto.tipoprestamos],
      );
      return pagos[0];
    } catch (error) {
      console.log(error);
    }
  }

  async BuscarPagosClientes(dto: CreatePagoDto,): Promise<any | undefined> {
    console.log(dto);
    try {
      const buscar = '%' + dto.buscar + '%';
      const pagos = await this.dataSource.query(
        'call BuscarPagosClientes(?,?)',
        [dto.empresa_id, buscar],
      );
      return pagos[0];
    } catch (error) {
      console.log(error);
    }
  }

  async getPagosClientesFechas(dto: CreatePagoDto,): Promise<any | undefined> {
    console.log(dto);
    try {
      const pagos = await this.dataSource.query(
        'call getPagosClientesFechas(?,?,?)',
        [dto.empresa_id, dto.fechaini, dto.fechafin],
      );
      return pagos[0];
    } catch (error) {
      console.log(error);
    }
  }

  async getDetallePagos(dto: CreatePagoDto,): Promise<any | undefined> {
    console.log(dto);
    try {
      const pagos = await this.dataSource.query(
        'call getDetallePagos(?,?)',
        [dto.empresa_id,  dto.pagos_id],
      );
      return pagos[0];
    } catch (error) {
      console.log(error);
    }
  }
  
}
