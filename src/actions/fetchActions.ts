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
       dispatch({
        type:  GET_PRODUCTS_LOADING
    })
    setTimeout(()=>{
      dispatch({
       type: ASC,
       payload: sortedDataAscending
   })
   },1000)

   }

   if (x === "dsc"){
          const sortedDataDescending = data.sort((a:any,b:any)=> b.price - a.price);
    dispatch({
        type:  GET_PRODUCTS_LOADING
    })
        setTimeout(()=>{
   dispatch({
        type: DSC,
        payload: sortedDataDescending
    })
       },1000)
   } else {
       return;
   }
  }