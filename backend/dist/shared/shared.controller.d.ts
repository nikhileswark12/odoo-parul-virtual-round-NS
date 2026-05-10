import { TripsService } from '../trips/trips.service';
export declare class SharedController {
    private tripsService;
    constructor(tripsService: TripsService);
    getSharedTrip(token: string): Promise<import("../trips/entities/trip.entity").Trip>;
}
