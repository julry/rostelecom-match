import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/colors';

const StyledButton = styled.button`
  background: ${colors.orange};
  border-radius: 5px;
  outline: none;
  border: none;
  color: white;
  padding: 1.0416vh 0;
  font-size: 14px;
  font-weight: 500;
`;

export const Button = (props) => {
    return <StyledButton {...props}>{props.children}</StyledButton>
};
