import React from "react";
import {
  CheckboxContainer,
  CheckmarkCircle,
  CheckmarkCard,
  CheckboxInputCard,
} from "./checkbox.styled";

export const CustomCheckbox = ({ isTrue, isAble, name, onChange }) => (
  <CheckboxContainer>
    <CheckboxInputCard
      type="checkbox"
      checked={isTrue}
      disabled={!isAble}
      name={name}
      value={isTrue}
      onChange={onChange}
    />
    <CheckmarkCard>
      <CheckmarkCircle />
    </CheckmarkCard>
  </CheckboxContainer>
);
