import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PRODUCT_SLICE } from "../../common/constants/sliceNames";
import { Status, StatusType } from "../../common/constants/status";
import { IProduct, IProductState } from "../../common/interfaces/IProduct";

const initialState: IProductState = {
    loading: false,
    products: [],
    status: 0,
};

const ProductSlice = createSlice({
    name: PRODUCT_SLICE,
    initialState,
    reducers: {
        getProducts: (state: IProductState): IProductState => {
            return { ...state, loading: false };
        },
        setProducts: (state: IProductState, action: PayloadAction<IProduct[]>): IProductState => {
            return {
                ...state,
                products: action.payload,
                status: Status.Success,
                loading: false,
            };
        },
        setStatus: (state: IProductState, action: PayloadAction<StatusType>): IProductState => {
            return {
                ...state,
                status: action.payload.status,
                loading: false,
            };
        },
        cleanUp: (state: IProductState) => ({
            ...state,
            loading: false,
            status: undefined,
            error: undefined,
        }),
    },
});

export const { getProducts, setProducts, setStatus, cleanUp } = ProductSlice.actions;

export default ProductSlice.reducer;
