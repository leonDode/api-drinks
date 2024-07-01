import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('drinks')
export class Drink {

    @PrimaryGeneratedColumn()
    id: Number

    @Column()
    nome: String

    @Column()
    descricao: string

    @Column('json',{nullable:true})
    tags: string[]

    @Column('json',{nullable:true})
    ingredientes: string[]

   @Column({default: false})
    salvo: boolean
}

