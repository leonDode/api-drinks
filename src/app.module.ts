import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DrinksModule } from './drinks/drinks.module';
import { DatabaseModule } from './database/database.module';
import { UsuarioModule } from './usuario/usuario.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [DrinksModule, DatabaseModule, UsuarioModule, AuthModule],
  controllers: [AppController ],
  providers: [AppService],
})
export class AppModule {}
