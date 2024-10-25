import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, Max, Min } from 'class-validator';

export class CreateAvaliacaoDTO {
  @ApiProperty({
    example: 1
  })
  @IsInt()
  @IsNotEmpty()
  usuarioId: number;

  @ApiProperty({
    example: 1
  })
  @IsInt()
  @IsNotEmpty()
  drinkId: number;

  @ApiProperty({
    example: 5
  })
  @IsInt()
  @Min(1)
  @Max(5)
  estrelas: number;
}
