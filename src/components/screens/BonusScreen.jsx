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
    Title
} from '../shared/styledTexts';
import { colors } from '../../constants/colors';
import { reachMetrikaGoal } from '../../utils/reachMetrikaGoal';
import { useProgress } from '../../hooks/useProgress';
import { ReturnBtn } from '../shared/ReturnBtn';
import { getLinkWithoutParams } from '../../utils/getLinkWithoutParams';

const Wrapper = styled.div`
  padding: 14.2083vh 9.2592vw 20px 9.2592vw;
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
  margin: 1.8142vh 0;
  @media screen and (max-height: 550px) {
    margin: 1.1842vh 0;
  }
`;

const ButtonBlock = styled.div`
  margin-top: auto;
  width: 100%;
`;

const StyledButton = styled(Button)`
  width: 100%;
  margin-bottom: 5px;
`;

const StyledButtonPrize = styled(StyledButton)`
  background: ${({disabled}) => disabled ? 'white' : colors.purple};
  border: ${({disabled}) => disabled ? '1px solid #B5B7C0' : 'none'};
  color: ${({disabled}) => disabled ? '#B5B7C0' : 'white'};
`;

const Description = styled(RegularDescription)`
  margin-bottom: 1vh;
`;

export const BonusScreen = () => {
    const bonuses = useBonusesResult();
    const {setPrev, updateProgress, next, progress} = useProgress();
    const [copyReadyModal, setCopyReadyModal] = useState(false);

    const onCopy = () => {
        reachMetrikaGoal('share');
        const text = getLinkWithoutParams(window.location.href);
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

    const onReturnBtnClick = () => {
        updateProgress('backToMatch', true);
        setPrev();
    };

    const onPrizeClick = () => {
        reachMetrikaGoal('merch');
        next();
    }

    return (
        <Wrapper>
            <ReturnBtn onClick={onReturnBtnClick} direction={'prev'}>
                ?????????????????? ?? ?????????? ?? ????????????????
            </ReturnBtn>
            <Title>
                ????????? ?????? ???????? ???????? ?????? ?????????? ???? ???????????????????? ??????????????!
            </Title>
            <MatchWrapper>
                <Title>
                    <ColoredTitle color={colors.purple}>
                        ???? ?? ???????????????????? -
                    </ColoredTitle>
                </Title>
                <Title>
                    <ColoredTitle color={colors.orange}>
                        it???s a perfect match!
                    </ColoredTitle>
                </Title>
            </MatchWrapper>
            <Description>
                ???????????? ?????????? ?? ???????????????? ???????? ???????? ???????????????????? ?????????????????? ?? ?? ?????????? ?????????????????? :)
            </Description>
            <AddictiveText>
                ???????????? ???? ??????????????:
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
                    ?????????????????? ???????????? ??????????
                </StyledButton>
                <StyledButtonPrize
                    onClick={progress?.phoneSaved ? () => {} : onPrizeClick}
                    disabled={progress?.phoneSaved}
                >
                    {progress.phoneSaved ? '???? ?????? ???????????????????? ?? ???????????? ???? ????????!' : '???????????????? ???????? ???? ??????????????????????'}
                </StyledButtonPrize>
            </ButtonBlock>
            {copyReadyModal && <Modal text={'????????????\n??????????????????????'} icon={DoneMark}/>}
        </Wrapper>
    );
};
