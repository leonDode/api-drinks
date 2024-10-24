import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDTO } from './dto/create_usuario.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Usuarios')
@Controller('usuario')
export class UsuarioController {
  constructor(private readonly userService: UsuarioService) {}

  @Post()
  create(@Body() createUserDto: CreateUsuarioDTO) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAllUsers() {
    return this.userService.findAllUsers();
  }

  @Get(':id')
  findUsersById(@Param('id') id: number) {
    return this.userService.findOne(id);
  }

  @Get('/pesqEmail/:email')
  findUsersByEmail(@Param('email') email: string) {
    return this.userService.findByEmail(email);
  }

  @Get('/pesqNome/:nome')
  findUsersByName(@Param('nome') nome: string) {
    return this.userService.findByName(nome);
  }
}
