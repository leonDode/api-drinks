// src/avaliacoes/avaliacao.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Drink } from './drinks.entity';
import { Usuario } from './usuario.entity';

@Entity()
export class Avaliacao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  estrelas: number;

  @ManyToOne(() => Drink, (drink) => drink.avaliacoes)
  drink: Drink;

  @ManyToOne(() => Usuario, (usuario) => usuario.avaliacoes)
  usuario: Usuario;
}
