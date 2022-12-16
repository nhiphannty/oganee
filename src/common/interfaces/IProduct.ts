export interface IProduct {
    id: string;
    name: string;
    categoryId: string;
    image: string;
    price: number;
    color: string;
    size: string;
    discount: number;
}

export interface IProductState {
    loading: boolean;
    products: IProduct[];
    status?: number;
    featuredProducts: IProduct[];
    latestProducts: IProduct[];
    topRatedProducts: IProduct[];
}
