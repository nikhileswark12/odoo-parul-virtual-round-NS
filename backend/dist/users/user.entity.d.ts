import { Trip } from '../trips/entities/trip.entity';
export declare class User {
    id: string;
    email: string;
    name: string;
    avatar?: string;
    password: string;
    role: string;
    language?: string;
    savedDestinations?: string[];
    createdAt: Date;
    updatedAt: Date;
    trips: Trip[];
}
