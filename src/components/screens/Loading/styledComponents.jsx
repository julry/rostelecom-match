import styled, { keyframes } from 'styled-components';
import { SwipeCard } from '../../shared/SwipeCard';
import { colors } from '../../../constants/colors';
import { AddictiveText, Description, LightText, RegularText, Title } from '../../shared/styledTexts';
import { LoadingIcon } from '../../shared/svg/LoadingIcon';

export const StyledCard = styled(SwipeCard)`
  height: 35.9375vh;
  padding: 3.2vh;
  border-color: ${colors.purple}
`;

export const Wrapper = styled.div`
  padding-top: 14.7083vh;
`;

export const Label = styled(RegularText)`
  font-size: 11px;
  color: ${({isError}) => isError ? 'red' : '#797E8B'}
`
export const StyledTitle = styled(Title)`
    margin-left: 9.2592vw;
`;

export const Form = styled.form`
    position: relative;
    z-index: 3;
`;

export const Input = styled.input`
    border-radius: 5px;
    touch-action: none;
    border: none;
    padding-right: 5px;
    font-size: 15px;
    background: inherit;
    width:100%;
    font-family: 'RostelecomBasis', Tahoma, Geneva, sans-serif;
    
    &:focus{ 
        outline: none;
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
`;

export const LabelStyled = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-top: 10px;
  
  & ${InputCheckboxStyled}:checked + ${RadioIconStyled}:after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 10px;
    height: 10px;
    border-radius: 1px;
    background-color: ${colors.orange};
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
  font-size: 9px;
`;

export const SubmitBtn = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;

export const CardWrapper = styled.div`
  margin: 5.8125vh 0 4.1666vh;
  display: flex;
  justify-content: center;
  height: 35.9375vh;
`;

export const PersonalDataLink = styled.span`
  border-bottom: 1px solid #797E8B;
`;

export const DescriptionStyled = styled(RegularText)`
    font-size: 13px;
`

export const InputWrapper = styled.div`
  padding: 10px;
  margin-top: 5.2083vh;
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
`

export const LoadingStyled = styled(LoadingIcon)`
  min-width: 20px;
  min-height: 20px;
  width: 8.7037vw;
  height: 8.7037vw;
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
`;