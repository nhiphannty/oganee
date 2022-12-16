import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import paymentItem from "../../assets/img/payment-item.png";
import { HomePath } from "../../common/constants/routePath";

export default function Footer() {
    return (
        <footer className="footer spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="footer__about">
                            <div className="footer__about__logo">
                                <Link to={HomePath.path}>
                                    <img src={logo} alt="" />
                                </Link>
                            </div>
                            <ul>
                                <li>Address: 1317 Harry Place 28204 NC</li>
                                <li>Phone: 704-768-7449</li>
                                <li>Email: info@ogani.com</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 offset-lg-1 col-md-6 col-sm-6">
                        <div className="footer__widget">
                            <h6>Useful Links</h6>
                            <ul>
                                <li>
                                    <NavLink to={HomePath.path}>About Us</NavLink>
                                </li>
                                <li>
                                    <NavLink to={HomePath.path}>About Our Shop</NavLink>
                                </li>
                                <li>
                                    <NavLink to={HomePath.path}>Secure Shopping</NavLink>
                                </li>
                                <li>
                                    <NavLink to={HomePath.path}>Delivery infomation</NavLink>
                                </li>
                                <li>
                                    <NavLink to={HomePath.path}>Privacy Policy</NavLink>
                                </li>
                                <li>
                                    <NavLink to={HomePath.path}>Our Sitemap</NavLink>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <NavLink to={HomePath.path}>Who Are We</NavLink>
                                </li>
                                <li>
                                    <NavLink to={HomePath.path}>Our Services</NavLink>
                                </li>
                                <li>
                                    <NavLink to={HomePath.path}>Projects</NavLink>
                                </li>
                                <li>
                                    <NavLink to={HomePath.path}>Contact</NavLink>
                                </li>
                                <li>
                                    <NavLink to={HomePath.path}>Innovation</NavLink>
                                </li>
                                <li>
                                    <NavLink to={HomePath.path}>Testimonials</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-12">
                        <div className="footer__widget">
                            <h6>Join Our Newsletter Now</h6>
                            <p>Get E-mail updates about our latest shop and special offers.</p>
                            <form action="#">
                                <input type="text" placeholder="Enter your mail" />
                                <button type="submit" className="site-btn">
                                    Subscribe
                                </button>
                            </form>
                            <div className="footer__widget__social">
                                <Link to={HomePath.path} target="_blank">
                                    <i className="fa fa-facebook"></i>
                                </Link>
                                <Link to={HomePath.path} target="_blank">
                                    <i className="fa fa-instagram"></i>
                                </Link>
                                <Link to={HomePath.path} target="_blank">
                                    <i className="fa fa-twitter"></i>
                                </Link>
                                <Link to={HomePath.path} target="_blank">
                                    <i className="fa fa-pinterest"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="footer__copyright">
                            <div className="footer__copyright__text">
                                <p>
                                    Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | <b>TK</b>
                                </p>
                            </div>
                            <div className="footer__copyright__payment">
                                <img src={paymentItem} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
