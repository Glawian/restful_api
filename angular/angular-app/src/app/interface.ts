export interface Offer {
    id: number;
    title: string;
    description: string;
    price: number;
    created_at: Date;
    category: number;
}

export interface Category {
    id: number;
    name: string;
}
