
import styled from 'styled-components';
import * as theme from '../../../../theme';

export const Card = styled('div')`
  font-family: ${theme.FONTS.FAMILIES.normal};
  padding: 20px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  &:hover {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.17), 0px 4px 6px rgba(0, 0, 0, 0.1),
      1px 4px 8px rgba(0, 0, 0, 0.2);
  }
  @media (min-width: 481px) {
    padding: 20px 60px;
  }
`;
export const Title = styled('h2')`
  font-family: ${theme.FONTS.WEIGHTS.bold};
  font-size: ${theme.FONTS.SIZES.l};
  text-align: center;
  margin-bottom: 20px;
`;
export const Description = styled('p')`
  font-family: ${theme.FONTS.WEIGHTS.normal};
  font-size: ${theme.FONTS.SIZES.m};
`;
export const Wraper = styled('div')`
  margin-bottom: 10px;
`;
export const CheckBoxLabel = styled('label')`
  display: flex;
  position: relative;
  justify-content: space-between;
`;
export const Button = styled('button')`
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
  }
`;
export const ButtonWraper = styled('div')`
  display: flex;
  justify-content: space-around;
`;
export const CardText = styled('h3')`
  display: flex;
  justify-content: space-around;
`;
