import React from 'react';
import styled from 'styled-components';
import { Background } from './svg/Background';

const BackgroundWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 100%;
  z-index: -1;
  overflow: hidden;
`;

const BackgroundSvgStyled = styled(Background)`
  width: auto;
  height: 100%;
  
  @media screen and (min-width: 1000px) {
    width: 180%;
    height: auto;
  }
`;

export const BackgroundStyled = (props) => (
    <BackgroundWrapper {...props}>
        <BackgroundSvgStyled />
    </BackgroundWrapper>
);
