import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm"
import { Drink } from "./drinks.entity"

@Entity('tags')
export class Tag {

    @PrimaryGeneratedColumn()
    id: Number

    @Column()
    nome: String

    @ManyToMany(()=> Drink,drink=>drink.tags)
    drinks: Drink[]
}
