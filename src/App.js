import React, { useEffect, useState, useRef } from "react";
import styled from 'styled-components';
import { ProgressProvider } from './context/ProgressContext';
import { useProgressInit } from "./hooks/useProgressInit";
import { preloadImage } from "./utils/preloadImage";
import { Logo } from './components/shared/svg/Logo';

const Wrapper = styled.div`
  ${({ styles }) => styles};
  position: relative;
  overflow: hidden;
  width: 100vw;
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
  max-height: 140px;
  width: 7.7777vw;
  max-width: 84px;
  z-index: 10000;
`

const LogoStyled = styled(Logo)`
  width: 100%;
  height: 100%;
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
        <ComponentWrapper ref={wrapperRef}>
          <Component />
        </ComponentWrapper>
      </Wrapper>
    </ProgressProvider>
  );
}

export default App;
