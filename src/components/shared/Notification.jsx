import React from 'react';
import styled, { keyframes } from 'styled-components';
import { getStyledSvg } from './styledSvg';
import { Like } from './svg/Like';
import { colors } from '../../constants/colors';

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

const Wrapper = styled.div`
  height: 9.8645vh;
  width: 90.7407vw;
  min-width: 220px;
  will-change: height;
  position: absolute;
  top: 2.6041vh;
  z-index: 100000000;
  left: 50%;
  transform: translateX(-50%);
  animation: ${appear} .75s cubic-bezier(0.785, 0.135, 0.15, 0.86);
`;

const Container = styled.div`
  background: white;
  border: 1px solid ${colors.purple};
  border-radius: 5px;
  color: #000000;
  cursor: pointer;
  overflow: hidden;
  will-change: transform;
  animation: ${scaleGrow} .75s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  height: 100%;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
`;

const Content = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
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
            </Container>
        </Wrapper>
    );
};