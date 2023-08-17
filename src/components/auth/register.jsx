import React from "react";
import { useFormik } from "formik";
import { AuthContainer, Link, LinkWraper } from "./index.styled";
import { RegisterForm } from "./components/authForms/register-form.component";
import { useDispatch } from "react-redux";
import authOperation from "../../redux/auth/authOperations";

const RegisterPageContainer = () => {
  const dispatch = useDispatch();
  const handeleSubmit = async (values) => {
    dispatch(authOperation.register(values));
  };
  const formValues = {
    name: "",
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues: formValues,
    onSubmit: handeleSubmit,
  });
  return (
    <AuthContainer>
      <RegisterForm
        handleSubmit={formik.handleSubmit}
        values={formik.values}
        handleChange={formik.handleChange}
      />
      <LinkWraper>
        <Link to="/login">Go to SignIn</Link>
        <Link to="/forgot">Forgot password</Link>
      </LinkWraper>
    </AuthContainer>
  );
};
export default RegisterPageContainer;
