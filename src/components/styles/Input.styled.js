import styled from "styled-components";

export const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  label {
    padding: 0.5rem 0;
    letter-spacing: 2px;
    font-weight: bolder;
  }

  input {
    font-size: 1.125rem;
    width: 250px;
    padding: 0.5em;
    line-height: 1.4;
    letter-spacing: 1px;
    background-color: #f9f9f9;
    border: 1px solid #e5e5e5;
    border-radius: 3px;
  }
  
`;