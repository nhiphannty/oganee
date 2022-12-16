import { AxiosResponse } from "axios";
import EndPoints from "../../common/constants/endpoints";
import { IProduct } from "../../common/interfaces/IProduct";
import RequestService from "../../common/request";

export function getProductsRequest(): Promise<AxiosResponse<IProduct[]>> {
    return RequestService.axios.get(EndPoints.Products);
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
