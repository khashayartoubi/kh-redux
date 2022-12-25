
import {
   FETCH_PRODUCTS_START,
   FETCH_PRODUCTS_SUCC,
   FETCH_PRODUCTS_FAILED
} from '../actions/actiontypes'

const initialState = {
    items: [],
    isLoading: true,
    message: '',
}

function ProductReducersThunk(state = initialState, actions) {
    switch (actions.type) {
        case FETCH_PRODUCTS_START:
            return {
                items: [],
                isLoading: true,
                message: '',
            }
        case FETCH_PRODUCTS_SUCC:
            return {
                items: actions.payload,
                isLoading: false,
                message: '',
            }
        case FETCH_PRODUCTS_FAILED:
            return {
                items: [],
                isLoading: false,
                message: actions.payload,
            }
        default:
            return state;
    }
}

export default ProductReducersThunk;