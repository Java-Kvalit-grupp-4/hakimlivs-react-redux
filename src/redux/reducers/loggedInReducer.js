import Product from "../../components/Product";
import {CHANGE_LOGGED_IN} from "../actions/actionTypes";

const initState = {
    isLoggedIn: false,
    loggedInText: 'Sign In'
}

const loggedInReducer = (state = initState, action) => {
    switch (action.type){
        case CHANGE_LOGGED_IN:
            state.isLoggedIn = !state.isLoggedIn;
            if (state.isLoggedIn) {
                state.loggedInText = "Sign Out"
            }else {
                state.loggedInText = "Sign In"
            }
            return {...state}
        default:
            return  {...state}
    }
};

export default loggedInReducer;