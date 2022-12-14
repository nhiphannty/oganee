export interface IProduct {
    id: string;
    name: string;
    categoryId: string;
    image: string;
    price: number;
    createdDate: Date;
    heart: number;
    isFeatured: boolean;
    color: string;
    size: string;
    discount: number;
}
