interface Challenge {
    id: string;
    title: string;
    short_description: string;
    long_description: string;
    rate: number;
    points: number;
    hint?: string;
    created_at: Date;
}