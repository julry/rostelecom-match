import styled from 'styled-components';
import { SimpleLeftArrow } from './svg/SimpleLeftArrow';
import { AddictiveText } from './styledTexts';

const ReturnWrapper = styled.div`
  position: absolute;
  right: 9.0667vw;
  top: 7.7961vh;
  display: flex;
  align-items: center;
`;

const ReturnIcon = styled(SimpleLeftArrow)`
  width: 16px;
  height: 8px;
  margin-right: 1vw;
  
  @media screen and (min-width: 1000px) {
    width: 24px;
    height: 12px;
  }
`;

const ReturnIconRight = styled(ReturnIcon)`
  transform: rotate(180deg);
  margin-right: 0;
  margin-left: 1vw;
`;

const ReturnText = styled(AddictiveText)`
  text-decoration: underline;
`;

export const ReturnBtn = (props) => {
    const {direction, onClick} = props;
    return (
        <ReturnWrapper className={props.className} onClick={onClick}>
            {direction === 'prev' && <ReturnIcon/>}
            <ReturnText>{props.children}</ReturnText>
            {direction === 'next' && <ReturnIconRight/>}
        </ReturnWrapper>
    );
};
