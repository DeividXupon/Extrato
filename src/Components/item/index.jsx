import React from "react";
import styled from "styled-components";

const Item = styled.div`
  display: flex;
  flex-direction: column;

  .tipo{
    font-weight: bold;
  }
`
export default ({ value, type, from }) => {
  return(
    <Item>
      <span className="tipo">{type}</span>
      <span>{from}</span>
      <span>{value}</span>
    </Item>
  )
}
