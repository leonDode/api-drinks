import { IsEmail,IsString, Matches, MaxLength, MinLength } from 'class-validator'

export class CreateUsuarioDTO{


    
    
    
    @IsString()
    readonly nome: String

    
    @IsEmail()
    readonly email: string

    @IsString()
    @MinLength(6)
    @MaxLength(20)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Senha fraca',
  })
   readonly senha: string;


    


 
}