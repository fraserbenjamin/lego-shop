export type Tag = "new" | "exclusive";

export interface Set {
    name: string;
    price: number;
    rating?: number;
    image: string;
    tag?: Tag;
}

export interface SetResponse {
    set_num: string;
    name: string;
    year: number;
    theme_id: number;
    num_parts: number;
    img_url: string;
}
