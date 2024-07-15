import { IsBoolean, IsString } from 'class-validator'

export class CreateDrinkDTO{


    
    
    
    @IsString()
    readonly nome: String

    @IsString()
    readonly descricao: string

    @IsString()
    readonly instrucoes: string

    @IsString({ each: true })
    readonly tags: string[]
    
    @IsString({ each: true })
    readonly ingredientes: string[]

    @IsString()
    readonly medidas0: string

    @IsString()
    readonly medidas1: string

    @IsString()
    readonly medidas2: string

    @IsString()
    readonly medidas3: string

    @IsString()
    readonly medidas4: string
    
    @IsBoolean()
    readonly salvo: boolean

    @IsString()
    readonly img: String
}