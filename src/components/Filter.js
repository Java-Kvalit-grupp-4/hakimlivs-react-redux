import React, {useEffect, useState} from 'react'
import {StyledFilter} from "./styles/Filter.styled";
import {useDispatch, useSelector} from "react-redux";
import {setProductsToRender} from "../redux/actions/productAction";

const Filter = ({options, id, label}) => {
    const [select, setSelect] = useState();
    const dispatch = useDispatch();
    let products = useSelector(state => state.productState.allProducts)

    const handleSelect = (e) => {
        setSelect(e.target.value)
    }

    useEffect(() => {
        let filterProducts = []
        if (select !== 'All'){
            products.forEach((prod) => {
                prod.categories.forEach(e => {
                    if (e.name.includes(select)) {
                        filterProducts.push(prod)
                    }
                })
            })
        } else {
            filterProducts = products;
        }
        dispatch(setProductsToRender(filterProducts));
    }, [select])

    return (
        <StyledFilter>
            <label htmlFor={id}>{label}</label>
            <select id={id} name={id} onChange={(e) => handleSelect(e)}>
                <option value="All">All categories</option>
                {options && options.map((option, index) => <option key={index} value={option}>{option}</option>)}
            </select>
        </StyledFilter>
    )
}

export default Filter;