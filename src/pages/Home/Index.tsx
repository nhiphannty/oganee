import Categories from "./Categories";
import FeaturedProducts from "./FeaturedProducts";
import Hero from "./Hero";
import banner1 from "../../assets/img/banner/banner-1.jpg";
import banner2 from "../../assets/img/banner/banner-2.jpg";
import ProductOverview from "./ProductOverview";

export default function Home() {
    return (
        <div>
            <Hero />
            <Categories />
            <FeaturedProducts />
            <div className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="banner__pic">
                                <img src={banner1} alt="summer-fruit" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="banner__pic">
                                <img src={banner2} alt="dried-and-drink=fruits" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ProductOverview />
        </div>
    );
}
