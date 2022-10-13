import React from 'react';
import { useProgress } from '../../../hooks/useProgress';
import { startMan } from '../../../constants/images';
import { AddictiveText, Title } from '../../shared/styledTexts';
import {
    BlackRoad,
    BlackRoadWrapper,
    ContentBlock,
    DescriptionWrapper,
    ImportantSign, ImportantText,
    ImportantWrapper,
    Man,
    ManWrapper,
    OrangeRoad,
    OrangeRoadWrapper,
    PersonWrapper,
    PurpleRoad,
    PurpleRoadWrapper,
    SmallText,
    SmallTextWrapper,
    StartBtn,
    ThinkCloudStyled,
    ThinkPath,
    ThinkPathWrapper,
    ThinkText,
    ThinkTextWrapper,
    ThinkWrapper,
    Wrapper
} from './styledComponents';
import { reachMetrikaGoal } from '../../../utils/reachMetrikaGoal';

export const StartScreen = () => {
    const {next, progress} = useProgress();

    const onStart = () => {
        reachMetrikaGoal('start')
        next();
    };

    return (
        <Wrapper>
            <ContentBlock>
                <PersonWrapper>
                    <ManWrapper>
                        <Man src={startMan} alt={''}/>
                    </ManWrapper>
                    <ThinkTextWrapper>
                        <ThinkPathWrapper>
                            <ThinkPath/>
                        </ThinkPathWrapper>
                        <ThinkWrapper height={progress.height}>
                            <ThinkCloudStyled/>
                            <ThinkText>
                                {'«Эх, было бы с выбором работы\nвсё так же просто, как с приложениями\nдля знакомств :(»'}
                            </ThinkText>
                        </ThinkWrapper>
                        <SmallTextWrapper>
                            <SmallText>
                                {'Поделился мыслями вслух один\nиз наших стажеров, и мы решили\nисполнить его желание!'}
                            </SmallText>
                        </SmallTextWrapper>
                    </ThinkTextWrapper>
                </PersonWrapper>
                <DescriptionWrapper>
                    <Title>
                        {'Свайпай влево, свайпай вправо\nи находи идеальный мэтч \nс отделом Ростелекома!'}
                    </Title>
                    <ImportantWrapper>
                        <ImportantSign/>
                        <ImportantText>
                            {'Следуй своим истинным желаниям,\nтолько тогда тропа из свайпов\nприведет тебя в нужное место'}
                        </ImportantText>
                    </ImportantWrapper>
                    <StartBtn onClick={onStart}>На поиски!</StartBtn>
                </DescriptionWrapper>
            </ContentBlock>
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
