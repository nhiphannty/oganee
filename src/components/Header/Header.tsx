import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import language from "../../assets/img/language.png";
import logo from "../../assets/img/logo.png";
import { LOVING_CART, SHOPPING_CART } from "../../common/constants/localStorageKeys";
import { BlogPath, ContactPath, HomePath, ShopPath } from "../../common/constants/routePath";
import { IProduct } from "../../common/interfaces/IProduct";
import { IShoppingCart } from "../../common/interfaces/IShoppingCart";
import { getLocalStorage } from "../../common/localStorage/hook";
import { useAppDispatch, useAppSelector } from "../../store";
import { getCategories } from "../../store/category/reducer";

function Header() {
    const [showAllCategories, setShowAllCategories] = useState(false);
    const dispatch = useAppDispatch();
    const { categories } = useAppSelector((state) => state.categoryReducer);

    const shoppingCart = getLocalStorage<IShoppingCart[]>(SHOPPING_CART, []);
    const lovingCart = getLocalStorage<IProduct[]>(LOVING_CART, []);

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    return (
        <div>
            <header className="header">
                <div className="header__top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="header__top__left">
                                    <ul>
                                        <li>
                                            <i className="fa fa-envelope"></i> info@ogani.com
                                        </li>
                                        <li>Free shipping for all orders over $50</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="header__top__right">
                                    <div className="header__top__right__social">
                                        <NavLink to={HomePath}>
                                            <i className="fa fa-facebook"></i>
                                        </NavLink>
                                        <NavLink to={HomePath}>
                                            <i className="fa fa-twitter"></i>
                                        </NavLink>
                                        <NavLink to={HomePath}>
                                            <i className="fa fa-linkedin"></i>
                                        </NavLink>
                                        <NavLink to={HomePath}>
                                            <i className="fa fa-pinterest-p"></i>
                                        </NavLink>
                                    </div>
                                    <div className="header__top__right__language">
                                        <img src={language} alt="" />
                                        <div>English</div>
                                        <span className="arrow_carrot-down"></span>
                                        <ul>
                                            <li>
                                                <NavLink to={HomePath}>Spanish</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to={HomePath}>English</NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="header__top__right__auth">
                                        <NavLink to={HomePath}>
                                            <i className="fa fa-user"></i> Login
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="header__logo">
                                <NavLink to={HomePath}>
                                    <img src={logo} alt="" />
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <nav className="header__menu">
                                <ul>
                                    <li className="active">
                                        <NavLink to={HomePath}>Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={ShopPath}>Shop</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={BlogPath}>Blog</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={ContactPath}>Contact</NavLink>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-3">
                            <div className="header__cart">
                                <ul>
                                    <li>
                                        <NavLink to={HomePath}>
                                            <i className="fa fa-heart"></i>{" "}
                                            <span>{lovingCart.length ?? 0}</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={HomePath}>
                                            <i className="fa fa-shopping-bag"></i>{" "}
                                            <span>{shoppingCart.length ?? 0}</span>
                                        </NavLink>
                                    </li>
                                </ul>
                                <div className="header__cart__price">
                                    <span>$10.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hamburger__open">
                        <i className="fa fa-bars"></i>
                    </div>
                </div>
            </header>
            <section className="hero">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="hero__categories">
                                <div
                                    className="hero__categories__all"
                                    onClick={() => setShowAllCategories(!showAllCategories)}>
                                    <i className="fa fa-bars"></i>
                                    <span>All Departments</span>
                                </div>
                                <ul
                                    className={`${
                                        showAllCategories
                                            ? "hero__categories__all__open"
                                            : "hero__categories__all__close"
                                    }`}>
                                    {categories.map((cate, index) => (
                                        <li key={index}>
                                            <NavLink to={HomePath}>{cate.name}</NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="hero__search">
                                <div className="hero__search__form">
                                    <form action="#">
                                        {/* <div className="hero__search__categories">
                                            All Categories
                                            <span className="arrow_carrot-down"></span>
                                        </div> */}
                                        <input
                                            type="text"
                                            placeholder="What are you looking for?"
                                        />
                                        <button type="submit" className="site-btn">
                                            SEARCH
                                        </button>
                                    </form>
                                </div>
                                <div className="hero__search__phone">
                                    <div className="hero__search__phone__icon">
                                        <i className="fa fa-phone"></i>
                                    </div>
                                    <div className="hero__search__phone__text">
                                        <h5>704-768-7449</h5>
                                        <span>24/7 Support</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Header;
