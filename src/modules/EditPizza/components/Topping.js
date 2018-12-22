import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 10px;
  cursor: pointer;
  margin: 2px auto;
  display: flex;
  background-color: #f5f5f5;

  :hover {
    box-shadow: 0 1px 1px rgba(0,0,0,0.1);
    background-color: #ffffff;
  }
`;

const Topping = ({ defaultSelected, name, price, onSelect }) => (
  <Wrapper onClick={() => onSelect(name)}>
    {name} - {price}
  </Wrapper>
);

export default Topping;
