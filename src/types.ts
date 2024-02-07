export type Tag = "new" | "exclusive";

export interface Set {
    name: string;
    price: number;
    rating: number;
    image: string;
    tag?: Tag;
}