import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UsersService {
    private repo;
    constructor(repo: Repository<User>);
    findById(id: string): Promise<User | null>;
    update(id: string, data: Partial<User>): Promise<User>;
    delete(id: string): Promise<{
        message: string;
    }>;
    findAll(): Promise<User[]>;
}
