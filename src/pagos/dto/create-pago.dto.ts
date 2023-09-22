import { Double } from "typeorm";

export class CreatePagoDto {
    empresa_id:number;
    prestamos_id:number;
    fecha:string;
    notransaccion:number;
    detallepagos:string;
    tcapital:Double;
    tinteres:Double;
    tseguro:Double;
    totros:Double;
    tmora:Double;
    balance:Double;
    atrasos:Double;
    cobrador_id:number;
    detalle:[];
    buscar:string;
    tipoprestamos:number;
    fechaini:string;
    fechafin:string;
    pagos_id:number;
    motivo:string;
    usuario_id:number;
    cuotas:[];
    op:number; 
}
