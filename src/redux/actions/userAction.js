import axios from "axios";
import {authUserUrl} from "../../api/paths";
import {LOGOUT} from "./actionTypes";

export const authUser = (username, password) => async (dispatch) => {
    const url = `${authUserUrl}?username=${username}&password=${password}`
    let response;
    try {
        response = await axios.post(url);
        dispatch({
            type: "LOGIN",
            payload: {
                response: response
            }
        })
    return response
    } catch (err) {
       return err.response
    }
}

export const logoutUser = () => {
    return {
        type: LOGOUT,
    }
}