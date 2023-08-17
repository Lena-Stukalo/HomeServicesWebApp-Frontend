
import React from 'react';
import { ButtonStyled } from './button.styled';


export const Button = ({ text, onClick, type, disabled }) => (
  <ButtonStyled onClick={onClick} type={type} disabled={disabled}>{text}</ButtonStyled>
);
