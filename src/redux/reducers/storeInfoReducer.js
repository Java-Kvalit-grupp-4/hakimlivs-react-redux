import {FETCH_STORE_INFORMATION} from "../actions/actionTypes";


const initState = {
    info: [
        {
            "openingHours": "",
            "deviatingHours": "",
            "streetAddress": "",
            "zipCode": "",
            "phoneNumber": "",
            "email": "",
            "aboutInfo": "",
            "imageUrl": "",
        }
    ]
}

const storeInfoReducer = (state = initState, action) => {
    switch (action.type){
        case FETCH_STORE_INFORMATION:
            state.info = action.payload.info;
            return {...state}
        default:
            return  {...state}
    }
};

export default storeInfoReducer;