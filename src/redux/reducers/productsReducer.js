import Product from "../../components/Product";
import {FETCH_PRODUCTS, PRODUCTS_TO_RENDER} from "../actions/actionTypes";

const initState = {
    allProducts: [],
    allCategories: [],
    productsToRender: [],
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
            state.productsToRender = p
            state.allCategories = categories
            return {...state}
            //return {...state, allProducts: action.payload.products}

        case PRODUCTS_TO_RENDER:
            state.productsToRender = action.payload.products
            return {...state}
        default:
            return  {...state}
    }
};

export default productsReducer;