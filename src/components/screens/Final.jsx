import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useResult } from '../../hocs/useResult';
import { Notification } from '../shared/Notification';
import { useProgress } from '../../hooks/useProgress';
import { ItsAMatch } from '../shared/svg/ItsAMatch';
import { getStyledSvg } from '../shared/styledSvg';
import { AddictiveText, ColoredText, RegularDescription, RegularText, Title } from '../shared/styledTexts';
import { colors } from '../../constants/colors';
import { ImportantMark } from '../shared/svg/ImportantMark';

const Wrapper = styled.div`
  padding-top: 17.7083vh;
`;

const MatchWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: min-content;
`;

const MatchTextWrapper = styled.div`
  width: 75.7407vw;
  height: 9.01047vh;
  min-height: 16.0185vw;
  margin-bottom: 3.3857vh;
`;

const MatchText = styled(ItsAMatch)`
    width: 100%;
`;

const MatchTitle = styled(ColoredText)`
  font-size: 28px;
  text-transform: uppercase;
`;

const CommunicationWrapper = styled.div`
  margin: 3.542vh 9.2592vw;
  border-radius: 5px;
  background: #F4F4F5;
  padding: 3.208vh 6.2592vw;
`;

const TitleStyled = styled(Title)`
    margin-bottom: 18px;
`

const ImportantWrapper = styled.div`
  display: flex;
  max-width: 68.7962vw;
  margin: 0 auto;
  align-items: center;
`;

const ImportantSignWrapper = styled.div`
  height: 6.5416vh;
  max-height: 135px;
  width: 2.5vw;
  max-width: 27px;
  margin-right: 4.6296vw;
  
  @media screen and (min-width: 1000px) {
    margin-right: 20px;
  }
`;

const ImportantSign = getStyledSvg(ImportantMark);

export const Final = () => {
    const result = useResult();
    const {next} = useProgress();
    const [notif, setNotif] = useState({});

    useEffect(() => {
        const timeOutId = setTimeout(() => {
            setNotif({text: 'Тебе поставили супер-лайк!'})
        }, 1000);
        return () => clearTimeout(timeOutId);
    }, [])
    return (
        <Wrapper>
            {notif.text && <Notification text={notif.text} onClick={next}/>}
            <MatchWrapper>
                <MatchTextWrapper>
                    <MatchText />
                </MatchTextWrapper>
                <MatchTitle color={'red'}>ТЫ</MatchTitle>
                <Title>&</Title>
                <MatchTitle color={colors.purple}>{result.label}</MatchTitle>
            </MatchWrapper>
            <CommunicationWrapper>
                <TitleStyled>Начните общение</TitleStyled>
                <RegularDescription>{result.communication}</RegularDescription>
            </CommunicationWrapper>
            <ImportantWrapper>
                <ImportantSignWrapper>
                    <ImportantSign/>
                </ImportantSignWrapper>
                <RegularDescription>
                    Кстати, на первое свидание тебя {result.firstDate}
                </RegularDescription>
            </ImportantWrapper>
        </Wrapper>
    )
}