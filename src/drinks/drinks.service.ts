import { Injectable, NotFoundException } from '@nestjs/common';
import { Drink } from './entities/drinks.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DrinksService {

    constructor(
        @InjectRepository(Drink)
        private readonly drinkRepository: Repository<Drink>
    ){

    }

    private drinks: Drink[] =[
        {
            id: 1,
            nome: 'mojito',
            descricao: 'afakonajbcasjc asbcaspibcaps',
            tags:['doce','refrescante'],
            ingredientes: ['açucar','hortela','rum'],
            salvo: true

        },
    ]

  async  findAll(){
        return this.drinkRepository.find()
    }


    async  findByName(nome:string){
        const drink =  await this.drinkRepository.findOne({
            where: {nome},
          })
          if(!drink){
            throw new NotFoundException(`o drink  ${nome} nao existe`)
          }
          return drink
    }


    async   findOne(id:number){
      const drink =  await this.drinkRepository.findOne({
        where: {id},
      })
      if(!drink){
        throw new NotFoundException(`o drink com ID ${id} nao existe`)
      }
      return drink
    }


    async   create(createDrinkDTO:any){
        const drink = this.drinkRepository.create(createDrinkDTO)
        return this.drinkRepository.save(drink)

        
    }


    async  update(id:number ,updateDrinkDTO:any){

      const drink = await this.drinkRepository.preload({
        ...updateDrinkDTO,
        id
      })
       if(!drink){
        throw new NotFoundException(`o drink com ID ${id} nao existe`)
       }
       return this.drinkRepository.save(drink)
    }


    async   remove(id:number ){
        const drink = await this.drinkRepository.findOne({
           where: {id}
          })
          if(!drink){
            throw new NotFoundException(`o drink com ID ${id} nao existe`)
           }
           return this.drinkRepository.remove(drink)

       
    }





}
