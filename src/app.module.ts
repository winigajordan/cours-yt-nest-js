import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PropertyModule } from './property/property.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import dbConfig from './config/db.config';
import dbConfigProduction from './config/db.config.production';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      load : [dbConfig, dbConfigProduction]
    }),
    PropertyModule,
    UserModule,
    TypeOrmModule.forRootAsync({
      useFactory : process.env.NODE_ENV ==="production" ? dbConfigProduction : dbConfig
    }),
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
