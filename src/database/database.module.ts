import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
 
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mysql',
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_PORT),
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD || '',
        database: process.env.DATABASE_DB,
        synchronize: true,
      }),
    })
  ],
})
export class DatabaseModule {}