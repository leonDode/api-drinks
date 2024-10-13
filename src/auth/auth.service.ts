import { Injectable } from '@nestjs/common';
import { UsuarioService } from 'src/usuario/usuario.service';
import * as bcrypt from 'bcrypt';
import { Usuario } from 'src/drinks/entities/usuario.entity';


@Injectable()
export class AuthService {
    constructor(private readonly usuarioService:UsuarioService){}



    async validateUser(email: string, password: string): Promise<Usuario> {
        const usuario = await this.usuarioService.findByEmail(email);
    
        if (usuario) {
          const isPasswordValid = await bcrypt.compare(password, usuario.password);
    
          if (isPasswordValid) {
            return {
              ...usuario,
              password: undefined,
            };
          }
          throw new Error('Email ou senha incorreta ')
        }
    
        
      }
}
