import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePath, ShopPath } from "../common/constants/routePath";
import Layout from "../components/Layout";
import Loader from "../components/Loader";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Index";
import Shop from "../pages/Shop/Index";

export default function RouteLayout() {
    const router = createBrowserRouter([
        {
            element: <Layout />,
            children: [
                {
                    path: HomePath,
                    element: <Home />,
                    loader: Loader,
                    errorElement: <Error />,
                },
                {
                    path: ShopPath,
                    element: <Shop />,
                    loader: Loader,
                    errorElement: <Error />,
                    // children: [
                    //     {
                    //         path: "/:id",
                    //         element: <Shop />,
                    //     },
                    // ],
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}
