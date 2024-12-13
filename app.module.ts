import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';


@module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: '1920',
            database: 'Nestry',
            entities: [],
            synchronize: true,
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})

export class AppModule {}
