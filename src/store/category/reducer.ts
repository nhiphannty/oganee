import { CATEGORY } from "../../common/constants/actionTypes";

import { CategoryState, CategoryActions } from "../../common/interfaces/ICategory";

const initialState: CategoryState = {
    pending: false,
    categories: [],
    error: null,
};

const categoryReducer = (state = initialState, action: CategoryActions) => {
    switch (action.type) {
        case CATEGORY.FETCH_REQUEST:
            return {
                ...state,
                pending: true,
            };
        case CATEGORY.FETCH_SUCCESS:
            console.log(1);
            return {
                ...state,
                pending: false,
                categories: action.payload.categories,
                error: null,
            };
        case CATEGORY.FETCH_FAILURE:
            return {
                ...state,
                pending: false,
                categories: [],
                error: action.payload.error,
            };
        default:
            return {
                ...state,
            };
    }
};

export default categoryReducer;
