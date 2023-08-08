import { Double } from "typeorm";

export class CreateConfiguracionDto {
    id:number;
    empresa_id:number;
    nombre:string;
    valor:Double;
}
