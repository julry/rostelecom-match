import React, { useEffect, useState } from 'react';
import { useIMask } from 'react-imask';
import { useProgress } from '../../../hooks/useProgress';
import {
    BtnsBlock,
    CardWrapper, DescriptionStyled,
    Form,
    Input, InputCheckboxStyled, InputWrapper, Label,
    LabelStyled,
    PersonalDataLink, RadioIconStyled, SendBtn,
    StyledCard,
    StyledTitle, TextStyled, TextWrapperStyled,
    Wrapper
} from './styledComponents';
import { sendDataToForms } from '../../../utils/sendDataToForms';
import { openHref } from '../../../utils/openHref';
import { Modal } from '../../shared/Modal';
import { DoneMark } from '../../shared/svg/DoneMark';
import { BackgroundStyled } from '../../shared/BackgroundStyled';
import { ErrorMark } from '../../shared/svg/ErrorMark';
import { reachMetrikaGoal } from '../../../utils/reachMetrikaGoal';
import { ReturnBtn } from '../../shared/ReturnBtn';

export const PhoneForm = () => {
    const {setPrev, updateProgress} = useProgress();
    const [phone, setPhone] = useState('');
    const [agreement, setAgreement] = useState(false);
    const [errorText, setErrorText] = useState('');
    const [loading, setLoading] = useState(false);
    const [sendingMessage, setSendingMessage] = useState({text: '', success: false})
    const [opts, setOpts] = useState({ mask: '+{7} {9}00 000-00-00' });
    const {ref, setValue, value} = useIMask(opts, {
        onAccept: (value) => setPhone(value),
    });

    const handleSubmit = async (correctPhone) => {
        const result = await sendDataToForms({phone: correctPhone});
        if (result) {
            setTimeout(() => {
                setPrev();
            }, 3000);
            updateProgress('phoneSaved', true);
            setSendingMessage({text: 'Телефон\nсохранён', success: true, icon: DoneMark});
        }
        else {
            setSendingMessage({text: 'Ой, попробуй\nещё раз', success: false, icon: ErrorMark});
            setTimeout(() => {
                setSendingMessage({});
            }, 3000);
        }

    }

    const onTouchStart = (e, callback) => {
        e.stopPropagation();
        callback();
    }

    const onSubmit = () => {
        if (phone?.length && agreement) {
            setLoading(true);
            reachMetrikaGoal('phone');
            handleSubmit(phone).then(() => setLoading(false));
        }
    }

    useEffect(() => {
        if (value.length > 3 && value.length < phone?.length) {
            setErrorText('Проверь правильность номера');
        } else {
            setErrorText('');
        }
    }, [value]);

    return (
        <Wrapper>
            <BackgroundStyled/>
            <ReturnBtn onClick={setPrev} direction={'prev'}>
                Вернуться к супер-лайку
            </ReturnBtn>
            <StyledTitle>
                Оставь свой номер телефона, чтобы{'\n'}побороться за мерч!
            </StyledTitle>
            <CardWrapper>
                <StyledCard>
                    <DescriptionStyled>
                        Обещаем, что будем использовать его только для оповещения о выигрыше. Результаты определим рандомайзером в декабре 2022.
                    </DescriptionStyled>
                    <Form>
                        <InputWrapper>
                            <Label isError={errorText.length}>{errorText ? errorText : 'Номер телефона'}</Label>
                            <Input
                                ref={ref}
                                type="tel"
                                placeholder="+7 900 000-00-00"
                                name="XmnwAc"
                                value={phone}
                                onChange={e => setValue(e.target.value)}
                                required
                            />
                        </InputWrapper>
                        <LabelStyled
                            onTouchStart={() => setAgreement(value => !value)}
                        >
                            <InputCheckboxStyled
                                type={'radio'}
                                onChange={() => setAgreement(value => !value)}
                                name={'agreement'}
                                checked={agreement}
                            />
                            <RadioIconStyled/>
                            <TextWrapperStyled>
                                <TextStyled>
                                    Я согласен на <PersonalDataLink onTouchStart={e => {
                                    onTouchStart(e,() => openHref('https://fut.ru/personal_data_policy/'))
                                }}>обработку персональных данных</PersonalDataLink> и получение информационных сообщений
                                </TextStyled>
                            </TextWrapperStyled>
                        </LabelStyled>
                    </Form>
                </StyledCard>
            </CardWrapper>
            <BtnsBlock>
                <SendBtn
                    disabled={!phone?.length || !agreement}
                    animation={loading}
                    onClick={onSubmit}
                >
                    Оставить номер
                </SendBtn>
            </BtnsBlock>
            {sendingMessage?.text && (
                <Modal text={sendingMessage.text} icon={sendingMessage.icon} />
            )}
        </Wrapper>
    )
}