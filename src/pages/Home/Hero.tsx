import banner from "../../assets/img/hero/banner.jpg";
import { Link } from "react-router-dom";
import { ShopPath } from "../../common/constants/routePath";

export default function Hero() {
    return (
        <section className="hero">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div
                            className="hero__item set-bg"
                            style={{ backgroundImage: `url(${banner})` }}>
                            <div className="hero__text">
                                <span>FRESH FRUIT</span>
                                <h2>
                                    Vegetable <br />
                                    100% Organic
                                </h2>
                                <p>Free Pickup and Delivery Available</p>
                                <Link to={ShopPath} className="primary-btn">
                                    SHOP NOW
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
