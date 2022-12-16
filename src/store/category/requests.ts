import { AxiosResponse } from "axios";
import EndPoints from "../../common/constants/endpoints";
import { ICategory } from "../../common/interfaces/ICategory";
import RequestService from "../../common/request";

export function getCategoriesRequest(): Promise<AxiosResponse<ICategory[]>> {
    return RequestService.axios.get(EndPoints.Categories);
}
