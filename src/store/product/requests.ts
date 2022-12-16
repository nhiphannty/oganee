import { AxiosResponse } from "axios";
import EndPoints from "../../common/constants/endpoints";
import { IProduct } from "../../common/interfaces/IProduct";
import RequestService from "../../common/request";

export function getProductsRequest(): Promise<AxiosResponse<IProduct[]>> {
    return RequestService.axios.get(EndPoints.Products);
}
