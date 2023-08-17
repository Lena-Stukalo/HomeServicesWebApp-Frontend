import React from "react";
import {
  AuthInput,
  Button,
  FormStyled,
  Label,
  Title,
} from "./auth-form.styled";

export const ForgotForm = ({ handleChange, handleSubmit, values }) => (
  <FormStyled onSubmit={handleSubmit}>
    <Title>Reset password</Title>
    <Label htmlFor="email">
      Email
      <AuthInput
        type="text"
        name="email"
        id="email"
        required
        onChange={handleChange}
        value={values.email}
      />
    </Label>
    <Button type="submit">Reset</Button>
  </FormStyled>
);
