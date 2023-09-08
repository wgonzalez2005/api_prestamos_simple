import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PagosService } from './pagos.service';
import { CreatePagoDto } from './dto/create-pago.dto';
import { UpdatePagoDto } from './dto/update-pago.dto';

@Controller('pagos')
export class PagosController {
  constructor(private readonly pagosService: PagosService) {}
  
  @Post('InsertarPagos')
  InsertarPagos(@Body() dto: CreatePagoDto) {    
    return this.pagosService.InsertarPagos(dto[0]);
  }

  @Post('getBuscarPrestamosClientes')
  getBuscarPrestamosClientes(@Body() dto: CreatePagoDto) {    
    return this.pagosService.getBuscarPrestamosClientes(dto[0]);
  }

  @Post('getBuscarPrestamosClientesFechas')
  getBuscarPrestamosClientesFechas(@Body() dto: CreatePagoDto) {    
    return this.pagosService.getBuscarPrestamosClientesFechas(dto[0]);
  }

  @Post('getBuscarPrestamosClientesTipoPrestamos')
  getBuscarPrestamosClientesTipoPrestamos(@Body() dto: CreatePagoDto) {    
    return this.pagosService.getBuscarPrestamosClientesTipoPrestamos(dto[0]);
  }

  @Post('BuscarPagosClientes')
  BuscarPagosClientes(@Body() dto: CreatePagoDto) {    
    return this.pagosService.BuscarPagosClientes(dto[0]);
  }

  @Post('getPagosClientesFechas')
  getPagosClientesFechas(@Body() dto: CreatePagoDto) {    
    return this.pagosService.getPagosClientesFechas(dto[0]);
  }
  
  @Post('getDetallePagos')
  getDetallePagos(@Body() dto: CreatePagoDto) {    
    return this.pagosService.getDetallePagos(dto[0]);
  }
  
  @Post('CancelarPagos')
  CancelarPagos(@Body() dto: CreatePagoDto) {    
    return this.pagosService.CancelarPagos(dto[0]);
  }
  
}
