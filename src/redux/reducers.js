import { v4 as uuidv4 } from 'uuid';
import { initialState } from './initialState'
import { combineReducers } from 'redux'
import { 
    CREATE_PRODUCT,
    READ_PRODUCT,
    UPDATE_PRODUCT, 
    DELETE_PRODUCT,
    MOVE_LIST_PRODUCT,
    MOVE_CART_PRODUCT
} from './types'

const productsReducer = ( state = initialState, action) => {
    switch (action.type) {
        case CREATE_PRODUCT:
            let newId = uuidv4()
            let quantity = parseInt(action.payload.quantity)
            let price = parseInt(action.payload.price)
            return {
                ...state,
                products: [
                    ...state.products,
                    {
                        id: newId,
                        name: action.payload.name,
                        quantity: quantity,
                        price: price,
                        ready: false
                    }
                ]
            }

            

        case DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter( p => p.id !== action.payload.id ),
                cart: state.cart.filter( c => c.id !== action.payload.id ),
            }

        case MOVE_LIST_PRODUCT:
            // let currentProduct = state.products.find( p => p.id === action.payload.id )
            return {
                ...state, 
                products: state.products.filter( p => p.id !== action.payload.id ),
                cart: [
                    ...state.cart,
                    {
                        id: action.payload.id,
                        name: action.payload.name,
                        quantity: action.payload.quantity,
                        price: action.payload.price,
                        ready: !action.payload.ready
                    }
                ]
            }
    
        case MOVE_CART_PRODUCT:
            return {
                ...state, 
                cart: state.cart.filter( c => c.id !== action.payload.id ),
                products: [
                    ...state.products,
                    {
                        id: action.payload.id,
                        name: action.payload.name,
                        quantity: action.payload.quantity,
                        price: action.payload.price,
                        ready: !action.payload.ready
                    }
                ]
            }

        

        default:
            return state;
    }
}

const rootReducers = combineReducers({
    productsReducer
})

export { rootReducers }