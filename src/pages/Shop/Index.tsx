import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store";
import { useEffect, useState } from "react";
import { getLatestProducts, getProducts } from "../../store/product/reducer";
import { getProductImage } from "../../common/utils/getImage";
import Breadcrumb from "../../components/Breadcrumb";
import { IQueryProduct } from "../../common/interfaces/IQuery";
import { Color } from "../../common/constants/productSpecs";

export default function Index() {
    const { categories } = useAppSelector((state) => state.categoryReducer);
    const { latestProducts, products } = useAppSelector((state) => state.productReducer);
    const dispatch = useAppDispatch();
    const initialQuery: IQueryProduct = {
        max: 12,
        page: 1,
    };
    const [query, setQuery] = useState(initialQuery);

    useEffect(() => {
        dispatch(getLatestProducts());
        dispatch(getProducts(query));
    }, [dispatch, query]);

    return (
        <div>
            <Breadcrumb />
            <section className="product spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-5">
                            <div className="sidebar">
                                <div className="sidebar__item">
                                    <h4>Category</h4>
                                    <ul>
                                        {categories.map((cate, index) => (
                                            <li key={index}>
                                                <Link to="#">{cate.name}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="sidebar__item sidebar__item__color--option">
                                    <h4>Colors</h4>
                                    <div className="sidebar__item__color sidebar__item__color--white">
                                        <label htmlFor="white">
                                            {Color.White}
                                            <input type="radio" id="white" />
                                        </label>
                                    </div>
                                    <div className="sidebar__item__color sidebar__item__color--yellow">
                                        <label htmlFor="yellow">
                                            {Color.Yellow}
                                            <input type="radio" id="yellow" />
                                        </label>
                                    </div>
                                    <div className="sidebar__item__color sidebar__item__color--red">
                                        <label htmlFor="red">
                                            {Color.Red}
                                            <input type="radio" id="red" />
                                        </label>
                                    </div>
                                    <div className="sidebar__item__color sidebar__item__color--orange">
                                        <label htmlFor="orange">
                                            {Color.Orange}
                                            <input type="radio" id="orange" />
                                        </label>
                                    </div>
                                    <div className="sidebar__item__color sidebar__item__color--blue">
                                        <label htmlFor="blue">
                                            {Color.Blue}
                                            <input type="radio" id="blue" />
                                        </label>
                                    </div>
                                    <div className="sidebar__item__color sidebar__item__color--green">
                                        <label htmlFor="green">
                                            {Color.Green}
                                            <input type="radio" id="green" />
                                        </label>
                                    </div>
                                </div>
                                <div className="sidebar__item">
                                    <h4>Popular Size</h4>
                                    <div className="sidebar__item__size">
                                        <label htmlFor="large">
                                            Large
                                            <input type="radio" id="large" />
                                        </label>
                                    </div>
                                    <div className="sidebar__item__size">
                                        <label htmlFor="medium">
                                            Medium
                                            <input type="radio" id="medium" />
                                        </label>
                                    </div>
                                    <div className="sidebar__item__size">
                                        <label htmlFor="small">
                                            Small
                                            <input type="radio" id="small" />
                                        </label>
                                    </div>
                                    <div className="sidebar__item__size">
                                        <label htmlFor="tiny">
                                            Tiny
                                            <input type="radio" id="tiny" />
                                        </label>
                                    </div>
                                </div>
                                <div className="sidebar__item">
                                    <div className="latest-product__text">
                                        <h4>Latest Products</h4>
                                        <div className="latest-product__slider">
                                            <div className="latest-prdouct__slider__item">
                                                {latestProducts.map((prod, index) => (
                                                    <Link
                                                        to="#"
                                                        className="latest-product__item"
                                                        key={index}>
                                                        <div className="latest-product__item__pic">
                                                            <img
                                                                src={getProductImage(prod.image)}
                                                                alt=""
                                                            />
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
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-7">
                            <div className="filter__item">
                                <div className="row">
                                    {/* <div className="col-lg-4 col-md-5">
                                    <div className="filter__sort">
                                        <span>Sort By</span>
                                        <select>
                                            <option value="0">Default</option>
                                            <option value="0">Default</option>
                                        </select>
                                    </div>
                                </div> */}
                                    <div className="col-lg-4 col-md-4">
                                        <div className="filter__found">
                                            <h6>
                                                <span>{products.totalItems}</span> Products found
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {products.items.map((prod, index) => (
                                    <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                                        <div className="product__item">
                                            <div
                                                className="product__item__pic set-bg"
                                                style={{
                                                    backgroundImage: `url(${getProductImage(
                                                        prod.image
                                                    )})`,
                                                }}>
                                                <ul className="product__item__pic__hover">
                                                    <li>
                                                        <a href="#">
                                                            <i className="fa fa-heart"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fa fa-shopping-cart"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="product__item__text">
                                                <h6>
                                                    <Link to="#">{prod.name}</Link>
                                                </h6>
                                                <h5>${prod.price}</h5>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="product__pagination">
                                <a href="#">1</a>
                                <a href="#">2</a>
                                <a href="#">3</a>
                                <a href="#">
                                    <i className="fa fa-long-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
