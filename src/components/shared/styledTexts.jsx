import styled from 'styled-components';

export const BoldText = styled.p`
  font-weight: 700;
`;

export const MediumText = styled.p`
  font-weight: 500;
`;

export const LightText = styled.p`
  font-weight: 300;
`;

export const RegularText = styled.p`
  font-weight: 400;
`;

export const Title = styled(BoldText)`
  font-size: 17px;
  
  @media screen and (max-width: 330px){
    font-size: 14px;
  }

  @media screen and (min-width: 768px) {
    font-size: 19px;
  }
  
  @media screen and (min-width: 1000px) {
    font-size: 20px;
  }
`;

export const Description = styled(MediumText)`
  font-size: 16px;
  
  @media screen and (max-width: 320px){
    font-size: 14px;
  }

  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
  
  @media screen and (min-width: 1000px) {
    font-size: 18px;
  }
`;

export const AddictiveText = styled(MediumText)`
  font-size: 11px;
  
  @media screen and (max-width: 330px){
    font-size: 10px;
  }

  @media screen and (min-width: 350px) and (min-height: 700px) {
    font-size: 14px;
  }
  
  @media screen and (min-width: 1000px) {
    font-size: 14px;
  }

  @media screen and (min-width: 768px) {
    font-size: 13px;
  }
`;

export const ColoredText = styled.span`
    color: ${({color}) => color};
`;


export const RegularDescription = styled(RegularText)`
  font-size: 11px;

  @media screen and (max-width: 330px){
    font-size: 9px;
  }

  @media screen and (min-width: 350px) and (min-height: 700px) {
    font-size: 12px;
  }
  
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
  
  @media screen and (min-width: 1000px) {
    font-size: 16px;
  }
`;

export const SmallLightText = styled(LightText)`
  font-size: 12px;

  @media screen and (max-width: 330px) {
    font-size: 9px;
  }

  @media screen and (min-width: 768px) {
    font-size: 13px;
  }

  @media screen and (min-width: 1000px) {
    font-size: 14px;
  }
`;
