import { PartialType } from '@nestjs/mapped-types'
import { CreateDrinkDTO } from './create_drink.dto'

export class UpdateCourseDTO extends PartialType(CreateDrinkDTO) {
    
}