
import {combineReducers} from 'redux'
import ProductReducers from './productReducers'
import ProductReducersThunk from './productReducersThunk';

export default combineReducers ({
    productState: ProductReducers,
    productStateThunk:ProductReducersThunk
})