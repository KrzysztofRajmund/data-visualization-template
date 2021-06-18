export const GET_PRODUCTS_LOADING = 'GET_PRODUCTS_LOADING';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAIL = 'GET_PRODUCTS_FAIL';


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


export interface GetProductsLoading {
    type: typeof GET_PRODUCTS_LOADING
} 

export interface GetProductsSuccess {
    type: typeof GET_PRODUCTS_SUCCESS,
    payload: Product[]
}

export interface GetProductsFail {
    type: typeof GET_PRODUCTS_FAIL,
    message: string
}


export type ProductsDispatchTypes = GetProductsLoading | GetProductsSuccess | GetProductsFail
