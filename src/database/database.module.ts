import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Drink } from 'src/drinks/entities/drinks.entity';
import { DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'dode2511',
        database: 'drinkHub',
        entities: [Drink],
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
