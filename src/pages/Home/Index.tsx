import banner from "../../assets/img/hero/banner.jpg";
import { Link, NavLink } from "react-router-dom";
import { ShopPath } from "../../common/constants/routePath";
import { useAppDispatch, useAppSelector } from "../../store";
import { useEffect } from "react";
import { getCategories } from "../../store/category/reducer";
import { getCategoryImage } from "../../common/utils/getImage";
import { getProducts } from "../../store/product/reducer";

export default function Home() {
    const dispatch = useAppDispatch();
    const categories = useAppSelector((state) => state.categoryReducer?.categories);

    useEffect(() => {
        // dispatch(getCategories());
        dispatch(getProducts());
    });

    return (
        <div>
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
            <section className="categories">
                <div className="container">
                    <div className="row">
                        <div className="categories__slider owl-carousel">
                            {categories.map((cate, index) => (
                                <div className="col-lg-3" key={index}>
                                    <div
                                        className="categories__item set-bg"
                                        style={{
                                            backgroundImage: `url(/img/categories/cat-1.jpg)})`,
                                        }}>
                                        <h5>
                                            <NavLink to="#">{cate.name}</NavLink>
                                        </h5>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
