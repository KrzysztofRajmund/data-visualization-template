//GET PRODUCTS
export const GET_PRODUCTS_LOADING = 'GET_PRODUCTS_LOADING';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAIL = 'GET_PRODUCTS_FAIL';
//SORT PRODUCTS
export const ASC = 'ASC';
export const DSC = 'DSC';
//ADD PRODUCTS
export const FAV_ADD_PRODUCT = 'FAV_ADD_PRODUCT';
export const FAV_DELETE_PRODUCT = 'FAV_DELETE_PRODUCT';

//product
export type Product = {
    id: number,
    title: string,
    price: number,
    brand: string,
    productType:string,
    collection: number,
    url: string,
    //optional
    description?: string,
    sale?:string,
    gif?: string,
    jumbotronUrl?: string,
    verticalCardUrl?: string,
    jumbotronVideoUrl?: string
}

//get
export interface GetProductsLoading {
    type: typeof GET_PRODUCTS_LOADING
} 

export interface GetProductsSuccess {
    type: typeof GET_PRODUCTS_SUCCESS
    payload: Product[]
}


export interface GetProductsFail {
    type: typeof GET_PRODUCTS_FAIL,
    message: string
}

export type ProductsDispatchTypes = GetProductsLoading | GetProductsSuccess | GetProductsFail;

//sort
export interface Ascending {
    type: typeof ASC,
    payload: Product[]
}

export interface Descending {
    type: typeof DSC,
    payload: Product[]
}

export type   SortProductsDispatchTypes = Ascending | Descending | GetProductsLoading;

//add product
export interface FavAddProduct {
    type: typeof FAV_ADD_PRODUCT,
    payload: Product[]
}

export interface FavDeleteProduct {
    type: typeof FAV_DELETE_PRODUCT,
    payload: Product[]
}


export type FavDispatchTypes = FavAddProduct | FavDeleteProduct;