import { TripsService } from './trips.service';
export declare class TripsController {
    private svc;
    constructor(svc: TripsService);
    create(req: any, body: any): Promise<import("./entities/trip.entity").Trip>;
    list(req: any): Promise<import("./entities/trip.entity").Trip[]>;
    get(id: string, req: any): Promise<import("./entities/trip.entity").Trip>;
    update(id: string, req: any, body: any): Promise<import("./entities/trip.entity").Trip>;
    remove(id: string, req: any): Promise<{
        message: string;
    }>;
    share(id: string, req: any, body: {
        isPublic: boolean;
    }): Promise<import("./entities/trip.entity").Trip>;
    addStop(tripId: string, req: any, body: any): Promise<import("./entities/trip-stop.entity").TripStop>;
    updateStop(tripId: string, stopId: string, req: any, body: any): Promise<import("./entities/trip-stop.entity").TripStop>;
    deleteStop(tripId: string, stopId: string, req: any): Promise<{
        message: string;
    }>;
    reorderStops(tripId: string, req: any, body: {
        stopIds: string[];
    }): Promise<{
        message: string;
    }>;
    getBudget(tripId: string, req: any): Promise<import("./entities/budget-item.entity").BudgetItem[]>;
    addBudgetItem(tripId: string, req: any, body: any): Promise<import("./entities/budget-item.entity").BudgetItem>;
    deleteBudgetItem(tripId: string, itemId: string, req: any): Promise<{
        message: string;
    }>;
    getPacking(tripId: string, req: any): Promise<import("./entities/packing-item.entity").PackingItem[]>;
    addPacking(tripId: string, req: any, body: any): Promise<import("./entities/packing-item.entity").PackingItem>;
    updatePacking(tripId: string, itemId: string, req: any, body: any): Promise<import("./entities/packing-item.entity").PackingItem | null>;
    deletePacking(tripId: string, itemId: string, req: any): Promise<{
        message: string;
    }>;
    getNotes(tripId: string, req: any): Promise<import("./entities/trip-note.entity").TripNote[]>;
    addNote(tripId: string, req: any, body: any): Promise<import("./entities/trip-note.entity").TripNote>;
    updateNote(tripId: string, noteId: string, req: any, body: any): Promise<import("./entities/trip-note.entity").TripNote | null>;
    deleteNote(tripId: string, noteId: string, req: any): Promise<{
        message: string;
    }>;
}
