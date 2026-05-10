export declare class CitiesController {
    getCities(q?: string, type?: string, region?: string, state?: string): {
        id: string;
        name: string;
        state: string;
        region: string;
        type: string;
        costIndex: string;
        popularity: number;
        description: string;
        image: string;
    }[];
    getTypes(): {
        id: string;
        label: string;
        emoji: string;
    }[];
    getRegions(): string[];
}
