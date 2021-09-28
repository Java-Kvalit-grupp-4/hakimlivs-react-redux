import { combineReducers} from "@reduxjs/toolkit";
import productsReducer from "./productsReducer";
import cartReducer from "./cartReducer";
import userReducer from "./userReducer";
import loggedInReducer from "./loggedInReducer";
import storeInfoReducer from "./storeInfoReducer";

const rootReducer = combineReducers({
    productState: productsReducer,
    cartState: cartReducer,
    userState: userReducer,
    loggedInState: loggedInReducer,
    storeInfoState: storeInfoReducer
})

export default rootReducer;

