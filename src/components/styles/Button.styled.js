import styled from "styled-components";

export const StyledButton = styled.button`
  width: fit-content;
  margin: auto;
  padding: 0.5rem 2rem;
  font-size: ${props => props.fontSize.button};
  font-weight: bolder;
  letter-spacing: 1px;
  border: none;
  border-radius: 3px;
  background-color: ${props => props.colors.primaryBtn};
  box-shadow: 0 0 3px rgba(0,0,0,0.3);
  cursor: pointer;
`;