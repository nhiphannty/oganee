import Home from "../../../pages/Home/Index";
import Shop from "../../../pages/Shop/Index";
import Error from "../../../pages/Error/Error";
import NotFound from "../../../pages/Error/NotFound";
import { HomePath, ShopPath } from "./RoutePath";

interface IRouteLayout {
    path: string;
    element: any;
    errorElement?: any | null;
}

export const routeList: IRouteLayout[] = [
    { path: "*", element: NotFound },
    { path: HomePath, element: Home, errorElement: Error },
    { path: ShopPath, element: Shop, errorElement: Error },
];
