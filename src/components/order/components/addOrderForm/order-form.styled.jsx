import styled from "styled-components";
import * as theme from "../../../../theme";

export const ModalWrapper = styled.div`
  position: relative;
`;

export const ModalInput = styled.input`
  display: block;
  width: 100%;
  height: 30px;
  border: 1px solid ${theme.COLORS.gray};
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
`;
export const ChecboxLabel = styled.label`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.01em;
  color: ${theme.COLORS.darckGray};
  margin-bottom: 20px;
`;

export const ModalTextarea = styled.input`
  display: block;
  resize: none;
  width: 100%;
  height: 60px;
  border: 1px solid ${theme.COLORS.gray};
  box-sizing: border-box;
  border-radius: 4px;
  padding: 12px 16px;
  color: ${theme.COLORS.black};
  margin-bottom: 20px;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);
  font-size: ${theme.FONTS.SIZES.s};

  &::placeholder {
    font-size: ${theme.FONTS.SIZES.s};
    line-height: 1.17;
    letter-spacing: 0.01em;
    color: ${theme.COLORS.darckGray};
  }
`;

export const FormStyled = styled.form`
  padding-bottom: 0;
  font-family: ${theme.FONTS.WEIGHTS.normal};
  width: 70%;
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
  margin: 0 auto;

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
