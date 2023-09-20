import { Injectable } from '@nestjs/common';
import { CreatePrestamoDto } from './dto/create-prestamo.dto';
import { UpdatePrestamoDto } from './dto/update-prestamo.dto';
import { EntityManager } from 'typeorm';

@Injectable()
export class PrestamosService {
  constructor(private dataSource: EntityManager) { }
  async BuscarClientes(dto: CreatePrestamoDto): Promise<any | undefined> {
    const buscar = "%"+dto.buscar+"%";
    try {
      const prestamos = await this.dataSource.query(
        'call BuscarClientesPrestamos(?,?)',
        [          
          dto.empresa_id,
          buscar          
        ],
      );
      
      return prestamos[0];
    } catch (error) {
      console.log(error);
    }
  }

  async getPlazos(dto: CreatePrestamoDto): Promise<any | undefined> {
    try {
      const prestamos = await this.dataSource.query(
        'call getPlazos(?)',
        [
          dto.empresa_id          
        ],
      );
      return prestamos[0];
    } catch (error) {
      console.log(error);
    }
  }

  async getRutas(dto: CreatePrestamoDto): Promise<any | undefined> {   
    try {
      const prestamos = await this.dataSource.query(
        'call getRutas(?)',
        [       
          dto.empresa_id,          
        ],
      );
      
      return prestamos[0];
    } catch (error) {
      console.log(error);
    }
  }

  async getTiposPrestamos(dto: CreatePrestamoDto): Promise<any | undefined> {    
    try {
      const prestamos = await this.dataSource.query(
        'call getTiposPrestamos(?)',
        [
          dto.empresa_id,          
        ],
      );
      return prestamos[0];
    } catch (error) {
      console.log(error);
    }
  }

  async getConfiguracionAllActiva(dto: CreatePrestamoDto): Promise<any | undefined> {
    try {
      const prestamos = await this.dataSource.query('call getConfiguracionAllActiva(?)', [
        dto.empresa_id,
      ]);
      return prestamos[0];
    } catch (error) {
      console.log(error);
    }
  }

  async getPrestamosClientes(dto: CreatePrestamoDto): Promise<any | undefined> {
    try {
      const prestamos = await this.dataSource.query('call getPrestamosClientes(?,?)', [
        dto.empresa_id,
        dto.clientes_id
      ]);
      return prestamos[0];
    } catch (error) {
      console.log(error);
    }
  }

  async getCuotasPrestamosClientes(dto: CreatePrestamoDto): Promise<any | undefined> {    
    try {
      const prestamos = await this.dataSource.query('call getCuotasPrestamosClientes(?,?)', [
        dto.empresa_id,
        dto.prestamos_id        
      ]);

      return prestamos[0];
    } catch (error) {
      console.log(error);
    }
  }

  async InsertarPrestamos(dto: CreatePrestamoDto): Promise<any | undefined> {
    try {
      const prestamos = await this.dataSource.query('call InsertarPrestamos(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [
        dto.clientes_id,
        dto.empresa_id,
        dto.tipoprestamos_id,
        dto.minteres,
        dto.monto,
        dto.interes,
        dto.cuota,
        dto.fechaInicio,
        dto.fechavence,
        dto.seguro,
        dto.otros,
        dto.plazo_id,
        dto.cantidadplazos,
        dto.ruta_id,
        dto.cobrador_id     
      ]);

      const id = prestamos[0][0].id;
      
      for (let i = 0; i < dto.cuotas.length; i++) {
        const r: any = dto.cuotas[i];       
        try {
          const trabajos = await this.dataSource.query(
                  'call InsertarCuotas(?,?,?,?,?,?,?)',
                  [
                    id,
                    dto.empresa_id,
                    r.fecha,
                    r.linea,
                    r.Capital  ,
                    r.interes,  
                    0.00
                  ],
                );   
        
        } catch (error) {
          console.log(error);
        }
      } 
      

         try {
           const prestamos1 = await this.dataSource.query('call getImprimirPrestamos(?,?)', [
             dto.empresa_id,id]); 
           return prestamos1[0];
         } catch (error) {
           console.log(error);  
         }
       

    } catch (error) {
      console.log(error);
    }
  }

  async getPrestamosId(dto: CreatePrestamoDto): Promise<any | undefined> {    
    try {
      const prestamos = await this.dataSource.query('call getPrestamosId(?,?)', [       
        dto.empresa_id,
        dto.prestamos_id,       
      ]);
      console.log(prestamos[0])
      return prestamos[0];
    } catch (error) {
      console.log(error);
    }
  }

  async getCuotasVencidas(dto: CreatePrestamoDto): Promise<any | undefined> {
    try {
      const prestamos = await this.dataSource.query('call getCuotasVencidas(?,?,?)', [       
        dto.op,
        dto.empresa_id,
        dto.prestamos_id,       
      ]);
        
      return prestamos[0];
    } catch (error) {
      console.log(error);
    }
  }
  


  
}
