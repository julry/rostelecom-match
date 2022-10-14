import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import QRCodeStyling from 'qr-code-styling';
import { phoneImg, qrLogo } from '../../constants/images';
import { colors } from '../../constants/colors';
import { BoldText, MediumText } from './styledTexts';
import { getLinkWithoutParams } from '../../utils/getLinkWithoutParams';

const FlexWrapper = styled.div`
  display: flex;
`;

const Wrapper = styled(FlexWrapper)`
  position: relative;
  background: white;
  justify-content: space-between;
  border: 4px solid ${colors.orange};
  border-radius: 30px;
  min-width: 68.75vw;
`;

const ContentWrapper = styled.div`
  padding: 50px 10px 50px 50px;
  max-width: 475px;
  white-space: pre-line;
`;

const Title = styled(BoldText)`
  font-size: 42px;
`;

const Description = styled(MediumText)`
  font-size: 16px;
  margin-top: 15px;
`;

const TextBold = styled(BoldText)`
  font-size: 16px;
`;

const QrWrapper = styled(FlexWrapper)`
  align-items: center;
  margin-top: 50px;
  margin-left: -10px;
  padding-right: 10px;
  justify-content: space-between;
`;

const ImageWrapper = styled(FlexWrapper)`
  width: 30.8594vw;
  min-width: 54.3vh;
  padding-right: 1vw;
  border-bottom-right-radius: 26px;
  overflow: hidden;
  justify-content: flex-end;
  align-items: flex-end;
`;

const Image = styled.img`
  width: 100%;
  object-fit: contain;
`;

export const InfoQr = () => {
    const ref = useRef();

    useEffect(() => {
        const qrCode = new QRCodeStyling({
            width: 200,
            height: 200,
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
                    До карьеры мечты осталось всего несколько свайпов!{'\n'}
                    Открывай игру на телефоне, отвечай на вопросы{'\n'}и находи мэтч с одной из команд Ростелекома.
                    {'\n'}
                </Description>
                <Description>
                    <b>Сканируй QR-код ниже или копируй себе ссылку</b>
                </Description>
                <Description>
                    {getLinkWithoutParams(window.location.href)}
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
