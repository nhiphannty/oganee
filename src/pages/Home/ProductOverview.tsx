import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { getLatestProducts, getTopRatedProducts } from "../../store/product/reducer";
import { Link } from "react-router-dom";
import { getProductImage } from "../../common/utils/getImage";
import { IProduct } from "../../common/interfaces/IProduct";
import { REVIEW_PRODUCTS } from "../../common/constants/localStorageKeys";
import { getLocalStorage } from "../../common/localStorage/hook";
import { ShopPath } from "../../common/constants/routePath";

export default function ProductOverview() {
    const dispatch = useAppDispatch();
    const { latestProducts, topRatedProducts } = useAppSelector((state) => state.productReducer);
    const reviewProducts = getLocalStorage<IProduct[]>(REVIEW_PRODUCTS, []);

    useEffect(() => {
        dispatch(getLatestProducts());
        dispatch(getTopRatedProducts());
    }, [dispatch]);
    return (
        <section className="latest-product spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="latest-product__text">
                            <h4>Latest Products</h4>
                            <div className="latest-product__slider">
                                <div className="latest-product__slider__item">
                                    {latestProducts.map((prod, index) => (
                                        <Link to="#" className="latest-product__item" key={index}>
                                            <div className="latest-product__item__pic">
                                                <img src={getProductImage(prod.image)} alt="" />
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>{prod.name}</h6>
                                                <span>${prod.price}</span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="latest-product__text">
                            <h4>Top Rated Products</h4>
                            <div className="latest-product__slider">
                                <div className="latest-product__slider__item">
                                    {topRatedProducts.map((prod, index) => (
                                        <Link to="#" className="latest-product__item" key={index}>
                                            <div className="latest-product__item__pic">
                                                <img src={getProductImage(prod.image)} alt="" />
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>{prod.name}</h6>
                                                <span>${prod.price}</span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="latest-product__text">
                            <h4>Review Products</h4>
                            {reviewProducts.length > 0 ? (
                                <div className="latest-product__slider">
                                    <div className="latest-product__slider__item">
                                        <Link to="#" className="latest-product__item">
                                            <div className="latest-product__item__pic">
                                                <img src="img/latest-product/lp-1.jpg" alt="" />
                                            </div>
                                            <div className="latest-product__item__text">
                                                <h6>1</h6>
                                                <span>$30.00</span>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <p>You have not viewed any products yet</p>
                                    <Link to={ShopPath} className="primary-btn">
                                        SHOP NOW
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
