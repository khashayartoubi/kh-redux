
import {
    productGetById, 
    productAdd, 
    productRemove, 
    productEdit
} from '../actions/actiontypes'

const initialState = {
    items: [
        {id:1 , ProductName: 'Product A', price: '100'},
        {id:2 , ProductName: 'Product B', price: '200'},
        {id:3 , ProductName: 'Product C', price: '300'},
    ],
    isLoading: true
}

function ProductReducers(state = initialState, actions) {
    switch (actions.type) {
        case 'PRODUCT_GET_ALL':
            return {...state, items: state.items}
        case productGetById:
            return {...state, items: state.items.find(q => q.id === actions.payload)}
        case productAdd:
            return {...state, items: state.items.concat(actions.payload)}
        case productRemove:
            return {...state, items: state.items.filter(q => q.id !== actions.payload)}
        case productEdit:
            return state;
        default:
            return state;
    }
}

export default ProductReducers;