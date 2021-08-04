import axios from 'axios';
import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
} from '../constants/productConstants'

export const listProducts = () => async (dispatch) => {
    try {
        //dispatch will call the reducer function
        //and reducer will provide the new state object
        dispatch({ type: PRODUCT_LIST_REQUEST })  
        const { data } = await axios.get('/api/products/')

        dispatch({
            type: PRODUCT_LIST_SUCCESS,  //In Reducer , action.type
            payload: data,              //In Reducer, action.payload
        })

    }
    catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
        })
    }
}