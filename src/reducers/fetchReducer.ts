import {
    GET_PRODUCTS_LOADING,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAIL,
    ASC,
    DSC,
    Product,
    ProductsDispatchTypes,
    SortProductsDispatchTypes
} from '../actions/types';


interface InitialState {
    loading: boolean,
    message?:string,
    products?: Product[]
}

const initialState: InitialState = {
    loading: false,
    products: [],
    message:""

}

export const  fetchReducer =  (state = initialState, action: ProductsDispatchTypes): InitialState =>{

    switch (action.type) {
        case GET_PRODUCTS_LOADING:
        return {
            loading: true
        }
        case GET_PRODUCTS_SUCCESS:
        return {
            ...state,
            loading: false,
            products: action.payload,
        }

        case GET_PRODUCTS_FAIL:
            return {
            ...state,
            loading: false,
            message: "Something went wrong"
            }
        default:
            return state;
    }
}


export const  sortReducer =  (state = initialState, action: SortProductsDispatchTypes): InitialState =>{

    switch (action.type) {
        case ASC:
        console.log(action.payload, "ASC REDUCER")
        return {
            ...state,
            loading: false,
            products: action.payload,
        }
        case DSC:
        console.log(action.payload, "DSC REDUCER")
        return {
            ...state,
            loading: false,
            products: action.payload,
        }
        default:
            return state;
    }
}