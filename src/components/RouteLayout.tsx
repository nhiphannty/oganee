import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import { routeList } from "../common/constants/routes/RouteList";

export default function RouteLayout() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    {routeList.map((route, i) => (
                        <Route key={i} path={route.path} element={<route.element />} errorElement={<route.errorElement />} />
                    ))}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
