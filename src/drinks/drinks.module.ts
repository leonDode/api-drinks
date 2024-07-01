import { Module } from '@nestjs/common';
import { DrinksController } from './drinks.controller';
import { DrinksService } from './drinks.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Drink } from './entities/drinks.entity';

@Module({
   imports:[TypeOrmModule.forFeature([Drink])],
   controllers: [DrinksController],
   providers:[DrinksService]
})

export class DrinksModule {}
