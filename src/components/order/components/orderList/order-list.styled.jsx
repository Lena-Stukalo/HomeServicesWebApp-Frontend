import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import * as theme from '../../../../theme';

export const List = styled('ul')`
  max-width: 400px;
  margin: 0 auto;
  display: block;
`;
export const Wraper = styled('li')`
  padding: 10px;
  margin-bottom: 30px;
`;
export const StyledNavLink = styled(NavLink)`
text-decoration: none;
color:${theme.COLORS.black};
`;
export const ButtonReload = styled.button`
 width: 100px;
  height: 30px;
  left: 20px;
  color: ${theme.COLORS.white};
  border: 1px solid ${theme.COLORS.blue};
  border-radius: 5px;
  background-color: ${theme.COLORS.blue};
  font-size: ${theme.FONTS.SIZES.m};
  text-align: center;

  &:hover {
    background: ${theme.COLORS.white};
    border: 1px solid ${theme.COLORS.blue};
    color: ${theme.COLORS.blue};
    transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }`;
