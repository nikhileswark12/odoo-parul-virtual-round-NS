import { Repository } from 'typeorm';
import { Trip } from './entities/trip.entity';
import { TripStop } from './entities/trip-stop.entity';
import { BudgetItem } from './entities/budget-item.entity';
import { PackingItem } from './entities/packing-item.entity';
import { TripNote } from './entities/trip-note.entity';
export declare class TripsService {
    private tripsRepo;
    private stopsRepo;
    private budgetRepo;
    private packingRepo;
    private notesRepo;
    constructor(tripsRepo: Repository<Trip>, stopsRepo: Repository<TripStop>, budgetRepo: Repository<BudgetItem>, packingRepo: Repository<PackingItem>, notesRepo: Repository<TripNote>);
    createTrip(userId: string, data: Partial<Trip>): Promise<Trip>;
    getTrips(userId: string): Promise<Trip[]>;
    getTrip(id: string, userId: string): Promise<Trip>;
    updateTrip(id: string, userId: string, data: Partial<Trip>): Promise<Trip>;
    deleteTrip(id: string, userId: string): Promise<{
        message: string;
    }>;
    shareTrip(id: string, userId: string, isPublic: boolean): Promise<Trip>;
    getSharedTrip(token: string): Promise<Trip>;
    addStop(tripId: string, userId: string, data: Partial<TripStop>): Promise<TripStop>;
    updateStop(tripId: string, stopId: string, userId: string, data: Partial<TripStop>): Promise<TripStop>;
    deleteStop(tripId: string, stopId: string, userId: string): Promise<{
        message: string;
    }>;
    reorderStops(tripId: string, userId: string, stopIds: string[]): Promise<{
        message: string;
    }>;
    getBudget(tripId: string, userId: string): Promise<BudgetItem[]>;
    addBudgetItem(tripId: string, userId: string, data: Partial<BudgetItem>): Promise<BudgetItem>;
    deleteBudgetItem(tripId: string, itemId: string, userId: string): Promise<{
        message: string;
    }>;
    getPacking(tripId: string, userId: string): Promise<PackingItem[]>;
    addPackingItem(tripId: string, userId: string, data: Partial<PackingItem>): Promise<PackingItem>;
    updatePackingItem(tripId: string, itemId: string, userId: string, data: Partial<PackingItem>): Promise<PackingItem | null>;
    deletePackingItem(tripId: string, itemId: string, userId: string): Promise<{
        message: string;
    }>;
    getNotes(tripId: string, userId: string): Promise<TripNote[]>;
    addNote(tripId: string, userId: string, data: Partial<TripNote>): Promise<TripNote>;
    updateNote(tripId: string, noteId: string, userId: string, data: Partial<TripNote>): Promise<TripNote | null>;
    deleteNote(tripId: string, noteId: string, userId: string): Promise<{
        message: string;
    }>;
    getStats(): Promise<{
        totalTrips: number;
        sharedTrips: number;
        topCities: any[];
    }>;
}
