import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PRODUCT_SLICE } from "../../common/constants/sliceNames";
import { Status, StatusType } from "../../common/constants/status";
import { IProduct, IProductState, IPagedProducts } from "../../common/interfaces/IProduct";
import { IQueryProduct } from "../../common/interfaces/IQuery";

const initialState: IProductState = {
    loading: false,
    products: { items: [], totalItems: 0, totalPages: 0 },
    featuredProducts: [],
    latestProducts: [],
    topRatedProducts: [],
    status: 0,
};

const ProductSlice = createSlice({
    name: PRODUCT_SLICE,
    initialState,
    reducers: {
        getProducts: (
            state: IProductState,
            action: PayloadAction<IQueryProduct>
        ): IProductState => {
            return { ...state, loading: false };
        },
        setProducts: (
            state: IProductState,
            action: PayloadAction<IPagedProducts>
        ): IProductState => {
            return {
                ...state,
                products: action.payload,
                status: Status.Success,
                loading: false,
            };
        },
        getFeaturedProducts: (state: IProductState): IProductState => {
            return { ...state, loading: false };
        },
        setFeaturedProducts: (
            state: IProductState,
            action: PayloadAction<IProduct[]>
        ): IProductState => {
            return {
                ...state,
                featuredProducts: action.payload,
                status: Status.Success,
                loading: false,
            };
        },
        getLatestProducts: (state: IProductState): IProductState => {
            return { ...state, loading: false };
        },
        setLatestProducts: (
            state: IProductState,
            action: PayloadAction<IProduct[]>
        ): IProductState => {
            return {
                ...state,
                latestProducts: action.payload,
                status: Status.Success,
                loading: false,
            };
        },
        getTopRatedProducts: (state: IProductState): IProductState => {
            return { ...state, loading: false };
        },
        setTopRatedProducts: (
            state: IProductState,
            action: PayloadAction<IProduct[]>
        ): IProductState => {
            return {
                ...state,
                topRatedProducts: action.payload,
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

export const {
    getProducts,
    setProducts,
    getFeaturedProducts,
    setFeaturedProducts,
    getLatestProducts,
    setLatestProducts,
    getTopRatedProducts,
    setTopRatedProducts,
    setStatus,
    cleanUp,
} = ProductSlice.actions;

export default ProductSlice.reducer;
