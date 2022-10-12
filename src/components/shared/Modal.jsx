import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/colors';
import { MediumText } from './styledTexts';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 50;
`;

const BackgroundModal = styled(Wrapper)`
  opacity: 50%;
  background: white;
  filter: blur(10px);
  z-index: 1;
`;

const ContentWrapper = styled.div`
  position: absolute;
  background: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${colors.purple};
  border-radius: 14px;
  width: 53vw;
  padding: 4.1667vh 10px;
  z-index: 10;
  text-align: center;
`;

const Icon = styled.div`
  width: 18.2609%;  
  height: 4.2708vh;
  margin-bottom: 15px;
  
  & svg {
    height: 100%;
  }
`;

const TextStyled = styled(MediumText)`
  font-size: 14px;
  
  @media screen and (min-width: 1000px){
    font-size: 16px;
  }
`;

export const Modal = (props) => (
    <Wrapper>
        <BackgroundModal/>
        <ContentWrapper>
            {props.icon && (
                <Icon>
                    {props.icon()}
                </Icon>
            )}
            <TextStyled>{props.text}</TextStyled>
        </ContentWrapper>
    </Wrapper>
);
