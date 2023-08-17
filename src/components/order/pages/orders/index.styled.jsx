
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import * as theme from '../../../../theme';

export const OrdersContainer = styled('div')`
  margin: 0 auto;
  padding: 40px;
`;
export const Link = styled(NavLink)`
display: flex;
justify-content: center;
align-items: center;
  width: 100px;
  height: 30px;
  color: ${theme.COLORS.white};
  border: 1px solid ${theme.COLORS.blue};
  border-radius: 5px;
  background-color: ${theme.COLORS.blue};
  font-size: ${theme.FONTS.SIZES.m};
  text-decoration: none;
  margin-top: 10px;

  &:hover {
    background: ${theme.COLORS.white};
    border: 1px solid ${theme.COLORS.blue};
    color: ${theme.COLORS.blue};
    transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
export const LinkWraper = styled('div')`
  display: flex;
  justify-content: space-around;
`;
