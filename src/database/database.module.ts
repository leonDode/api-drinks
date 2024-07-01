import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Drink } from 'src/drinks/entities/drinks.entity';
import { Ingrediente } from 'src/drinks/entities/ingredientes.entity';
import { Tag } from 'src/drinks/entities/tags.entity';
import { DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'dode2511',
        database: 'drinkHub',
        entities: [Drink,Tag,Ingrediente],
        synchronize: true
}

@Module({
    imports: [TypeOrmModule.forRootAsync({
        useFactory: () => {
            return {
                ...dataSourceOptions

            }
        } 
    })]
})
export class DatabaseModule {}
