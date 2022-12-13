import { combineReducers } from "redux";
import categoryReducer from "./category/reducer";

const rootReducer = combineReducers({
    category: categoryReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
