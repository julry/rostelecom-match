import React from 'react';
import styled from 'styled-components';
import { ArrowLeft } from './svg/ArrowLeft';
import { ArrowRight } from './svg/ArrowRight';

const ButtonsContainer = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 5vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 9.2592vw;
`;

const getArrowStyled = (Arrow) => styled(Arrow)`
  width: 54px;
  height: 25px;
`;

const ArrowLeftStyled = getArrowStyled(ArrowLeft);
const ArrowRightStyled = getArrowStyled(ArrowRight);

export const SwipeBtns = (props) => (
        <ButtonsContainer className={props.className}>
            <ArrowLeftStyled/>
            {props.children}
            <ArrowRightStyled/>
        </ButtonsContainer>
);
