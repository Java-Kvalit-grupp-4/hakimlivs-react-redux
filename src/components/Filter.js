import React, {useState} from 'react'
import {StyledFilter} from "./styles/Filter.styled";

const Filter = ({options, id, label}) => {
    console.log(options)
    const [select, setSelect] = useState();
    return (
        <StyledFilter>
            <label htmlFor={id}>{label}</label>
            <select id={id} name={id} onSelect={(e) => console.log(e)}>
                {options && options.map((option) => <option value={option} onClick={(e) => console.log(e)}>{option}</option>)}
            </select>
        </StyledFilter>
    )
}

export default Filter;