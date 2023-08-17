import React from "react";
import { useFormik } from "formik";
import { AuthContainer, Link } from "./index.styled";
import { ForgotForm } from "./components/authForms/forgot-form.component";
import { useDispatch } from "react-redux";
import authOperation from "../../redux/auth/authOperations";

const ForgotPageContainer = () => {
  const dispatch = useDispatch();
  const handeleSubmit = async (values) => {
    dispatch(authOperation.resetPass(values));
  };
  const formValues = {
    email: "",
  };

  const formik = useFormik({
    initialValues: formValues,
    onSubmit: handeleSubmit,
  });
  return (
    <AuthContainer>
      <ForgotForm
        handleSubmit={formik.handleSubmit}
        values={formik.values}
        handleChange={formik.handleChange}
      />
      <Link to="/login">Back to Login</Link>
    </AuthContainer>
  );
};
export default ForgotPageContainer;
