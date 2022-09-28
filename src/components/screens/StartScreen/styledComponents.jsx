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
`;

export const ManWrapper = styled.div`
  padding-top: 2.9687vh;
  width: 30vw;
  max-width: 314px;
  min-width: 16.3538vh;
  height: 22.135vh;
  max-height: 425px;
  margin-left: 3.5407vw;
  position: relative;
  z-index: 3;
  
  @media screen and (min-width: 1000px) {
    width: 150px;
    height: 203px;
    min-width: 150px;
  }
`;

export const Man = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
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

export const ThinkWrapper = styled.div`
  position: absolute;
  left: 27.3148vw;
  top: 17.9375vh;
  width: 63.4259vw;
  height: 9.53125vh;
  min-height: 55px;

  @media screen and (min-width: 1000px) {
    top: 10.1777%;
    left: 30.5%;
  }
`;

export const ThinkCloudStyled = getStyledSvg(ThinkingCloud);

export const ThinkText = styled(MediumText)`
  font-size: 9px;
  position: absolute;
  top: 31%;
  left: 11.8248%;
  @media screen and (max-width: 300px){
    left: 15%;
    font-size: 8px;
  }

  @media screen and (min-width: 1000px) {
    font-size: 12px;
    left: 5.5%;
  }
`;

export const SmallText = styled(LightText)`
  position: absolute;
  font-size: 7px;
  bottom: -20px;
  left: 11.8248%;

  @media screen and (min-width: 1000px) {
    font-size: 10px;
    bottom: -30px;
    left: 5.5%;
  }
`;

export const DescriptionWrapper = styled.div`
  position: relative;
  background-color: #F4F4F5;
  border-radius: 5px;
  margin: 0 9.2592vw;
  padding: 4.8229vh 9.2592vw;
  z-index: 10;

  @media screen and (min-width: 1000px) {
    margin: 0;
    padding: 70px;
  }
`;

export const ImportantWrapper = styled.div`
  display: flex;
  margin-top: 5.677vh;
`

export const ImportantSign = styled(ImportantMark)`
  height: 6.0416vh;
  max-height: 116px;
  width: 2.5vw;
  max-width: 27px;
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
  justify-content: right;
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
`