import React, { useEffect, useRef, useState } from 'react';
import { useIMask } from 'react-imask';
import { useProgress } from '../../../hooks/useProgress';
import { SwipeBtns } from '../../shared/SwipeBtns';
import {
    CardContentWrapper,
    CardWrapper, DescriptionStyled, DummyCard,
    Form,
    Input, InputCheckboxStyled, InputWrapper, Label,
    LabelStyled, LoadingStyled, LoadingText, LoadingWrapper,
    PersonalDataLink, RadioIconStyled,
    StyledCard,
    StyledTitle, TextStyled, TextWrapperStyled,
    Wrapper
} from './styledComponents';
import { sendDataToForms } from '../../../utils/sendDataToForms';
import { openHref } from '../../../utils/openHref';
import { ColoredText } from '../../shared/styledTexts';
import { Modal } from '../../shared/Modal';
import { DoneMark } from '../../shared/svg/DoneMark';
import { BackgroundStyled } from '../../shared/BackgroundStyled';

export const Loading = () => {
    const {next} = useProgress();
    const [phone, setPhone] = useState('');
    const [agreement, setAgreement] = useState(false);
    const [errorText, setErrorText] = useState('');
    const [autoFocus, setAutoFocus] = useState(false);
    const [sendingMessage, setSendingMessage] = useState({text: '', success: false})
    const [opts, setOpts] = useState({ mask: '+{7} {9}00 000-00-00' });
    const cardRef = useRef();
    const cardCorrectRef = useRef();
    const {ref, setValue, value} = useIMask(opts, {
        onAccept: (value) => setPhone(value),
    });

    const handleSubmit = async (correctPhone) => {
        const result = await sendDataToForms({phone: correctPhone});
        if (result) {
            setTimeout(() => {
                next();
            }, 3000);
            setSendingMessage({text: 'Сохранено', success: true});
        }
        else {
            setSendingMessage({text: 'Ой, что-то пошло не так, попробуй снова', success: false});
            setTimeout(() => {
                setSendingMessage({});
            }, 3000);
            await cardCorrectRef.current.restoreCard();
        }

    }

    const onTouchStart = (e, callback) => {
        e.stopPropagation();
        callback();
    }

    const onSwipe = (side, phone) => {
        if (side === 'right') {
            if (phone?.length && agreement) handleSubmit(phone)
        }
        else next()
    }

    useEffect(() => {
        if (value.length > 3 && value.length < phone?.length) {
            setErrorText('Проверь правильность номера');
        } else {
            setErrorText('');
        }
    }, [value]);

    const CardContent = () => (
        <CardContentWrapper onTouchStart={() => {
            ref.current.blur();
            setAutoFocus(false);
        }}>
            <DescriptionStyled>
                Обещаем, что будем использовать его только для оповещения о выигрыше{'\n'}
                Свайпай <ColoredText color={'red'}>влево</ColoredText>, если <ColoredText color={'red'}>не хочешь</ColoredText> получить мерч от Ростелекома
            </DescriptionStyled>
            <Form onSubmit={handleSubmit}>
                <InputWrapper>
                    <Label isError={errorText.length}>{errorText ? errorText : 'Номер телефона'}</Label>
                    <Input
                        ref={ref}
                        type="tel"
                        placeholder="+7 900 000-00-00"
                        name="XmnwAc"
                        value={phone}
                        autoFocus={autoFocus}
                        onChange={e => setValue(e.target.value)}
                        required
                        onTouchStart={(e) => onTouchStart(e,() => {
                            setAutoFocus(true);
                            ref.current.focus();
                        })}
                        onClick={() => setAutoFocus(true)}
                    />
                </InputWrapper>
                <LabelStyled
                    onTouchStart={(e) => onTouchStart(e,() => setAgreement(value => !value))}
                >
                    <InputCheckboxStyled
                        type={'radio'}
                        onChange={() => setAgreement(value => !value)}
                        name={'agreement'}
                        checked={agreement}
                    />
                    <RadioIconStyled
                        onTouchStart={(e) => onTouchStart(e,() => setAgreement(value => !value))}
                    />
                    <TextWrapperStyled>
                        <TextStyled>
                            Я согласен на <PersonalDataLink onTouchStart={e => {
                            onTouchStart(e,() => openHref('https://fut.ru/personal_data_policy/'))
                        }}>обработку персональных данных</PersonalDataLink> и получение информационных сообщений
                        </TextStyled>
                    </TextWrapperStyled>
                </LabelStyled>
            </Form>
        </CardContentWrapper>
    );

    const Card = ({phone}) => (
        <StyledCard
            onSwipe={(side) => onSwipe(side, phone)}
            cardRef={cardCorrectRef}
            Component={()=><CardContent/>}
        />
    )

    return (
        <Wrapper>
            <BackgroundStyled/>
            <StyledTitle>
                Оставь свой номер телефона, чтобы участвовать в розыгрыше призов!
            </StyledTitle>
            {!sendingMessage.success ?  (
                <CardWrapper>
                {(phone?.length && agreement) ? (
                    <Card phone={phone}/>
                ) : <StyledCard onSwipe={onSwipe} cardRef={cardRef} prohibitDir={'right'} Component={CardContent}/>
                }
                </CardWrapper>
            ) : <DummyCard />
            }
            <LoadingWrapper>
                <LoadingStyled />
                <LoadingText>Руководители пока смотрят, с кем у тебя произошёл тотал мэтч</LoadingText>
            </LoadingWrapper>
            <SwipeBtns
                canSwipe={phone?.length ? agreement && !!cardCorrectRef : !!cardRef}
                cardRef={phone?.length ? cardCorrectRef : cardRef}
                prohibitDir={phone?.length ? '' : 'right'}
            />
            {sendingMessage?.text && (
                <Modal text={sendingMessage.text} icon={DoneMark} />
            )}
        </Wrapper>
    )
}