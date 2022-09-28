import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import TinderCard from 'react-tinder-card';
import { colors } from '../../constants/colors';
import { BoldText, MediumText } from './styledTexts';

const Wrapper = styled.div`
  position: relative;
  background-color: #fff;
  width: 81.4814vw;
  max-width: 880px;
  border: 1px solid ${colors.orange};
  border-radius: 10px;
  background-size: cover;
  background-position: center;
  overflow: hidden;
`;

const StyledCard = styled(TinderCard)`
  position: absolute;
  will-change: opacity;
  opacity: ${({isBackgroundCard, hasLoad}) => isBackgroundCard ? '0' : hasLoad ? '100%' : '20%'};
  transition: opacity 0.75s;
  z-index: 24;
`;

const StyledContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const CardCount = styled(MediumText)`
  margin: 2.6vh 0 0 2.6vh;
`;

const Sentence = styled(BoldText)`
  font-size: 20px;
  margin: 5.2vh 5.2592vw 0 9.2592vw;
  
  @media screen and (max-width: 330px){
    font-size: 16px;
  }

  @media screen and (min-width: 1000px) {
    font-size: 22px;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: end;
  margin-top: auto; 
  width: 100%;
  height: 36.4583vh;
`
const Image = styled.img`
  width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

export const SwipeCard = (props) => {
    const {card = {}, onSwipe, Component, cardRef, isBackgroundCard, total, index, prohibitDir} = props;
    const {id, text, image} = card;
    const refW = useRef();
    const [load, setLoad] = useState(false);
    const preventSwipe = ['down', 'up', prohibitDir];
    const Content = () => Component ? <Component/> : (<>
        {total && <CardCount>{index}/{total}</CardCount>}
        {text && <Sentence>{text}</Sentence>}
        {image && (
            <ImageWrapper>
                <Image src={image} alt={''} onLoad={() => setLoad(index)}/>
            </ImageWrapper>
        )}
    </>);
    return (
        <StyledCard
            isBackgroundCard={isBackgroundCard}
            hasLoad={!image || load === index}
            ref={cardRef}
            onSwipe={(side) => onSwipe(side, id)}
            preventSwipe={preventSwipe}
        >
            <Wrapper ref={refW} className={props.className}>
                <StyledContent>
                    <Content />
                </StyledContent>
            </Wrapper>
        </StyledCard>
    );
};