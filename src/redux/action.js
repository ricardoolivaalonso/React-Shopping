import { 
    CREATE_PRODUCT,
    READ_PRODUCT,
    UPDATE_PRODUCT, 
    DELETE_PRODUCT,
    MOVE_LIST_PRODUCT,
    MOVE_CART_PRODUCT 
} from './types'

const CREATE_PRODUCT_ACTION = (product) => ({
    type: CREATE_PRODUCT,
    payload: product
})

const READ_PRODUCT_ACTION = () => ({
    type: READ_PRODUCT
})

const UPDATE_PRODUCT_ACTION = (product) => ({
    type: UPDATE_PRODUCT,
    payload: product
})

const DELETE_PRODUCT_ACTION = (id) => ({
    type: DELETE_PRODUCT,
    payload: id
})

const MOVE_LIST_PRODUCT_ACTION = (id) => ({
    type: MOVE_LIST_PRODUCT,
    payload: id
})
const MOVE_CART_PRODUCT_ACTION = (id) => ({
    type: MOVE_CART_PRODUCT,
    payload: id
})

export{
    CREATE_PRODUCT_ACTION,
    READ_PRODUCT_ACTION,
    UPDATE_PRODUCT_ACTION,
    DELETE_PRODUCT_ACTION,
    MOVE_LIST_PRODUCT_ACTION,
    MOVE_CART_PRODUCT_ACTION 
}