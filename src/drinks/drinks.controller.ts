import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Res } from '@nestjs/common';
import { DrinksService } from './drinks.service';

@Controller('drinks')
export class DrinksController {


constructor(private readonly deinkService:DrinksService){
}


  @Get()
    findAll(@Res() response){
        return response.status(200).json({ message: "opa"})

    }


    @Get(':name')
    findByName(@Param('name') name:string){
        return name

    }


    @Post()
    createDrink(@Body() body){
        return body

    }

    @Put(':id')
     updateDrinks(@Param('id') id:string){

        return
     }



     @HttpCode(204)
     @Delete(':id')
     deleteDrinks(@Param('id') id:string){

     }

}
