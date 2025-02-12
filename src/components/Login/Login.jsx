import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

export default function Login() {
  const [apiError, setApiError] = useState(null);
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .matches(/^[A-Z][a-z0-9]{3,8}$/, "Invalid password (must start with a capital letter and be 4-9 characters long)")
      .required("Required"),
  });

  async function sendDataToAPI(values) {
    try {
      setApiError(null);
      let { data } = await axios.post(`http://localhost:3000/auth/login`, values);
      console.log(data);
      if (data.message === "welcome to sara7a app") {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      setApiError(error.response.data.message);
    }
  }

  const formikLogin = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    onSubmit: sendDataToAPI,
  });

  return (
    <>
      <h2 className="my-3">Register:</h2>
      {apiError ? (
        <div className="alert alert-danger mb-2" role="alert">
          {apiError}
        </div>
      ) : (
        ""
      )}
      <form onSubmit={formikLogin.handleSubmit}>
        <div className="form-floating mb-3">
          <input
            name="email"
            type="email"
            className="form-control"
            id="floatingEmail"
            placeholder=""
            value={formikLogin.values.email}
            onChange={formikLogin.handleChange}
            onBlur={formikLogin.handleBlur}
          />
          <label htmlFor="floatingInput">Email address</label>
          {formikLogin.errors.email && formikLogin.touched.email ? (
            <div className="alert alert-danger mt-2" role="alert">
              {formikLogin.errors.email}
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="form-floating mb-3">
          <input
            name="password"
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder=""
            value={formikLogin.values.password}
            onChange={formikLogin.handleChange}
            onBlur={formikLogin.handleBlur}
          />
          <label htmlFor="floatingPassword">Password</label>
          {formikLogin.errors.password && formikLogin.touched.password ? (
            <div className="alert alert-danger mt-2" role="alert">
              {formikLogin.errors.password}
            </div>
          ) : (
            ""
          )}
        </div>
        <button type="submit" className="btn btn-outline-success">
          Register
        </button>
      </form>
    </>
  );
}