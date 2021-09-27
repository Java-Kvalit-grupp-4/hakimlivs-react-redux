import {
    ADD_PRODUCT_TO_CART,
    DECREMENT_CART,
    FETCH_PRODUCTS,
    INCREMENT_CART,
    REMOVE_PRODUCT_FROM_CART
} from "../actions/actionTypes";

const initState = {
    products: [],
    totalInCart: 0,
    addedProducts: [],
    totalPriceOfCart: 0
}

const cartReducer = (state = initState, action) => {
    switch (action.type){
        case FETCH_PRODUCTS:
            return {...state, products: action.payload.products}
        case INCREMENT_CART:
            return incrementCart(state, action);
        case DECREMENT_CART:
            return decrementCart(state,action);
        case ADD_PRODUCT_TO_CART:
            return addToCart(state,action)
        case REMOVE_PRODUCT_FROM_CART:
            return removeProduct(state, action)
        default:
            return  {...state}
    }
};

const addToCart = (state, action) => {
    const foundProduct = state.products.find(product => product.sku === action.payload.sku);
    state.totalPriceOfCart += foundProduct.price;
    state.totalInCart += 1;
    state.addedProducts.push({...foundProduct, quantity: 1} )
    saveCartToLocalStorage(state);
    return {...state}
}

const removeProduct = (state, action) => {
    let incrementItem = state.addedProducts.find(product => product.sku === action.payload.sku)
    const quantity = incrementItem.quantity;
    state.addedProducts = state.addedProducts.filter(product =>  product.sku !== action.payload.sku);
    state.totalInCart -= quantity;
    state.totalPriceOfCart -= incrementItem.price * quantity;
    saveCartToLocalStorage(state);
    return {...state}
}

const incrementCart = (state, action) => {
    let incrementItem = state.addedProducts.find(product => product.sku === action.payload.sku)
    incrementItem.quantity += 1;
    state.totalInCart += 1;
    state.totalPriceOfCart += incrementItem.price;
    saveCartToLocalStorage(state);
    return {...state}
}

const decrementCart = (state, action) => {
    let incrementItem = state.addedProducts.find(product => product.sku === action.payload.sku)
    if (incrementItem.quantity === 1){
        state.addedProducts = state.addedProducts.filter(product =>  product.sku !== action.payload.sku);
    }else {
        incrementItem.quantity -= 1;
    }
    state.totalInCart -= 1;
    state.totalPriceOfCart -= incrementItem.price;
    saveCartToLocalStorage(state);
    return{...state}
}

const saveCartToLocalStorage = (state) => {
    localStorage.setItem('cart', JSON.stringify({
        cart: {
            totalInCart: state.totalInCart,
            addedProducts: state.addedProducts,
            totalPriceOfCart: state.totalPriceOfCart
        }
    }));
}

export default cartReducer;