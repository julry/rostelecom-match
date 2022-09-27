import React from 'react';
import { useProgress } from '../../../hooks/useProgress';
import { startMan } from '../../../constants/images';
import { AddictiveText, Title } from '../../shared/styledTexts';
import {
    BlackRoad,
    BlackRoadWrapper,
    DescriptionWrapper, ImportantSign, ImportantWrapper,
    Man,
    ManWrapper, OrangeRoad, OrangeRoadWrapper, PurpleRoad, PurpleRoadWrapper, SmallText, StartBtn,
    ThinkCloudStyled,
    ThinkPath,
    ThinkPathWrapper, ThinkText,
    ThinkWrapper,
    Wrapper
} from './styledComponents';

export const StartScreen = () => {
    const {next} = useProgress();

    const onStart = () => {
        next();
    };

    return (
        <Wrapper>
            <ManWrapper>
                <Man src={startMan} alt={''}/>
            </ManWrapper>
            <ThinkPathWrapper>
                <ThinkPath/>
            </ThinkPathWrapper>
            <ThinkWrapper>
                <ThinkCloudStyled/>
                <ThinkText>
                    {'«Эх, было бы с выбором работы\nвсё так же просто, как с приложениями\nдля знакомств :(»'}
                </ThinkText>
                <SmallText>
                    {'Поделился мыслями вслух один из наших\nстажеров, и мы решили исполнить его желание!'}
                </SmallText>
            </ThinkWrapper>
            <DescriptionWrapper>
                <Title>
                    {'Свайп влево, свайп вправо –\nи мы подберем тебе идеальный мэтч\nс отделом Ростелекома!'}
                </Title>
                <ImportantWrapper>
                    <ImportantSign/>
                    <AddictiveText>
                        {'Следуй своим истинным желаниям,\nтолько тогда тропа из свайпов\nприведет тебя в нужное место.'}
                    </AddictiveText>
                </ImportantWrapper>
                <StartBtn onClick={onStart}>На поиски!</StartBtn>
            </DescriptionWrapper>
            <PurpleRoadWrapper>
                <PurpleRoad/>
            </PurpleRoadWrapper>
            <OrangeRoadWrapper>
                <OrangeRoad/>
            </OrangeRoadWrapper>
            <BlackRoadWrapper>
                <BlackRoad/>
            </BlackRoadWrapper>
        </Wrapper>
    );
};