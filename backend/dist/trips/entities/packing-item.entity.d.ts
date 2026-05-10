import { Trip } from './trip.entity';
export declare class PackingItem {
    id: string;
    name: string;
    category: string;
    isPacked: boolean;
    trip: Trip;
    tripId: string;
    createdAt: Date;
}
