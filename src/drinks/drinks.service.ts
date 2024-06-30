import { Injectable } from '@nestjs/common';
import { Drinks } from './drinks.entity';

@Injectable()
export class DrinksService {
    private drinks: Drinks[] =[
        {
            id: 1,
            nome: 'mojito',
            descricao: 'afakonajbcasjc asbcaspibcaps',
            tags:['doce','refrescante'],
            ingredientes: ['açucar','hortela','rum'],
            salvo: true

        },
    ]

    findAll(){
        return this.drinks
    }


    findByName(nome:string){
        return this.drinks.find(drinks => drinks.nome === nome)
    }

    findOne(id:number){
        return this.drinks.find(drinks => drinks.id === id)
    }


    create(createDrinkDTO:any){
        this.drinks.push
    }


    update(id:number ,updateDrinkDTO:any){

        const existDrink = this.findOne(id)

        if(existDrink){
            const index = this.drinks.findIndex(drink => drink.id === id)

            this.drinks[index]={
                id,
                ...updateDrinkDTO

            }
        }
       
    }


    remove(id:number ){

        const index = this.drinks.findIndex(drink => drink.id === id)

        if(index >= 0){
            this.drinks.splice(index,1)
        }
        
        
       
    }





}
