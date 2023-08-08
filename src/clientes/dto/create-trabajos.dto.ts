import { Double } from "typeorm";
export class CreateTrabajosDto {
            clientes_id:number;
            empresa_id:number;
			nombre:string;
			direccion:string;			
			telefon1:string;			
			sueldo:Double;
			puesto:string;            
}
