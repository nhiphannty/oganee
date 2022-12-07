import { NavLink } from "react-router-dom";
import language from "../../assets/img/language.png";
import logo from "../../assets/img/logo.png";
import { BlogPath, ContactPath, HomePath, ShopPath } from "../../common/constants/routes/RoutePath";

function Header() {
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
                                            <i className="fa fa-heart"></i> <span>1</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={HomePath}>
                                            <i className="fa fa-shopping-bag"></i> <span>3</span>
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
                                <div className="hero__categories__all">
                                    <i className="fa fa-bars"></i>
                                    <span>All Departments</span>
                                </div>
                                <ul>
                                    <li>
                                        <NavLink to={HomePath}>Fresh Meat</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={HomePath}>Vegetables</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={HomePath}>Fruit & Nut Gifts</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={HomePath}>Fresh Berries</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={HomePath}>Ocean Foods</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={HomePath}>Butter & Eggs</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={HomePath}>Fastfood</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={HomePath}>Fresh Onion</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={HomePath}>Papayaya & Crisps</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={HomePath}>Oatmeal</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={HomePath}>Fresh Bananas</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="hero__search">
                                <div className="hero__search__form">
                                    <form action="#">
                                        <div className="hero__search__categories">
                                            All Categories
                                            <span className="arrow_carrot-down"></span>
                                        </div>
                                        <input type="text" placeholder="What are you looking for?" />
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
