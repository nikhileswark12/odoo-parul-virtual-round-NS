import { User } from '../../users/user.entity';
import { TripStop } from './trip-stop.entity';
import { BudgetItem } from './budget-item.entity';
import { PackingItem } from './packing-item.entity';
import { TripNote } from './trip-note.entity';
export declare class Trip {
    id: string;
    name: string;
    description?: string;
    startDate: string;
    endDate: string;
    coverPhoto?: string;
    isPublic: boolean;
    shareToken?: string;
    status: string;
    user: User;
    userId: string;
    stops: TripStop[];
    budgetItems: BudgetItem[];
    packingItems: PackingItem[];
    notes: TripNote[];
    createdAt: Date;
    updatedAt: Date;
}
