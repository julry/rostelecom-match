import React, { useRef } from 'react';
import { useProgress } from '../../../hooks/useProgress';
import { Description } from '../../shared/styledTexts';
import { BackgroundStyled } from '../../shared/BackgroundStyled';
import {
    Content,
    HighlightedText,
    SmallText,
    StyledCard,
    StyledTitle,
    SwipeBtnsStyled, SwipeIconStyled,
    Wrapper
} from './styledComponents';

export const DescriptiveScreen = () => {
    const {next} = useProgress();
    const cardRef = useRef();

    const onSwipe = (side) => {
        if (side === 'right') next();
    }
    return (
        <Wrapper>
            <BackgroundStyled />
            <Content>
                <StyledTitle>{'Мини - гайд для тех, кто давно\nне сидел в приложениях\nзнакомств'}</StyledTitle>
                <StyledCard
                    onSwipe={onSwipe}
                    cardRef={cardRef}
                    prohibitDir={'left'}
                    Component={() => <div>
                        <Description>
                            Свайпай
                            <HighlightedText color={'#60B642'}> вправо</HighlightedText>,
                            если содержание карточки тебе близко или соответствует твоим компетенциям.
                        </Description>
                        <Description>
                            Если нет – свайпай <HighlightedText color={'red'}>влево</HighlightedText>
                        </Description>
                    </div>}
                />
            </Content>
            <SwipeBtnsStyled canSwipe={!!cardRef} cardRef={cardRef} prohibitDir={'left'}>
                <SwipeIconStyled />
            </SwipeBtnsStyled>
            <SmallText>Всё ясно –> свайпни вправо</SmallText>
        </Wrapper>
    )
};
