import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user.entity';


@module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: '1920',
            database: 'Nestry',
            entities: [User],
            synchronize: true,
        }),
        TypeOrmModule.forFeature([User]),
    ],
    controllers: [AppController],
    providers: [AppService],
})

export class AppModule {}
