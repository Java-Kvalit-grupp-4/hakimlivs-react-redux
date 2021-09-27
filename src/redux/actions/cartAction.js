import React from "react";

export const addProductToCart = (sku) => {
    return {
        type: 'ADD_PRODUCT_TO_CART',
        payload: {
            sku
        }
    }
}

export const incrementCart = (sku) => {
    return {
        type: 'INCREMENT_CART',
        payload: {
            sku
        }
    }
}

export const decrementCart = (sku) => {
    return {
        type: 'DECREMENT_CART',
        payload: {
            sku
        }
    }
}