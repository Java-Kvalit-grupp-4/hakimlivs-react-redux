import React, {useEffect, useState} from 'react'
import {StyledFilter} from "./styles/Filter.styled";
import {useDispatch, useSelector} from "react-redux";
import {setProductsToRender} from "../redux/actions/productAction";

const Sorting = ({id, label, options}) => {
    const [select, setSelect] = useState();
    const dispatch = useDispatch();
    let products = useSelector(state => state.productState.allProducts)

    const handleSelect = (e) => {
        setSelect(e.target.value)
    }

    const sortNamesAscending = (listOfProducts) => {
        return listOfProducts.sort((a, b) => a.title < b.title ? -1 : 1)
    }

    const sortNamesDescending = (listOfProducts) => {
        return listOfProducts.sort((a, b) => a.title < b.title ? 1 : -1)
    }

    const sortPriceAscending = (listOfProducts) => {
        return listOfProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
    }

    const sortPriceDescending = (listOfProducts) => {
        return listOfProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
    }

    useEffect(() => {
        let test = []
        switch (select) {
            case '1':
                test = sortPriceAscending(products);
                break;
            case '2':
                test = sortPriceDescending(products);
                break;
            case '3':
                test = sortNamesAscending(products);
                break;
            case '4':
                test = sortNamesDescending(products);
                break;
        }
        test = products
        dispatch(setProductsToRender(test));
    }, [select])

    return (
        <StyledFilter>
            <label htmlFor={id}>{label}</label>
            <select id={id} name={id} onChange={(e) => handleSelect(e)}>
                <option value='0'>Sort...</option>
                {options && options.map((e, index) => <option key={index} value={e.id}>{e.option}</option>)}
            </select>
        </StyledFilter>
    )
}

export default Sorting;