import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

export default function Register() {
  const [apiError, setApiError] = useState(null);
  const navigate = useNavigate();

  const initialValues = {
    userName: "", 
    email: "",
    phone: "",
    password: "",
    confirmPassword: "", 
  };

  const RegisterSchema = Yup.object().shape({
    userName: Yup.string() 
      .min(2, "Too Short!")
      .max(15, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    phone: Yup.string()
      .matches(/^(01[0125]\d{8}|02\d{8})$/, "Invalid number")
      .required("Required"),
    password: Yup.string()
      .matches(/^[A-Z][a-z0-9]{3,8}$/, "Invalid password (must start with a capital letter and be 4-9 characters long)")
      .required("Required"),
    confirmPassword: Yup.string() 
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Required"),
  });

  async function sendDataToAPI(values) {
    try {
      setApiError(null);
      let { data } = await axios.post(`http://localhost:3000/auth/signUp`, values);
      console.log(data);
      if (data.message === "welcome to register") {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      setApiError(error.response.data.msg);
    }
  }

  const formikRegister = useFormik({
    initialValues,
    validationSchema: RegisterSchema,
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
      <form onSubmit={formikRegister.handleSubmit}>
        <div className="form-floating mb-3">
          <input
            name="userName" 
            type="text"
            className="form-control"
            id="floatingName"
            placeholder=""
            value={formikRegister.values.userName} 
            onChange={formikRegister.handleChange}
            onBlur={formikRegister.handleBlur}
          />
          <label htmlFor="floatingInput">User Name</label>
          {formikRegister.errors.userName && formikRegister.touched.userName ? ( 
            <div className="alert alert-danger mt-2" role="alert">
              {formikRegister.errors.userName} {/* Changed from `name` to `userName` */}
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="form-floating mb-3">
          <input
            name="email"
            type="email"
            className="form-control"
            id="floatingEmail"
            placeholder=""
            value={formikRegister.values.email}
            onChange={formikRegister.handleChange}
            onBlur={formikRegister.handleBlur}
          />
          <label htmlFor="floatingInput">Email address</label>
          {formikRegister.errors.email && formikRegister.touched.email ? (
            <div className="alert alert-danger mt-2" role="alert">
              {formikRegister.errors.email}
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="form-floating mb-3">
          <input
            name="phone"
            type="text"
            className="form-control"
            id="floatingNumber"
            placeholder=""
            value={formikRegister.values.phone}
            onChange={formikRegister.handleChange}
            onBlur={formikRegister.handleBlur}
          />
          <label htmlFor="floatingInput">Phone Number</label>
          {formikRegister.errors.phone && formikRegister.touched.phone ? (
            <div className="alert alert-danger mt-2" role="alert">
              {formikRegister.errors.phone}
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
            value={formikRegister.values.password}
            onChange={formikRegister.handleChange}
            onBlur={formikRegister.handleBlur}
          />
          <label htmlFor="floatingPassword">Password</label>
          {formikRegister.errors.password && formikRegister.touched.password ? (
            <div className="alert alert-danger mt-2" role="alert">
              {formikRegister.errors.password}
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="form-floating mb-3">
          <input
            name="confirmPassword" 
            type="password"
            className="form-control"
            id="floatingConfirmPassword"
            placeholder=""
            value={formikRegister.values.confirmPassword} 
            onChange={formikRegister.handleChange}
            onBlur={formikRegister.handleBlur}
          />
          <label htmlFor="floatingConfirmPassword">Confirm Password</label>
          {formikRegister.errors.confirmPassword && formikRegister.touched.confirmPassword ? ( 
            <div className="alert alert-danger mt-2" role="alert">
              {formikRegister.errors.confirmPassword}
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