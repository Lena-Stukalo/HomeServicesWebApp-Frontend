import React from "react";
import {
  CheckboxContainer,
  Checkmark,
  CheckboxInput,
  CheckmarkCircle,
} from "./checkbox.styled";

export const FilterCustomChecbox = ({
  value,
  name,
  onChange,
  checked,
  disabled,
}) => (
  <CheckboxContainer>
    <CheckboxInput
      type="checkbox"
      value={value}
      name={name}
      onChange={onChange}
      checked={checked}
      disabled={disabled}
    />
    <Checkmark>
      <CheckmarkCircle />
    </Checkmark>
  </CheckboxContainer>
);
