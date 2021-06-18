import {Dispatch} from 'redux';

import {
    GET_PRODUCTS_LOADING,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAIL,
    ProductsDispatchTypes
} from './types';



export const getProducts = () => async (dispatch:Dispatch<ProductsDispatchTypes>) => {
try {
    dispatch({
        type:  GET_PRODUCTS_LOADING
    })

   const url = "https://marketplace-api-sklep.herokuapp.com/items";
   const  response = await fetch(url);
   const data = await response.json();

   dispatch({
       type: GET_PRODUCTS_SUCCESS,
       payload: data
   })
} catch (error) {
    dispatch({
        type: GET_PRODUCTS_FAIL,
        message: error.message + "Problem to load products"
    })
}
}