import { combineReducers } from 'redux';
import {fetchReducer} from './fetchReducer';

const rootReducer = combineReducers({
    products: fetchReducer
});

export default rootReducer;