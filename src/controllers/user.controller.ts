import { Controller, Get, Post, Body, Param, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from '../services/user.service';


@Controller('users')
export class UserController {
    constructor (private readonly userService: UserService) {}

    @Post()
    async createUser(@Body() body: { name: string; email: string; password: string }) {
        try {
          return await this.userService.createUser(body.name, body.email, body.password);
        } catch (error: unknown) {
            if (error instanceof Error && error.message === 'Este e-mail já está em uso') {
                throw new HttpException(
                  { statusCode: HttpStatus.BAD_REQUEST, message: error.message },
                  HttpStatus.BAD_REQUEST,
                );
          }
          
          throw new HttpException(
            { statusCode: HttpStatus.INTERNAL_SERVER_ERROR, message: 'Erro interno do servidor' },
            HttpStatus.INTERNAL_SERVER_ERROR,
          );
        }
      }

    @Get()
    getAllUsers() {
        return this.userService.findAll();
    }

    @Get(':id')
    getUserById(@Param('id') id: number) {
        return this.userService.findOne(id);
    }
    
}