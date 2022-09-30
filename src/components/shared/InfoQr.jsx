import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import QRCodeStyling from 'qr-code-styling';
import { phoneImg, qrLogo } from '../../constants/images';
import { colors } from '../../constants/colors';
import { BoldText, MediumText } from './styledTexts';

const FlexWrapper = styled.div`
  display: flex;
`;

const Wrapper = styled(FlexWrapper)`
  position: relative;
  background: white;
  border: 4px solid ${colors.orange};
  border-radius: 30px;
`;

const ContentWrapper = styled.div`
  padding: 50px;
  white-space: pre-line;
`;

const Title = styled(BoldText)`
    font-size: 42px;
`;

const Description = styled(MediumText)`
  font-size: 16px;
  margin-top: 15px;
  max-width: 390px;
`;

const TextBold = styled(BoldText)`
  font-size: 16px;
  margin-left: 40px;
`;

const QrWrapper = styled(FlexWrapper)`
  align-items: center;
  margin-top: 50px;
`;

const ImageWrapper = styled(FlexWrapper)`
  width: 28.90625vw;
  height: 100%;
  min-width: 51vh;
  justify-content: flex-end;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

export const InfoQr = () => {
    const ref = useRef();
    useEffect(() => {
        const qrCode = new QRCodeStyling({
            width: 145,
            height: 145,
            image: qrLogo,
            dotsOptions: {
                color: colors.purple,
                type: 'dots'
            },
            cornersSquareOptions: {
                type: 'square',
                color: colors.purple
            },
            cornersDotOptions: {
                type: 'square',
                color: colors.orange
            },
            imageOptions: {
                margin: 5,
                imageSize: 0.5
            },
            data: window.location.href
        });
        qrCode.append(ref.current);
    }, []);

    return (
        <Wrapper>
            <ContentWrapper>
                <Title>Привет!</Title>
                <Description>
                    До карьеры мечты осталось всего несколько свайпов. Скорее открывай игру на телефоне
                    {'\n'}и отправляйся на поиски идеальной команды.
                </Description>
                <Description>
                    <b>Сканируй QR-код ниже или копируй себе ссылку</b>{'\n'}{window.location.href}
                </Description>
                <QrWrapper>
                    <div ref={ref} />
                    <TextBold>До встречи на карьерных{'\n'}вершинах!</TextBold>
                </QrWrapper>
            </ContentWrapper>
            <ImageWrapper>
                <Image src={phoneImg} alt={''} />
            </ImageWrapper>
        </Wrapper>
    );
};
