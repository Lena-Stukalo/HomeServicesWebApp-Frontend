import React from 'react';
import {
  CheckboxContainer,
  Checkmark,
  CheckboxInput,
  CheckmarkCircle,
} from './checkbox.styled';


export const FormCustomChecbox = ({
  value,
  name,
  onChange,
}) => (
  <CheckboxContainer>
    <CheckboxInput
      type="checkbox"
      value={value}
      name={name}
      onChange={onChange}
    />
    <Checkmark>
      <CheckmarkCircle />
    </Checkmark>
  </CheckboxContainer>
);
