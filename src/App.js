import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';
import { ProgressProvider } from './context/ProgressContext';
import { useProgressInit } from './hooks/useProgressInit';
import { preloadImage } from './utils/preloadImage';
import { Logo } from './components/shared/svg/Logo';
import { Title } from './components/shared/styledTexts';
import { Orientation } from './components/shared/svg/Orientation';
import { BackgroundStyled } from './components/shared/BackgroundStyled';
import { InfoQr } from './components/shared/InfoQr';

const Wrapper = styled.div`
  ${({styles}) => styles};
  position: relative;
  overflow: hidden;
  width: 100vw;
`;

const MobileViewLandscaped = styled.div`
  display: none;
  
  @media screen and (orientation: landscape) and (max-height: 640px) and (min-width: 400px) {
    display: block;
    background-color: white;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 10000;
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
  overflow-x: hidden;
  white-space: pre-line;
`;

const LogoWrapper = styled.div`
  position: absolute;
  top: 5.2083%;
  left: 9.2592%;
  height: 7.2916%;
  max-height: 52px;
  width: 7.7777%;
  max-width: 40px;
  z-index: 100;
`;

const InfoScreen = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  z-index: 3;
  flex-direction: ${({direction}) => direction};
  justify-content: center;
  align-items: center;
`;

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

function App() {
    const [height, setHeight] = useState('100vh');
    const progress = useProgressInit();
    const {screen, updateProgress} = progress;
    const notResizedScreens = [5];
    const Component = screen?.component || (() => null);
    const wrapperRef = useRef(null);

    useEffect(() => {
        updateProgress('wrapperRef', wrapperRef);
    }, []);

    useEffect(() => {
        const preloadImages = screen?.preloadImages;
        const clears = preloadImages && preloadImages.map(img => preloadImage(img));
        return () => clears && clears.forEach(clear => clear());
    }, [screen]);

    useEffect(() => {
        function handleResize() {
            const viewportHeight = document.documentElement.clientHeight;
            setHeight(viewportHeight + 'px');
        }

        handleResize();
        if (notResizedScreens.includes(screen.id)) return;


        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [screen]);

    return (
        <ProgressProvider value={progress}>
            <Wrapper styles={{height}}>
                {isMobile && (
                    <ComponentWrapper ref={wrapperRef}>
                        <LogoWrapper>
                            <Logo/>
                        </LogoWrapper>
                        <Component/>
                        <MobileViewLandscaped>
                            <InfoScreen direction={'row'}>
                                <InfoBackground />
                                <OrientationIcon />
                                <Title>????????????????????, ?????????????????? ???????????????????? :)</Title>
                            </InfoScreen>
                        </MobileViewLandscaped>
                    </ComponentWrapper>
                )}
                {!isMobile && (
                    <InfoScreen direction={'column'}>
                        <InfoBackground/>
                        <InfoQr />
                    </InfoScreen>
                )}
            </Wrapper>
        </ProgressProvider>
    );
}

export default App;
