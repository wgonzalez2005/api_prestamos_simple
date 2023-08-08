import { CreateUserDto } from './../users/dto/create-user.dto';
import { UsersService } from './../users/users.service';
import { ForbiddenException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Tokens } from './../types';
import { AuthDto } from './../dto/auth.dto';
import { Generico } from './../users/dto/Generico';
import { DatosCuentas } from './../users/dto/datosCuentas';
@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private jwtService: JwtService,
  ) { }

  //iniciar sesión
  async login(dto: AuthDto): Promise<Tokens> {    
    let user = await this.userService.findOneByEmail(dto.cuenta);
   if(user.length>0){
    if (!user) throw new ForbiddenException('Access Denied.');
    const passwordMatches = await bcrypt.compare(dto.clave, user[0].clave);   
    if (!passwordMatches) {
      user="[]";
    }else{
      const tokens = await this.getTokens(user[0].id, user[0].cuenta);
      user[0].access_token=tokens.access_token;
    }
    
   }else{
    user="[]";
   }
   return user;
  }

  async InsertarUsuarios(dto: CreateUserDto) {  
    return await this.userService.InsertarUsuarios(dto);
  }

  async existenusuarios(dto: Generico) {
    return await this.userService.existenusuarios(dto);

  }

  async getEmpresas(dto: Generico) {
    return await this.userService.getEmpresas(dto);

  }

  async getTipo(dto: Generico) {
    return await this.userService.getTipo(dto);

  }

  async CuentaExiste(dto: DatosCuentas) {
    return await this.userService.CuentaExiste(dto);

  }
  async getTokens(userId: number, usuario: string) {
    const [at] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: userId,
          usuario,
        },
        {
          secret: process.env.JWT_SECRET,
          expiresIn: '24h',
        },
      ),

    ]);

    return {
      access_token: at
    };
  }

  //Encriptación de la copntraseña
  async hashPassword(data: string) {
    return bcrypt.hash(data, 10);
  }
}
