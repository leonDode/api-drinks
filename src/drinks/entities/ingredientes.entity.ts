import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm"
import { Drink } from "./drinks.entity"

@Entity('ingredientes')
export class Ingrediente {

    @PrimaryGeneratedColumn()
    id: Number

    @Column()
    nome: String


    @ManyToMany(()=> Drink,drink=>drink.tags)
    drinks: Drink[]
}

