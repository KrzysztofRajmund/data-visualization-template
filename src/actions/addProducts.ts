import { Dispatch } from 'redux';

import {
    Product,
    FAV_ADD_PRODUCT,
    FAV_DELETE_PRODUCT,
    FavDispatchTypes,

} from './types';

var favProducts: Product[] = [];

export const favAddProducts = (item: Product) => async (dispatch: Dispatch<FavDispatchTypes>) => {
    favProducts.push(item);
    localStorage.setItem('favProducts',JSON.stringify(favProducts));
    dispatch({
        type: FAV_ADD_PRODUCT,
        payload: favProducts
    })
}

export const favDeleteProducts = (item: Product) => async (dispatch: Dispatch<FavDispatchTypes>) => {
    favProducts = favProducts.filter((x)=> x.id !== item.id );
    localStorage.setItem('favProducts',JSON.stringify(favProducts));
    dispatch({
        type: FAV_DELETE_PRODUCT,
        payload: favProducts
    })
}