import { Trip } from './trip.entity';
export declare class TripStop {
    id: string;
    cityName: string;
    cityId?: string;
    region?: string;
    state?: string;
    arrivalDate: string;
    departureDate: string;
    orderIndex: number;
    activities?: {
        id: string;
        name: string;
        cost: number;
        duration: number;
        category: string;
    }[];
    trip: Trip;
    tripId: string;
    createdAt: Date;
}
