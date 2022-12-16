import CategorySagas from "./category/saga";
import ProductSagas from "./product/saga";

const rootSaga = [CategorySagas, ProductSagas];

export default rootSaga;
