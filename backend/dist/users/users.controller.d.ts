import { UsersService } from './users.service';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getProfile(req: any): Promise<import("./user.entity").User | null>;
    updateProfile(req: any, body: any): Promise<import("./user.entity").User>;
    deleteAccount(req: any): Promise<{
        message: string;
    }>;
}
