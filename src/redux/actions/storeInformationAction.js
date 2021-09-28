import axios from "axios";
import {fetchInfoAboutUs} from "../../api/paths";
import {FETCH_STORE_INFORMATION} from "./actionTypes";


export const loadStoreInformation = () => async (dispatch) =>{
    try {
        const response = await axios.get(fetchInfoAboutUs);
        dispatch({
            type: FETCH_STORE_INFORMATION,
            payload: {
                info: response.data
            }
        })
    } catch (err) {
        console.log(err.response)
    }
}