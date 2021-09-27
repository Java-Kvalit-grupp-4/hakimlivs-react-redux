import React, {useEffect} from 'react'
import {Column2, Container, ContainerFlexColumn, Row} from "../components/styles/Container.styled";
import ProductList from "../components/ProductList";
import Filter from "../components/Filter";
import {useDispatch, useSelector} from "react-redux";
import {loadProducts} from "../redux/actions/productAction";

const Homepage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadProducts());
    }, []);

    const products = useSelector(state => state.productState.allProducts)
    const categories = useSelector(state => state.productState.allCategories);

    return (
        <div>
            <Container>
                <ContainerFlexColumn>
                    <Row>
                        <Column2>
                            <Filter id='Categories' label='Categories' options={categories}/>
                        </Column2>
                        <Column2>
                            <Filter id='Filter' label='Filter by' options={categories}/>
                        </Column2>
                    </Row>
                    <ProductList products={products}/>
                </ContainerFlexColumn>

            </Container>
        </div>
    )
}

export default Homepage;