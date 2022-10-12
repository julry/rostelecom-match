import React from 'react';
import styled, { keyframes } from 'styled-components';
import { getStyledSvg } from './styledSvg';
import { Like } from './svg/Like';
import { colors } from '../../constants/colors';
import { ClickIcon } from './svg/ClickIcon';

const appear = keyframes`
  from {
    height: 0;
  }
  to {
    height: 9.8645vh;
  }
`;

const scaleGrow = keyframes`
  from {
    scale: 0
  }
  to {
    scale: 1
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(0.85);
  }

  70% {
    transform: scale(1);
  }

  100% {
    transform: scale(0.85);
  }
`;

const visibility = keyframes`
  0% {
    opacity: 0;
  }
  
  2% {
    opacity: 0;
  }
  
  12% {
    opacity: 100%;
  }

  21% {
    opacity: 0;
  }
  
  100% {
    opacity: 0;
  }
`;

const opacityAppear = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 100%
  }
`;


const Wrapper = styled.div`
  height: 9.8645vh;
  width: 90.7407vw;
  min-width: 220px;
  will-change: height;
  position: absolute;
  top: 2.6041vh;
  z-index: 1000;
  left: 50%;
  transform: translateX(-50%);
  animation: ${appear} .75s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  min-height: 60px;
`;

const Container = styled.div`
  background: white;
  border: 1px solid ${colors.purple};
  border-radius: 5px;
  color: #000000;
  cursor: pointer;
  will-change: transform;
  height: 100%;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
  animation: ${scaleGrow} .75s cubic-bezier(0.785, 0.135, 0.15, 0.86);
`;

const Content = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 17px;
  
  @media screen and (max-width: 330px){
    font-size: 15px;
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

const Body = styled.div`
  padding: 1.8229vh 4.6296vw;
  display: flex;
  align-items: center;
  margin: auto;
`;

const LikeIconWrapper = styled.div`
  width: 6.25vh;
  height: 6.25vh;
  min-width: 20px;
  min-height: 20px;
  margin-right: 6.6666vw;
`;

const LikeIcon = getStyledSvg(Like);

const ClickIconStyled = styled(ClickIcon)`
  position: absolute;
  right: 0;
  top: 5.8vh;
  width: 11.4667vw;
  height: 9.7451vh;
  min-width: 6.4468vh;
  opacity: 0;
  animation: ${opacityAppear} 1s 1s ease-in-out forwards, ${pulse} 1.5s 2s infinite;
  
  & #clickStrips {
    opacity: 0;
    animation: ${visibility} 1.5s 2s infinite;
  }
`;

export const Notification = (props) => {
    const {text, onClick} = props;
    return (
        <Wrapper onClick={onClick}>
            <Container>
                <Body>
                    <LikeIconWrapper>
                        <LikeIcon/>
                    </LikeIconWrapper>
                    <Content>{text}</Content>
                </Body>
                <ClickIconStyled />
            </Container>
        </Wrapper>
    );
};