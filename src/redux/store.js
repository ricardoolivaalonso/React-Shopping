import { initialState } from './initialState'
import { rootReducers } from './reducers'
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const lcProducts = localStorage.getItem('lc-products') ? JSON.parse(localStorage.getItem('lc-products')) : initialState


const store = createStore(
    rootReducers,
    lcProducts,
    composeWithDevTools()
)
store.subscribe(()=>{
    localStorage.setItem('lc-products', JSON.stringify( store.getState()) )
})

export default store