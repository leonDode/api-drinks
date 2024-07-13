import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm"
import { Tag } from "./tags.entity"
import { Ingrediente } from "./ingredientes.entity"

@Entity('drinks')
export class Drink {

    @PrimaryGeneratedColumn()
    id: Number

    @Column()
    nome: String

    @Column()
    descricao: string

    @Column()
    instrucoes: string


    @Column()
    img: String



    @JoinTable()
    @ManyToMany(()=> Tag,tag =>tag.drinks,{
        cascade:true
    })
    tags: Tag[]


    @JoinTable()
    @ManyToMany(()=> Ingrediente,ingrediente =>ingrediente.drinks,{
        cascade: true
    })
    ingredientes: Ingrediente[]




   @Column({default: false})
    salvo: boolean
}

