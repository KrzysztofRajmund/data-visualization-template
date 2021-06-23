import { combineReducers } from 'redux';
import {fetchReducer, sortReducer} from './fetchReducer';
import {favReducer} from './addReducer';

const rootReducer = combineReducers({
    products: fetchReducer,
    sortedProducts: sortReducer,
    favProducts: favReducer
});

export default rootReducer;