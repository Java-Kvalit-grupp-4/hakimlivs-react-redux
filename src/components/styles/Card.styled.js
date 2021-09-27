import styled from "styled-components";

export const StyledCard = styled.div`
  width: ${props => props.width};
  margin: ${props => props.margin};
  border-radius: 3px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2), 0px 0px 5px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;