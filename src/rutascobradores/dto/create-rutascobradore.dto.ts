import { NumericType } from "typeorm";

export class CreateRutascobradoreDto {
    id:number;
    empresa_id:number;
    cobradores_id:number;
    rutas_id:number;   
    ruta:string;
    nombre:string;
    cuenta:string;
}
