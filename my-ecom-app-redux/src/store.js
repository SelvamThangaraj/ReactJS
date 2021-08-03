import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {productListReducer} from './reducers/productReducers'
//import {cartReducer} from './reducers/cartReducers'
const reducer = combineReducers({
    productlist: productListReducer,
   // cart:cartReducer
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(...middleware))
    )

export default store
