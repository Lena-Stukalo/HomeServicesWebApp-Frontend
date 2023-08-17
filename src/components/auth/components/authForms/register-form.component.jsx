import React from "react";
import {
  AuthInput,
  Button,
  FormStyled,
  Label,
  Title,
} from "./auth-form.styled";

export const RegisterForm = ({ handleChange, handleSubmit, values }) => (
  <FormStyled onSubmit={handleSubmit}>
    <Title>Sign In</Title>
    <Label htmlFor="name">
      Name
      <AuthInput
        type="text"
        name="name"
        id="name"
        required
        onChange={handleChange}
        value={values.name}
      />
    </Label>
    <Label htmlFor="email">
      E-mail
      <AuthInput
        type="text"
        name="email"
        id="email"
        required
        onChange={handleChange}
        value={values.email}
      />
    </Label>
    <Label htmlFor="password">
      Password
      <AuthInput
        type="password"
        name="password"
        id="password"
        required
        onChange={handleChange}
        value={values.password}
      />
    </Label>
    <Button type="submit">Register</Button>
  </FormStyled>
);
