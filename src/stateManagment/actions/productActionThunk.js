

import axios from 'axios';
import {FETCH_PRODUCTS_START, FETCH_PRODUCTS_SUCC, FETCH_PRODUCTS_FAILED} from './actiontypes';

export function getAllProducts(dispatch) {
    dispatch(fetchproductsStart());

    setTimeout(async () => {
        try {
            const apiUrl = await axios.get('https://apitester.ir/api/Products');
            console.log('apiUrl',apiUrl);
            dispatch(fetchproductsSucc(apiUrl))
        } catch (error) {
            dispatch(fetchproductsFailed(error))
    
        }    
    }, 2000);
}


export const fetchproductsStart = () => ({
    type: FETCH_PRODUCTS_START,
    payload: true
});
export const fetchproductsSucc = (apiUrl) => ({
    type: FETCH_PRODUCTS_SUCC,
    payload: apiUrl
});
export const fetchproductsFailed = (errorMessage) => ({
    type: FETCH_PRODUCTS_FAILED,
    payload: errorMessage
})