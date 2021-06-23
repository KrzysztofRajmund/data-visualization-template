import {
    Product,
    FAV_ADD_PRODUCT,
    FAV_DELETE_PRODUCT,
    FavDispatchTypes,
} from '../actions/types';


interface InitialState {
    favProducts: Product[]
}

const initialState: InitialState = {
    favProducts: [],
}


export const  favReducer =  (state = initialState, action: FavDispatchTypes): InitialState =>{

    switch (action.type) {
        case FAV_ADD_PRODUCT:
        return {
            ...state,
            favProducts: action.payload,
        }

             case FAV_DELETE_PRODUCT:
        return {
            ...state,
            favProducts: action.payload,
        }
        default:
            return state;
    }
}