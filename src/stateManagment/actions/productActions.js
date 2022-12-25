
import {productGetAll, productGetById, productAdd, productRemove, productEdit} from './../actions/actiontypes'


export const getAll = () => ({
    type: 'PRODUCT_GET_ALL'
})

export const getById = id => ({
    type: productGetById,
    payload: id
})

export const add = item => ({
    type: productAdd,
    payload: item
})

export const remove = id => ({
    type: productRemove,
    payload: id
})

export const edit = item => ({
    type: productEdit,
    payload: item
})

