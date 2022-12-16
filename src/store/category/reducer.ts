import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CATEGORY_SLICE } from "../../common/constants/sliceNames";
import { Status, StatusType } from "../../common/constants/status";
import { ICategory, ICategoryState } from "../../common/interfaces/ICategory";

const initialState: ICategoryState = {
    loading: false,
    categories: [],
    status: 0,
};

const CategorySlice = createSlice({
    name: CATEGORY_SLICE,
    initialState,
    reducers: {
        getCategories: (state: ICategoryState): ICategoryState => {
            return { ...state, loading: false };
        },
        setCategories: (
            state: ICategoryState,
            action: PayloadAction<ICategory[]>
        ): ICategoryState => {
            return {
                ...state,
                categories: action.payload,
                status: Status.Success,
                loading: false,
            };
        },
        setStatus: (state: ICategoryState, action: PayloadAction<StatusType>): ICategoryState => {
            return {
                ...state,
                status: action.payload.status,
                loading: false,
            };
        },
        cleanUp: (state: ICategoryState) => ({
            ...state,
            loading: false,
            status: undefined,
            error: undefined,
        }),
    },
});

export const { getCategories, setCategories, setStatus, cleanUp } = CategorySlice.actions;

export default CategorySlice.reducer;
