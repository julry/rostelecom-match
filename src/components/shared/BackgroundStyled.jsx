import React from 'react';
import styled from 'styled-components';
import { Background } from './svg/Background';

const BackgroundWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  overflow: hidden;
`;

const BackgroundSvgStyled = styled(Background)`
  width: auto;
  height: 100%;
`;

export const BackgroundStyled = () => (
    <BackgroundWrapper>
        <BackgroundSvgStyled />
    </BackgroundWrapper>
)