import { TripsService } from '../trips/trips.service';
import { UsersService } from '../users/users.service';
export declare class AdminController {
    private tripsService;
    private usersService;
    constructor(tripsService: TripsService, usersService: UsersService);
    getStats(req: any): Promise<{
        totalUsers: number;
        users: import("../users/user.entity").User[];
        totalTrips: number;
        sharedTrips: number;
        topCities: any[];
    }>;
}
