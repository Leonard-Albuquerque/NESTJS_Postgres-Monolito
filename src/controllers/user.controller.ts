import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserService } from '../services/user.service';


@Controller('users')
export class UserController {
    constructor (private readonly userService: UserService) {}

    @Post()
    createUser(@Body() body: { name: string; email: string; password: string}) {
        return this.userService.createUser(body.name, body.email, body.password);
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