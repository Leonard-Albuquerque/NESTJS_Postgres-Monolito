import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity'; 

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>, // Repositório injetado corretamente
  ) {}

  async createUser(name: string, email: string, password: string): Promise<User> {
    const user = this.userRepository.create({ name, email, password });
    return this.userRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { id },
    });
  
    if (!user) {
      throw new Error('User not found');
    }
  
    return user;
  }
}
