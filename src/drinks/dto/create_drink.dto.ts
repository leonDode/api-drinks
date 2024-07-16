import { IsBoolean, IsOptional, IsString } from 'class-validator'

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

    
    @IsOptional()
    @IsString()
    readonly medidas1: string | null

    
    @IsOptional()
    @IsString()
    readonly medidas2: string | null

    
    @IsOptional()
    @IsString()
    readonly medidas3: string | null

    
    @IsOptional()
    @IsString()
    readonly medidas4: string | null
 
    @IsBoolean()
    readonly salvo: boolean

    @IsString()
    readonly img: String
}