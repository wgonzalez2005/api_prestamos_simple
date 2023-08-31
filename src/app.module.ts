import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { AtGuard } from '@/common-x/guards';

import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmpresaModule } from './empresa/empresa.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ConfiguracionModule } from './configuracion/configuracion.module';
import { RutasModule } from './rutas/rutas.module';
import { CobradoresModule } from './cobradores/cobradores.module';
import { RutascobradoresModule } from './rutascobradores/rutascobradores.module';
import { ClientesModule } from './clientes/clientes.module';
import { PrestamosModule } from './prestamos/prestamos.module';
import { PagosModule } from './pagos/pagos.module';
import { ReportesModule } from './reportes/reportes.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }), DatabaseModule, AuthModule, UsersModule, EmpresaModule, UsuariosModule, ConfiguracionModule, RutasModule, CobradoresModule, RutascobradoresModule, ClientesModule, PrestamosModule, PagosModule, ReportesModule],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AtGuard,
    },
    AppService,
  ],
})
export class AppModule {}
