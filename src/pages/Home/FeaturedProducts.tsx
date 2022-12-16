import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { getFeaturedProducts } from "../../store/product/reducer";
import { Link } from "react-router-dom";
import { getProductImage } from "../../common/utils/getImage";

export default function FeaturedProducts() {
    const dispatch = useAppDispatch();
    const { featuredProducts } = useAppSelector((state) => state.productReducer);

    useEffect(() => {
        dispatch(getFeaturedProducts());
    }, [dispatch]);

    return (
        <section className="featured spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h2>Featured Products</h2>
                        </div>
                    </div>
                </div>
                <div className="row featured__filter">
                    {featuredProducts.map((prod, index) => (
                        <div
                            key={index}
                            className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
                            <div className="featured__item">
                                <div
                                    className="featured__item__pic set-bg"
                                    style={{
                                        backgroundImage: `url(${getProductImage(prod.image)})`,
                                    }}>
                                    <ul className="featured__item__pic__hover">
                                        <li>
                                            <div>
                                                <i className="fa fa-heart"></i>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <i className="fa fa-shopping-cart"></i>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="featured__item__text">
                                    <h6>
                                        <Link to="#">{prod.name}</Link>
                                    </h6>
                                    <h5>${prod.price}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
