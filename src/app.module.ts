import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DrinksController } from './drinks/drinks.controller';
import { DrinksService } from './drinks/drinks.service';

@Module({
  imports: [],
  controllers: [AppController, DrinksController],
  providers: [AppService, DrinksService],
})
export class AppModule {}
