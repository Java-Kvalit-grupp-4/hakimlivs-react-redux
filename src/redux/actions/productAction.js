import axios from "axios";
import {fetchAllProductsUrl} from "../../api/paths";
import {PRODUCTS_TO_RENDER} from "./actionTypes";

export const loadProducts = () => async (dispatch) =>{
    const response = await axios.get(fetchAllProductsUrl);
        dispatch({
            type: "FETCH_PRODUCTS",
            payload: {
                products: response.data
            }
        })
}

export const setProductsToRender = (products) => {
    return {
        type: PRODUCTS_TO_RENDER,
        payload: {
            products: products
        }
    }
}