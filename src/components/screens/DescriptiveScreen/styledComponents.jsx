import styled, { keyframes } from 'styled-components';
import { Description, LightText, SmallLightText, Title } from '../../shared/styledTexts';
import { SwipeCard } from '../../shared/SwipeCard';
import { SwipeIcon } from '../../shared/svg/SwipeIcon';
import { SwipeBtns } from '../../shared/SwipeBtns';

export const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

export const Content = styled.div`
    padding: 20.6562vh 9.2592vw;
  ${Description} + ${Description} {
    margin-top: 3.2vh;
  }
`;

export const StyledCard = styled(SwipeCard)`
  height: 30vh;
  padding: 3.2vh;
`;

export const StyledTitle = styled(Title)`
    margin-bottom: 5.2083vh;
`;

export const leftRight = keyframes`
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-15vw);
  }
  50% {
    transform: translateX(0);
  }
  75% {
    transform: translateX(15vw);
  }
  100% {
    transform: translateX(0);
  }
`;

export const SwipeIconStyled = styled(SwipeIcon)`
  width: 16.666vw;
  height: 10.2vh;
  will-change: transform;
  animation: ${leftRight} 2s ease-in-out infinite;
`;

export const HighlightedText = styled.span`
  color: ${({color}) => color};
`;

export const SmallText = styled(SmallLightText)`
  position: absolute;
  bottom: 2.4vh;
  left: 50%;
  transform: translateX(-50%);
`;

export const SwipeBtnsStyled = styled(SwipeBtns)`
    bottom: 7.2vh;
`;