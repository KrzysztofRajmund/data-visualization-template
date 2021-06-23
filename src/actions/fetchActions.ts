import {Dispatch} from 'redux';

import {
    GET_PRODUCTS_LOADING,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAIL,
    ASC,
    DSC,
    ProductsDispatchTypes,
    SortProductsDispatchTypes
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


export const sortProducts = (x: string) => async (dispatch:Dispatch<SortProductsDispatchTypes>) => {

   const url = "https://marketplace-api-sklep.herokuapp.com/items";
   const  response = await fetch(url);
   const data = await response.json();
   if (x === "asc"){
    const sortedDataAscending = data.sort((a:any,b:any)=> a.price - b.price);
    console.log("ASC ACTION")
   dispatch({
       type: ASC,
       payload: sortedDataAscending
   })
   }

   if (x === "dsc"){
           console.log("DSC ACTION")
          const sortedDataDescending = data.sort((a:any,b:any)=> b.price - a.price);
   dispatch({
        type: DSC,
        payload: sortedDataDescending
    })
   } else {
       return;
   }
  }