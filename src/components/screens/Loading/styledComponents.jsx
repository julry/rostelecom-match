import styled, { keyframes } from 'styled-components';
import { colors } from '../../../constants/colors';
import { AddictiveText, LightText, RegularText, SmallLightText, Title } from '../../shared/styledTexts';
import { LoadingIcon } from '../../shared/svg/LoadingIcon';
import { Button } from '../../shared/Button';

export const StyledCard = styled.div`
  position: relative;
  height: 35.9375%;
  padding: 7%;
  min-height: 240px;
  width: 81.4814vw;
  max-width: 880px;
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid ${colors.purple};
  @media screen and (max-height: 550px) {
    min-height: 190px;
  }
`;

export const Wrapper = styled.div`
  padding-top: 30.7083%;
  height: 100%;

  @media screen and (max-height: 550px) {
    padding-top: 28.7083%;
  }
`;

export const Label = styled(RegularText)`
  font-size: 11px;
  color: ${({isError}) => isError ? 'red' : '#797E8B'};

  @media screen and (min-width: 1000px) {
    font-size: 15px;
  }
`;

export const StyledTitle = styled(Title)`
  font-size: 16px;
  margin-left: 9.2592%;
`;

export const Form = styled.div`
  position: relative;
  z-index: 3;
  padding: 5.2083% 0;

  @media screen and (min-width: 1000px) {
    display: flex;
    height: 100%;
    flex-direction: column;
  }
`;

export const Input = styled.input`
  border-radius: 5px;
  touch-action: none;
  border: none;
  padding-right: 5px;
  font-size: 18px;
  background: inherit;
  width: 100%;
  font-family: 'RostelecomBasis', Tahoma, Geneva, sans-serif;

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 330px) {
    font-size: 15px;
  }
`;

export const InputCheckboxStyled = styled.input`
  display: none;
`;

export const RadioIconStyled = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  border: 1px solid #B5B7C0;
  border-radius: 2px;
  margin-right: 10px;

  @media screen and (min-width: 1000px) {
    width: 24px;
    height: 24px;
  }
`;

export const LabelStyled = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-top: 10px;

  @media screen and (min-width: 1000px) {
    margin-top: auto;
  }

  & ${InputCheckboxStyled}:checked + ${RadioIconStyled}:after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 10px;
    height: 10px;
    border-radius: 1px;
    background-color: ${colors.orange};

    @media screen and (min-width: 1000px) {
      width: 18px;
      height: 18px;
    }
  }
`;

export const TextWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  min-height: 100%;
`;

export const TextStyled = styled(LightText)`
  font-family: 'LabGrotesque', serif;
  color: #797E8B;
  font-size: 7px;

  @media screen and (min-width: 1000px) {
    font-size: 12px;
  }
`;

export const CardWrapper = styled.div`
  margin: 5.8125% 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 35.9375%;
  min-height: 240px;

  @media screen and (max-height: 550px) {
    min-height: 190px;
  }
`;

export const PersonalDataLink = styled.span`
  border-bottom: 1px solid #797E8B;
`;

export const DescriptionStyled = styled(RegularText)`
  font-size: 11px;

  @media screen and (max-width: 330px) {
    font-size: 9px;
  }

  @media screen and (min-width: 1000px) {
    font-size: 16px;
  }
`;

export const InputWrapper = styled.div`
  padding: 10px;
  border-radius: 10px;
  background: #F4F4F5;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingStyled = styled(LoadingIcon)`
  min-width: 20px;
  min-height: 20px;
  width: 8.7037vw;
  max-width: 60px;
  height: 8.7037vw;
  max-height: 60px;
  transition: all 0.5s ease-in;
  animation: ${rotate} 2.5s infinite linear;
`;

export const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: calc(8.7037vw + 210px);
`;

export const LoadingText = styled(AddictiveText)`
  max-width: 200px;
  margin-left: 10px;

  @media screen and (min-width: 1000px) {
    max-width: 400px;
    margin-left: 20px;
  }
`;

const sending = keyframes`
  0% {
    scale: 1;
  }
  50% {
    scale: 1.06;
  }
  100% {
    scale: 1;
  }
`;

export const SendBtn = styled(Button)`
  width: 100%;
  max-width: 307px;
  min-width: 150px;
  background-color: ${({disabled}) => disabled ? '#c26546' : colors.orange};
  transition: background-color 0.5s;
  transform-origin: 50% 50%;
  animation: ${sending} ${({animation}) => animation ? '1.5s' : 0} infinite cubic-bezier(0.785, 0.135, 0.15, 0.86);
`;

export const SkipBtn = styled(SmallLightText)`
  margin-top: 10px;
  text-decoration: underline;
`;

export const BtnsBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 9.9956%;
`;
