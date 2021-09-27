import Product from "../../components/Product";
import {FETCH_PRODUCTS} from "../actions/actionTypes";

const initState = {
    allProducts: [],
    allCategories: []
}

const productsReducer = (state = initState, action) => {
    switch (action.type){
        case FETCH_PRODUCTS:
            const tempList = []
            action.payload.products
                .map(product => product.categories
                    .forEach(category => tempList.push(category.name)));
            const categories = [...new Set(tempList)]
            const p = action.payload.products.map(product => {return {...product, stock: 1}})
            state.allProducts = p
            state.allCategories = categories
            return {...state}
            //return {...state, allProducts: action.payload.products}
        default:
            return  {...state}
    }
};

export default productsReducer;