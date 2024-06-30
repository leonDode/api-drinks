import { IsBoolean, IsString } from 'class-validator'

export class CreateDrinkDTO{


    
    
    
    @IsString()
    readonly nome: String

    @IsString()
    readonly descricao: string

    @IsString({ each: true })
    readonly tags: string[]
    
    @IsString({ each: true })
    readonly ingredientes: string[]
    
    @IsBoolean()
    readonly salvo: boolean
}