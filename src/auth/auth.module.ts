import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  imports: [ UsuarioModule],
  controllers: [AuthController],
  providers: [AuthService,LocalStrategy]
})
export class AuthModule {}


