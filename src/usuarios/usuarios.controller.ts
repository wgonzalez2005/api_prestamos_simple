import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { CreateTipoDto } from './dto/create-tipo.dto';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post("InsertarUsuarios")
  InsertarUsuarios(@Body() dto: CreateUsuarioDto) {
    return this.usuariosService.InsertarUsuarios(dto[0]);
  }

  @Post("getAllUsuarios")
  getAllUsuarios(@Body() dto: CreateUsuarioDto) {
     return this.usuariosService.getAllUsuarios(dto[0]);
  }

  @Post("getUsuariosId")
  getUsuariosId(@Body() dto: CreateUsuarioDto) {
    return this.usuariosService.getUsuariosId(dto[0]);
  }

  @Post("getTiposUsuarios")
  getTiposUsuarios(@Body() dto: CreateUsuarioDto) {
    return this.usuariosService.getTiposUsuarios(dto[0]);
  }

  @Post("BuscarUsuarios")
  BuscarUsuarios(@Body() dto: CreateUsuarioDto) {
    console.log(dto)
    return this.usuariosService.BuscarUsuarios(dto[0]);
  }
  
  @Post("BloquearUsuarios")
  BloquearUsuarios(@Body() dto: CreateUsuarioDto) {
    return this.usuariosService.BloquearUsuarios(dto[0]);
  }

  @Post("CambiarContrasena")
  CambiarContrasena(@Body() dto: CreateUsuarioDto) {
    return this.usuariosService.CambiarContrasena(dto[0]);
  }

  @Post("InsertarTipoUsuarios")
  InsertarTipoUsuarios(@Body() dto: CreateTipoDto) {
    return this.usuariosService.InsertarTipoUsuarios(dto[0]);
  }

  @Post("getTipoUsuariosId")
  getTipoUsuariosId(@Body() dto: CreateTipoDto) {
    return this.usuariosService.getTipoUsuariosId(dto[0]);
  }


  
}
