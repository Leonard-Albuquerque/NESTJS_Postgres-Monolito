import { Injectable } from '@nestjs/common';
import { User } from "./user.entity";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';




@Injectable()
export class UserService{
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}

    async createUser( name: string, email: string, password: string): Promise<User> {
        const user = this.userRepository.create({name, email, password});
        return this.userRepository.save(user);
    }
    async findall(): Promise<User[]> {
        return this.userRepository.find();
    }
    async findOne(id: number): Promise<User> {
        return this.userRepository.findOne(id);
      }

}