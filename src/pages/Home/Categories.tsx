import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store";
import { useEffect } from "react";
import { getCategories } from "../../store/category/reducer";
import { getCategoryImage } from "../../common/utils/getImage";

export default function Categories() {
    const dispatch = useAppDispatch();
    const { categories } = useAppSelector((state) => state.categoryReducer);

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);
    return (
        <section className="categories">
            <div className="container">
                <div className="row">
                    <div className="categories__slider owl-carousel">
                        {categories.map((cate, index) => (
                            <div className="col-lg-3" key={index}>
                                <div
                                    className="categories__item set-bg"
                                    style={{
                                        backgroundImage: `url(${getCategoryImage(cate.image)})`,
                                    }}>
                                    <h5>
                                        <Link to="#">{cate.name}</Link>
                                    </h5>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
