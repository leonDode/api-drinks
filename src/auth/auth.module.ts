import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [ UsuarioModule,JwtModule.register({
      secret: 'teste',
      signOptions: {expiresIn:'30d'}
  })],
  controllers: [AuthController],
  providers: [AuthService,LocalStrategy]
})
export class AuthModule {}


