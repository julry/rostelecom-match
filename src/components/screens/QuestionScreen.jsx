import React, { useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import { useProgress } from '../../hooks/useProgress';
import { SwipeCard } from '../shared/SwipeCard';
import { CARD_TYPES } from '../../constants/cards.config';
import { getCardById } from '../../utils/getCardById';
import { SwipeBtns } from '../shared/SwipeBtns';
import { BackgroundStyled } from '../shared/BackgroundStyled';

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 17.5vh;
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const StyledCard = styled(SwipeCard)`
  height: 59.4583vh;
  max-height: 1180px;
  
  @media screen and (max-height: 500px){
    height: 55vh;
  }
`

export const QuestionScreen = () => {
    const {cards = [], updateAnswer, updateCards, next} = useProgress();
    const [currentCardId, setCurrentCardId] = useState('');
    const [currentIndex, setCurrentIndex] = useState(cards.length - 1);
    const currentIndexRef = useRef(currentIndex);
    const canSwipe = currentIndex >= 0

    const childRefs = useMemo(
        () =>
            Array(cards.length)
                .fill(0)
                .map(() => React.createRef()),
        []
    );

    const updateCurrentIndex = (val) => {
        setCurrentIndex(val);
        currentIndexRef.current = val;
    };

    const onSwipe = (side, id) => {
        if (!['right', 'left'].includes(side)) return;
        updateAnswer(id, {isAgreed: side === 'right'});
        setCurrentCardId(id);
        updateCurrentIndex(index => index > 0 ? index - 1 : 0);
    };

    useEffect(() => {
        if (getCardById(currentCardId)?.type === CARD_TYPES.common) {
            updateCards();
        }
        if (+currentCardId === cards.length) next();
    }, [currentCardId]);

    return (
        <Wrapper style={{width: '100%'}}>
            <BackgroundStyled />
            <CardContainer>
                {[...cards].reverse().map((card, index) => (
                    <StyledCard
                        key={card.id}
                        card={card}
                        cardRef={childRefs[index]}
                        onSwipe={onSwipe}
                        isBackgroundCard={index < currentIndex}
                        total={cards.length}
                        index={cards.length - index}
                    />
                ))}
            </CardContainer>
            <SwipeBtns
                canSwipe={canSwipe && currentIndex < cards.length && childRefs[currentIndex]}
                cardRef={childRefs[currentIndex]}
            />
        </Wrapper>
    );
};
