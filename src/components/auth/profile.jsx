import React from "react";
import { useFormik } from "formik";
import {
  AuthContainer,
  AuthInput,
  Button,
  FormStyled,
  Label,
  Link,
  Title,
  LinkWraper,
} from "./index.styled";
import { useDispatch } from "react-redux";
import authOperation from "../../redux/auth/authOperations";

const ProfilePageContainer = () => {
  const dispatch = useDispatch();
  const handleLogOut = async () => {
    dispatch(authOperation.logout());
  };
  const handeleSubmit = (values) => {
    dispatch(authOperation.changePass(values));
  };
  const formValues = {
    password: "",
  };

  const formik = useFormik({
    initialValues: formValues,
    onSubmit: handeleSubmit,
  });
  return (
    <AuthContainer>
      <FormStyled onSubmit={formik.handleSubmit}>
        <Title>Change password</Title>
        <Label htmlFor="password">
          New Password
          <AuthInput
            type="password"
            name="password"
            id="password"
            required
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </Label>
        <Button type="submit">Change</Button>
      </FormStyled>
      <LinkWraper>
        <Button onClick={handleLogOut}>LogOut</Button>
        <Link to="/orders">Back to list</Link>
      </LinkWraper>
    </AuthContainer>
  );
};
export default ProfilePageContainer;
