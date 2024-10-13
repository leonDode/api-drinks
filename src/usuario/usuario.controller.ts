import { Body, Controller, Post } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDTO } from './dto/create_usuario.dto';

@Controller('usuario')
export class UsuarioController {

    constructor(private readonly userService: UsuarioService) {}

    @Post()
    create(@Body() createUserDto: CreateUsuarioDTO) {
      return this.userService.create(createUserDto);
    }
}
