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
`;

export const Description = styled(MediumText)`
  font-size: 16px;
`;

export const AddictiveText = styled(MediumText)`
  font-size: 12px;
`;

export const ColoredText = styled.span`
    color: ${({color}) => color};
`;


export const RegularDescription = styled(RegularText)`
  font-size: 12px;
`;

