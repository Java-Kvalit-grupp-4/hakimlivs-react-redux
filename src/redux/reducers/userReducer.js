import Product from "../../components/Product";
import {LOGIN, LOGOUT} from "../actions/actionTypes";

const initState = {
    user: {},
    roles: [],
    jwtToken: '',
}

const userReducer = (state = initState, action) => {
    switch (action.type){
        case LOGIN:
            state.user = {username: action.payload.response.data.username}
            state.roles = action.payload.response.data.roles
            state.jwtToken = action.payload.response.data.jwt_token
            return {...state}
        case LOGOUT:
            state.user = {}
            state.roles = []
            state.jwtToken = ''

        default:
            return  {...state}
    }
};

export default userReducer;