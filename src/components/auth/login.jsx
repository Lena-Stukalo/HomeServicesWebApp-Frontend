import React from "react";
import { useFormik } from "formik";
import { AuthContainer, Link, LinkWraper } from "./index.styled";
import { LoginForm } from "./components/authForms/login-form.component";
import { useDispatch } from "react-redux";
import authOperation from "../../redux/auth/authOperations";

const LoginPageContainer = () => {
  const dispatch = useDispatch();
  const handeleSubmit = async (values) => {
    dispatch(authOperation.login(values));
  };
  const formValues = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues: formValues,
    onSubmit: handeleSubmit,
  });
  return (
    <AuthContainer>
      <LoginForm
        handleSubmit={formik.handleSubmit}
        values={formik.values}
        handleChange={formik.handleChange}
      />
      <LinkWraper>
        <Link to="/register">Go to SignUp</Link>
        <Link to="/forgot">Forgot password</Link>
      </LinkWraper>
    </AuthContainer>
  );
};
export default LoginPageContainer;
