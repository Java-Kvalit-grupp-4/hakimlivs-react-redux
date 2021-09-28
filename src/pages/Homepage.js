import React, {useEffect} from 'react'
import {Column2, Container, Row} from "../components/styles/Container.styled";
import ProductList from "../components/ProductList";
import Filter from "../components/Filter";
import {useDispatch, useSelector} from "react-redux";
import {loadProducts} from "../redux/actions/productAction";
import Sorting from "../components/Sorting";

const Homepage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadProducts());
        window.scroll(0,0)
    }, []);

    const products = useSelector(state => state.productState.productsToRender)
    const categories = useSelector(state => state.productState.allCategories);
    const sortBy = [
        {
            id: 1,
            option: "Price: Low to High"
        },
        {
            id: 2,
            option: "Price: High to Low"
        },
        {
            id: 3,
            option: "Alphabetical: A to Z"
        },
        {
            id: 4,
            option: "Alphabetical: Z to A"
        },
    ]

    return (
        <div>
            <Container>
                <Row>
                    <Column2>
                        <Filter id='Categories' label='Categories' options={categories}/>
                    </Column2>
                    <Column2>
                        <Sorting id='Filter' label='Sort by' options={sortBy}/>
                    </Column2>
                </Row>
                <ProductList products={products}/>
            </Container>
        </div>
    )
}

export default Homepage;