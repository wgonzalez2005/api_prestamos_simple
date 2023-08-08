import { PartialType } from '@nestjs/mapped-types';
import { CreateEmpresaDto } from './create-empresa.dto';

export class UpdateEmpresaDto extends PartialType(CreateEmpresaDto) {
    id:number;
	rnc:string;
	nombre:string;
	telefonos:string;
	direccion:string;
	eslogan:string;
	piepag1:string;
	piepag2:string;
	pcapital:number;
	pmora:number;
	email:string; 
}
