import React, { useState } from 'react';
import { useBonusesResult } from '../../hocs/useBonusesResult';
import { Modal } from '../shared/Modal';
import { DoneMark } from '../shared/svg/DoneMark';
import { Button } from '../shared/Button';
import styled from 'styled-components';
import {
    AddictiveText,
    ColoredText,
    RegularDescription,
    SmallLightText,
    Title
} from '../shared/styledTexts';
import { colors } from '../../constants/colors';

const Wrapper = styled.div`
  padding: 15.7083vh 9.2592vw 20px 9.2592vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  max-width: 800px;
  
  @media screen and (max-width: 330px) {
    padding-top: 12.4251vh;
  }
`;

const LiStyled = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  margin-top: 1.8041vh;

  @media screen and (max-width: 330px) {
    margin-top: 1.2041vh;
  }
`;

const LiDoneMark = styled(DoneMark)`
  height: 2.0833vh;
  min-width: 2.6914vh;
  margin-right: 10px;
`;

const ColoredTitle = styled(ColoredText)`
  font-weight: 700;
  text-transform: uppercase;
`;

const MatchWrapper = styled.div`
    margin: 2.2142vh 0;
`;

const ButtonBlock = styled.div`
  margin-top: auto;
  width: 100%;
`;

const StyledButton = styled(Button)`
  width: 100%;
  margin-bottom: 5px;
`;

export const SmallText = styled(SmallLightText)`
  text-align: center;

  @media screen and (max-width: 330px) {
    font-size: 9px;
  }
`;

export const BonusScreen = () => {
    const bonuses = useBonusesResult();
    const [copyReadyModal, setCopyReadyModal] = useState(false);

    const onCopy = () => {
        const text = window.location.href;
        if (window.clipboardData && window.clipboardData.setData) {
            return window.clipboardData.setData('Text', text);
        } else if (navigator.clipboard && window.isSecureContext) {
            return navigator.clipboard.writeText(text);
        } else if (document.queryCommandSupported && document.queryCommandSupported('copy')) {
            const isOS = () => navigator.userAgent.match(/ipad|iphone/i);

            const textarea = document.createElement('textarea');
            textarea.textContent = text;
            textarea.style.position = 'fixed';
            textarea.disabled = true;
            document.body.appendChild(textarea);
            if (isOS()) {
                const range = document.createRange();
                range.selectNodeContents(textarea);
                const selection = window.getSelection();
                selection.removeAllRanges();
                selection.addRange(range);
                textarea.setSelectionRange(0, 999999);
            } else {
                textarea.select();
            }
            try {
                return document.execCommand('copy');
            } catch (ex) {
                console.warn('Copy to clipboard failed.', ex);
            } finally {
                document.body.removeChild(textarea);
            }
        }
    };

    const onCopyButtonClick = () => {
        onCopy();
        setCopyReadyModal(true);
        setTimeout(() => setCopyReadyModal(false), 3500);
    };
    return (<Wrapper>
        <Title>
            Вау… тут явно есть все шансы на совместное будущее!
        </Title>
        <MatchWrapper>
            <Title>
                <ColoredTitle color={colors.purple}>
                    Ты и Ростелеком -
                </ColoredTitle>
            </Title>
            <Title>
                <ColoredTitle color={colors.orange}>
                    it’s a perfect match!
                </ColoredTitle>
            </Title>
        </MatchWrapper>
        <RegularDescription>
            Помимо мэтча с командой тебя ждут прекрасные отношения и с самой компанией :)
        </RegularDescription>
        <br/>
        <AddictiveText>
            Вместе вы сможете:
        </AddictiveText>
        <ul>
            {bonuses.map(bonus => (
                <LiStyled key={bonus}>
                    <LiDoneMark/>
                    <RegularDescription>{bonus}</RegularDescription>
                </LiStyled>
            ))}
        </ul>
        <ButtonBlock>
            <StyledButton onClick={onCopyButtonClick}>
                Отправь ссылку другу
            </StyledButton>
            <SmallText>Вдруг вас сведет судьба в Ростелекоме</SmallText>
        </ButtonBlock>
        {copyReadyModal && <Modal text={'Скопировано'} icon={DoneMark}/>}
    </Wrapper>);
};