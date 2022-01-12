import styled from 'styled-components';

import {
  btnBgColor,
  btnColor,
  btnHoverColor,
  btnHoverBg,
} from '../../constants/styleVariables';

const Button = styled.button`
  background-color: ${btnBgColor};
  border: none;
  border-radius: 8px;
  color: ${btnColor};
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;

  &: hover {
    background-color: ${btnHoverBg};
    color: ${btnHoverColor};
  } ;
`;

export default Button;
