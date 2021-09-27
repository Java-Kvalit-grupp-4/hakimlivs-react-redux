import axios from "axios";
import {fetchAllProductsUrl} from "../../api/paths";

export const loadProducts = () => async (dispatch) =>{
    const response = await axios.get(fetchAllProductsUrl);
        dispatch({
            type: "FETCH_PRODUCTS",
            payload: {
                products: response.data
            }
        })
}