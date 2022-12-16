import breadcrumb from "../assets/img/breadcrumb.jpg";
import { Link, useLocation } from "react-router-dom";
import { HomePath } from "../common/constants/routePath";
import { getPageName } from "../common/utils/getPageName";

export default function Breadcrumb() {
    const pathName = useLocation().pathname;

    return (
        <section
            className="breadcrumb-section set-bg"
            style={{ backgroundImage: `url(${breadcrumb})` }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="breadcrumb__text">
                            <h2>Ogani Shop</h2>
                            <div className="breadcrumb__option">
                                <Link to={HomePath.path}>Home</Link>
                                <span>{getPageName(pathName)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
