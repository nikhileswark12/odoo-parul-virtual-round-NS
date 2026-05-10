import { Trip } from './trip.entity';
export declare class BudgetItem {
    id: string;
    category: string;
    label: string;
    amount: number;
    stopId?: string;
    trip: Trip;
    tripId: string;
    createdAt: Date;
}
