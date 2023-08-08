export class CreateClienteDto {
            clientes_id:number;
            empresa_id:number;
			cedula:string;
			nombre:string;
			direccion:string;
			negocio:string;
			ubicacion:string;
			telefon1:string;
			telefon2:string;
			estadocivil:string;
			sexo:string;
			email:string;
            trabajos:[];
            referencias:[];
			buscar:string;           
}
