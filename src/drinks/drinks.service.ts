import { Injectable, NotFoundException } from '@nestjs/common';
import { Drink } from './entities/drinks.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Tag } from './entities/tags.entity';
import { Ingrediente } from './entities/ingredientes.entity';

@Injectable()
export class DrinksService {

    constructor(
        @InjectRepository(Drink)
        private readonly drinkRepository: Repository<Drink>,

        @InjectRepository(Tag)
        private readonly tagRepository: Repository<Tag>,

        @InjectRepository(Ingrediente)
        private readonly ingredienteRepository: Repository<Ingrediente>
    ){}

   
    

    
  async  findAll(){
        return this.drinkRepository.find()
    }


    async  findByName(nome:string){
        const drink =  await this.drinkRepository.find({
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

    private async preloadTagByName(nome: string): Promise<Tag> {
      const tag = await this.tagRepository.findOne({ where: { nome } })
      if (tag) {
        return tag
      }
      return this.tagRepository.create({ nome })
    }




}
