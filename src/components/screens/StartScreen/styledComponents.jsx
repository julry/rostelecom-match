import styled from 'styled-components';
import { getStyledSvg } from '../../shared/styledSvg';
import { ThinkingPath } from '../../shared/svg/ThinkingPath';
import { ThinkingCloud } from '../../shared/svg/ThinkingCloud';
import { LightText, MediumText } from '../../shared/styledTexts';
import { ImportantMark } from '../../shared/svg/ImportantMark';
import { Button } from '../../shared/Button';
import { Road } from '../../shared/svg/Road';
import { RoadRed } from '../../shared/svg/RoadRed';
import { RoadBlack } from '../../shared/svg/RoadBlack';

export const Wrapper = styled.div`
  padding: 10.4vh 0 0;
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const ManWrapper = styled.div`
  padding-top: 5.2687vh;
  width: 30vw;
  max-width: 314px;
  min-width: 16.3538vh;
  height: 25.135vh;
  max-height: 425px;
  margin-left: 3.5407vw;
  position: relative;
  z-index: 3;
  
  @media screen and (min-width: 1000px) {
    width: 150px;
    height: 210px;
    min-width: 150px;
  }
`;

export const Man = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;


export const PersonWrapper = styled.div`
  display: flex;
`;

export const ThinkTextWrapper = styled.div`
  padding-top: calc(7.0564vh + 8px);
  margin-left: -25px;
  width: 63.4259vw;
  max-width: 240px;
  display: flex;
  flex-direction: column;
`;


export const ThinkPathWrapper = styled.div`
  position: absolute;
  top: 11.1777vh;
  left: 20.1851vw;
  height: 6.7187vh;
  width: 22.7777vw;
  
  @media screen and (min-width: 1000px) {
    top: 0.1777%;
    left: 25.5%;
  }
`;

export const ThinkPath = getStyledSvg(ThinkingPath);

export const SmallTextWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
`;

export const ThinkWrapper = styled.div`
  position: relative;
  width: 63.4259vw;
  height: 16.8974vw;
  max-width: 240px;
  max-height: 65px;
  flex-shrink: 0;

  @media screen and (min-width: 1000px) {
    margin-left: auto;
  }

  @media screen and (min-width: 450px) {
    max-width: 300px;
    max-height: 78px;
  }
  
  @media screen and (min-width: 640px) {
    max-width: 330px;
    max-height: 90px;
  }
`;

export const ThinkCloudStyled = styled(ThinkingCloud)`
    width: 100%;
  
`;

export const ThinkText = styled(MediumText)`
  font-size: 10px;
  position: absolute;
  top: 28%;
  left: 13.8248%;
  
  @media screen and (max-width: 345px){
    font-size: 8px;
  }
  
  @media screen and (max-width: 300px){
    left: 11.4%;
  }

  @media screen and (min-width: 450px) {
    font-size: 11px;
  }
  
  @media screen and (min-width: 1000px) {
    font-size: 12px;
    left: 10.5%;
  }
  @media screen and (max-height: 550px){
    font-size: 8px;
  }

  @media screen and (min-width: 640px) {
    font-size: 13px;
  }
`;

export const SmallText = styled(LightText)`
  font-size: 10px;
  margin-left: 13.8248%;

  @media screen and (min-width: 1000px) {
    font-size: 10px;
    margin-left: 10.5%;
  }

  @media screen and (max-width: 320px){
    font-size: 8px;
  }
  

  @media screen and (max-width: 300px){
    margin-left: 11.4%;
  }

  @media screen and (max-height: 550px){
    font-size: 8px;
    line-height: 105%;
  }
  
  @media screen and (min-width: 640px) {
    font-size: 13px;
  }
`;

export const DescriptionWrapper = styled.div`
  position: relative;
  background-color: #F4F4F5;
  border-radius: 5px;
  margin: 0 9.2592vw;
  padding: 4.8229vh 5.3333vw;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1000px) {
    margin: 0;
    padding: 70px;
  }
  
  @media screen and (max-width: 320px){
    padding: 4.8229vh 2vw;
  }
`;

export const ImportantWrapper = styled.div`
  display: flex;
  margin: 4.677vh 0 1.3952vh;
  justify-content: center;
  align-items: center;
`

export const ImportantSign = styled(ImportantMark)`
  height: 6.0416vh;
  max-height: 64px;
  width: 2.5vw;
  max-width: 15px;
  margin-right: 4.6296vw;

  @media screen and (min-width: 1000px) {
    margin-right: 20px;
  }
`;

export const StartBtn = styled(Button)`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  width: 45.92592vw;
  bottom: calc(-1.0416vh - 8px);
  max-width: 250px;
`;

export const PurpleRoadWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  width: 61.8518vw;
  height: 17.2916vh;
  min-width: 34.8036vh;
  overflow: hidden;
  z-index: 5;
  display: flex;
  justify-content: center;
`;

export const PurpleRoad = getStyledSvg(Road);

export const OrangeRoadWrapper = styled.div`
  position: absolute;
  bottom: 2.7083vh;
  left: 0;
  width: 36.3888vw;
  height: 14.21875vh;
  min-width: 20.46875vh;
  overflow: hidden;
  display: flex;
  justify-content: left;
`;

export const OrangeRoad = getStyledSvg(RoadRed);

export const BlackRoadWrapper = styled.div`
  position: absolute;
  bottom: 2.7083vh;
  right: 0;
  width: 31.8519vw;
  height: 12.8125vh;
  min-width: 17.9166vh;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
`;

export const BlackRoad = getStyledSvg(RoadBlack);

export const ContentBlock = styled.div`
  height: 100%;
  width: 100%;
  
  @media screen and (min-width: 1000px){
    position: relative;
    max-width: 500px;
    margin: 0 auto;
  }
`;
