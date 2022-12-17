import { AxiosResponse } from "axios";
import EndPoints from "../../common/constants/endpoints";
import { IPagedProducts, IProduct } from "../../common/interfaces/IProduct";
import RequestService from "../../common/request";
import { IQueryProduct } from "../../common/interfaces/IQuery";

export async function getProductsRequest(
    query: IQueryProduct
): Promise<AxiosResponse<IPagedProducts>> {
    let response = await RequestService.axios.get(EndPoints.Products);
    let data: IProduct[] = response.data;
    if (query.search) {
        let search = query.search;
        data = data.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (query.categoryIds) data = data.filter((p) => query.categoryIds?.includes(p.categoryId));
    if (query.colors) data = data.filter((p) => query.colors?.includes(p.color));
    if (query.sizes) data = data.filter((p) => query.sizes?.includes(p.size));
    if (query.orderBy)
        data = data.filter((p) =>
            query.orderBy === "name" ? p.name : query.orderBy === "discount" ? p.discount : p.price
        );
    let totalItems = data.length;
    data = data.slice((query.page - 1) * query.max, query.page * query.max);

    return {
        ...response,
        data: {
            items: data,
            totalItems: totalItems,
            totalPages: Number.parseInt((data.length / query.max).toFixed(0)),
        },
    };
}

export function getFeaturedProductsRequest(): Promise<AxiosResponse<IProduct[]>> {
    return RequestService.axios.get(EndPoints.FeaturedProducts);
}

export function getLatestProductsRequest(): Promise<AxiosResponse<IProduct[]>> {
    return RequestService.axios.get(EndPoints.LatestProducts);
}

export function getTopRatedProductsRequest(): Promise<AxiosResponse<IProduct[]>> {
    return RequestService.axios.get(EndPoints.TopRatedProducts);
}
