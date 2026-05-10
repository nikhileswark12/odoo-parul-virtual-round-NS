export declare class ActivitiesController {
    getActivities(city?: string, category?: string, q?: string, maxCost?: string): {
        id: string;
        name: string;
        city: string;
        category: string;
        cost: number;
        duration: number;
        description: string;
    }[];
    getCategories(): {
        id: string;
        label: string;
        emoji: string;
    }[];
}
