import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from 'src/drinks/entities/usuario.entity';
import { Repository } from 'typeorm';
import { CreateUsuarioDTO } from './dto/create_usuario.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuarioService {

   
    constructor(

        @InjectRepository(Usuario)
        private readonly usuarioRepository: Repository<Usuario>
    ){}



    async create(createUserDto: CreateUsuarioDTO) {
        const hashedPassword = await bcrypt.hash(createUserDto.senha, 10);

        const usuario = this.usuarioRepository.create({
            ...createUserDto,
            senha: hashedPassword,
          });

          const createdUser = await this.usuarioRepository.save(usuario);

          delete createdUser.senha;

          return createdUser

}

  async   findOne(id:number){
    const usuario =  await this.usuarioRepository.findOne({where: {id}})
    if(!usuario){
      throw new NotFoundException(`o usuario com ID ${id} nao existe`)
    }
    return usuario
  }

  async   findByEmail(email: string){
    const usuario =  await this.usuarioRepository.findOne({where: {email}})
    if(!usuario){
      throw new NotFoundException(`o usuario com  email '${email}' nao existe`)
    }
    return usuario
  }

  async   findByName(nome: string){
    const usuario =  await this.usuarioRepository.findOne({where: {nome}})
    if(!usuario){
      throw new NotFoundException(`o usuario com  nome '${nome}' nao existe`)
    }
    return usuario
  }


}
