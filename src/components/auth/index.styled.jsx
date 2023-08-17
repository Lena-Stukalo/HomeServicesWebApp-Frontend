import styled from "styled-components";
import { NavLink } from "react-router-dom";
import * as theme from "../../theme";

export const AuthContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 40px;
  @media (min-width: 600px) {
    width: 50%;
  }
`;

export const AuthInput = styled.input`
  display: block;
  width: 100%;
  height: 30px;
  border: 2px solid ${theme.COLORS.gray};
  box-sizing: border-box;
  border-radius: 4px;
  margin-bottom: 10px;
  padding: 12px 20px;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);
  color: ${theme.COLORS.black};
  font-size: ${theme.FONTS.SIZES.s};
`;

export const Label = styled.label`
  display: block;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.01em;
  color: ${theme.COLORS.darckGray};
  margin-bottom: 4px;
  width: 100%;
`;

export const FormStyled = styled.form`
  padding-bottom: 0;
  margin-bottom: 20px;
  font-family: ${theme.FONTS.WEIGHTS.normal};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Button = styled.button`
  width: 100px;
  height: 30px;
  left: 20px;
  color: ${theme.COLORS.white};
  border: 1px solid ${theme.COLORS.blue};
  border-radius: 5px;
  background-color: ${theme.COLORS.blue};
  font-size: ${theme.FONTS.SIZES.s};
  text-align: center;

  &:hover {
    background: ${theme.COLORS.white};
    border: 1px solid ${theme.COLORS.blue};
    color: ${theme.COLORS.blue};
    transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
export const Title = styled.h3`
  font-family: ${theme.FONTS.WEIGHTS.bold};
  font-size: ${theme.FONTS.SIZES.m};
  text-align: center;
  margin-bottom: 20px;
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
  font-size: ${theme.FONTS.SIZES.s};
  text-decoration: none;

  &:hover {
    background: ${theme.COLORS.white};
    border: 1px solid ${theme.COLORS.blue};
    color: ${theme.COLORS.blue};
    transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
export const LinkWraper = styled("div")`
  display: flex;
  justify-content: space-around;
`;
