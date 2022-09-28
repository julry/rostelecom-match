import React, { useEffect, useState, useRef } from "react";
import QRCode from 'react-qr-code';
import styled from 'styled-components';
import { BrowserView, MobileView } from 'react-device-detect';
import { ProgressProvider } from './context/ProgressContext';
import { useProgressInit } from "./hooks/useProgressInit";
import { preloadImage } from "./utils/preloadImage";
import { Logo } from './components/shared/svg/Logo';
import { Title } from './components/shared/styledTexts';
import { Orientation } from './components/shared/svg/Orientation';
import { BackgroundStyled } from './components/shared/BackgroundStyled';
import { colors } from './constants/colors';

const Wrapper = styled.div`
  ${({ styles }) => styles};
  position: relative;
  overflow: hidden;
  width: 100vw;
`;

const BrowserViewStyled = styled(BrowserView)`
  height: 100%;
  width: 100%;
`;

const MobileViewStyled = styled(MobileView)`
  height: 100%;
  width: 100%;
  @media screen and (orientation: landscape) and (max-height: 640px) {
    display: none;
  }
`;
const MobileViewLandscaped = styled(MobileView)`
  display: none;
  @media screen and (orientation: landscape) and (max-height: 640px) {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

const ComponentWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: auto;
  white-space: pre-line;
`;

const LogoWrapper = styled.div`
  position: absolute;
  top: 5.2083vh;
  left: 9.2592vw;
  height: 7.2916vh;
  max-height: 52px;
  width: 7.7777vw;
  max-width: 40px;
  z-index: 10000;
`;

const InfoScreen = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: ${({direction}) => direction};
  justify-content: center;
  align-items: center;
`

const OrientationIcon = styled(Orientation)`
  width: 15vh;
  height: 15vh;
  margin-right: 20px;
`;

const InfoBackground = styled(BackgroundStyled)`
  & svg {
    height: auto;
    width: 150%;
  }
`;

const QRCodeStyled = styled(QRCode)`
  margin-top: 30px;
`

function App() {
  const [height, setHeight] = useState("100vh");
  const progress = useProgressInit();
  const { screen, updateProgress } = progress;

    const Component = screen?.component || (() => null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    updateProgress("wrapperRef", wrapperRef);
  }, []);

    useEffect(() => {
      const preloadImages = screen?.preloadImages;
      const clears = preloadImages && preloadImages.map(img => preloadImage(img));
      return () => clears && clears.forEach(clear => clear());
    }, [screen]);

  useEffect(() => {
    function handleResize() {
      const viewportHeight = document.documentElement.clientHeight;
      setHeight(viewportHeight + "px");
    }
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ProgressProvider value={progress}>
      <Wrapper styles={{ height }}>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <MobileViewStyled>
          <ComponentWrapper ref={wrapperRef}>
            <Component />
          </ComponentWrapper>
        </MobileViewStyled>
        <MobileViewLandscaped>
          <InfoScreen direction={'row'}>
            <InfoBackground />
            <OrientationIcon />
            <Title>Пожалуйста, переверни устройство :)</Title>
          </InfoScreen>
        </MobileViewLandscaped>
        <BrowserViewStyled>
          <InfoScreen direction={'column'}>
            <InfoBackground />
            <Title>Пожалуйста, воспользуйся телефоном :)</Title>
            <QRCodeStyled value={window.location.href} fgColor={colors.orange}/>
          </InfoScreen>
        </BrowserViewStyled>
      </Wrapper>
    </ProgressProvider>
  );
}

export default App;
