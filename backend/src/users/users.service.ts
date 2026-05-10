import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  findById(id: string) {
    return this.repo.findOne({ where: { id } });
  }

  async update(id: string, data: Partial<User>) {
    const user = await this.repo.findOne({ where: { id } });
    if (!user) throw new NotFoundException('User not found');
    Object.assign(user, data);
    return this.repo.save(user);
  }

  async delete(id: string) {
    await this.repo.delete(id);
    return { message: 'Account deleted' };
  }

  findAll() {
    return this.repo.find({ select: ['id', 'name', 'email', 'role', 'createdAt'] });
  }
}
