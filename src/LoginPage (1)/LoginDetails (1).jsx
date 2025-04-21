import React from "react";
import { Form, ErrorMessage, withFormik } from "formik";
import * as Yup from "yup";
import './LoginPage (1).css';
import { TextField, Button } from "@mui/material";

// Validation Schema with Yup
const validationSchema = Yup.object({
  userName: Yup.string()
    .min(3, "Username must be at least 3 characters long")
    .max(20, "Username must be less than 20 characters")
    .required("Username is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const LoginPageDetails = ({ values, handleChange, handleSubmit, errors, touched, setFieldValue }) => {
  return (
    <>
      <div className="login-container" style={{marginTop:"15rem"}}>

        <div style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
          <Form onSubmit={handleSubmit}>
            <h1 style={{ textAlign: 'center', color: "blue" }}>Login</h1>

            <TextField
              type="text"
              label="UserName"
              id="userName"
              name="userName"
              value={values.userName}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              error={touched.userName && !!errors.userName}
              helperText={touched.userName && errors.userName}
              style={{ width: "18vw", margin: "2rem" }}
              required
            /> <br />


            <TextField
              label="pasword"
              type="password"
              id="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              error={touched.password && !!errors.password}
              helperText={touched.password && errors.password}
              style={{ width: "18vw", margin: "2rem" }}
              required
            />
            <div style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
              <Button type="submit" variant="contained" color="primary">
                Login
              </Button>

            </div>
          </Form>
        </div>
        <br />


      </div>
    </>

  );
};

// withFormik HOC
const LoginDetails = withFormik({
  mapPropsToValues: () => ({
    userName: "",
    password: "",
  }),

  validationSchema: validationSchema,

  handleSubmit: (values, { props }) => {
    // Handle login submission here
    const { submit } = props;
    submit(values);
  },
})(LoginPageDetails);

export default LoginDetails;
