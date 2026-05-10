import { Trip } from './trip.entity';
export declare class TripNote {
    id: string;
    content: string;
    stopId?: string;
    stopName?: string;
    trip: Trip;
    tripId: string;
    createdAt: Date;
    updatedAt: Date;
}
