import React from 'react'
import Product from "./Product";
import {StyledProductList} from "./styles/ProductList.styled";

const ProductList = ({products}) => {
    return (
        <StyledProductList>
            {products && products.map(pro => <Product key={pro.sku} product={pro}/>)}
        </StyledProductList>
    )
}

export default ProductList;