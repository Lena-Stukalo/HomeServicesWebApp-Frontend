import styled from 'styled-components';
import * as theme from '../../../theme';

export const ButtonStyled = styled('button')`
  width: 100px;
  height: 30px;
  color: ${theme.COLORS.white};
  border: 1px solid ${theme.COLORS.blue};
  border-radius: 5px;
  background-color: ${theme.COLORS.blue};
  font-size: ${theme.FONTS.SIZES.m};
  text-align: center;
  display: block;
  margin-top: 10px;

  &:hover {
    background: ${theme.COLORS.white};
    border: 1px solid ${theme.COLORS.blue};
    color: ${theme.COLORS.blue};
    transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
