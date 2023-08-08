import { Double } from "typeorm";

export class CreatePrestamoDto {
    id:number;
    empresa_id:number;
    buscar:string;
    clientes_id:number;
    prestamos_id:number;
    tipoprestamos_id:number;
    cantidadplazos:number;
    minteres:Double;
    monto:Double;
    interes:Double;
    cuota:Double;
    fechaInicio:string;
    fechavence:string;
    seguro:Double;
    otros:Double;
    plazo_id:number;
    ruta_id:number;
    cobrador_id:number;
    cuotas:[];  
    op:number;  
}


