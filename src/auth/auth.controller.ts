import { CreateUserDto } from './../users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { Public } from '@/common-x/decorator';
import { AuthDto } from './../dto/auth.dto';
import { Tokens } from './../types/tokens.type';

import {
  Body,
  Controller,
  Post,
  UseGuards,
  Get,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { Generico } from './../users/dto/Generico';
import { DatosCuentas } from './../users/dto/datosCuentas';

@Controller({
  path: 'auth',
  version: '1.0.2',
})
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('/login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() dto: AuthDto) {    
     return await this.authService.login(dto[0]);
  }

  @Public()
  @Post('/InsertarUsuarios')
  @HttpCode(HttpStatus.CREATED)
  async register(@Body() dto: CreateUserDto): Promise<Tokens> {
   return await this.authService.InsertarUsuarios(dto[0]);
  }

  @Public()
  @Post('/existenusuarios')
  @HttpCode(HttpStatus.CREATED)
  async existenusuarios(@Body() dto: Generico): Promise<Tokens> {
    
    return await this.authService.existenusuarios(dto);
  }

  @Public()
  @Post('/getEmpresas')
  @HttpCode(HttpStatus.CREATED)
  async getEmpresas(@Body() dto: Generico): Promise<Tokens> {
    return await this.authService.getEmpresas(dto);
  }

  @Public()
  @Post('/getTipo')
  @HttpCode(HttpStatus.CREATED)
  async getTipo(@Body() dto: Generico): Promise<Tokens> {
    return await this.authService.getTipo(dto);
  }

  @Public()
  @Post('/CuentaExiste')
  @HttpCode(HttpStatus.CREATED)
  async CuentaExiste(@Body() dto: DatosCuentas): Promise<Tokens> {
    console.log(dto);
    return await this.authService.CuentaExiste(dto[0]);
  }

}
