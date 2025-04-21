import React, { useContext } from "react";
import { Field, Form, ErrorMessage, withFormik } from "formik";
import * as Yup from "yup";
import { Button, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { myProvider } from "../App";

// Validation Schema with Yup
const validationSchema = Yup.object({
    userName: Yup.string()
        .min(3, "Username must be at least 3 characters long")
        .max(20, "Username must be less than 20 characters")
        .required("Username is required"),
    password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    firstName: Yup.string()
        .required("First name is required"),
    lastName: Yup.string()
        .required("Last name is required"),
    mobile: Yup.string()
        .required("Mobile No is required"),
    age: Yup.string()
        .required("Age is required"),
    gender: Yup.string()
        .required("Gender is required"),
    course: Yup.string()
        .required("Course is required"),
});

const FormData = ({ handleSubmit, values, errors, touched, setFieldValue,handleCloseDialog }) => {

    const {data,setNotification} = useContext(myProvider);

     const checkinguser=(e)=>{
        // console.log("Data",data,e.target.value);
        let val = e.target.value;
        let a = data?.find((e)=>e.userName===val);
        if(a){
            // alert("Allready existing userName");
            setNotification([
                {
                    message: "User is already Existed",
                    severity: "error",
                },
            ]);
            removeNotification();
        }
        else{
            setNotification([
                {
                    message: "user Is Granted",
                    severity: "success",
                },
            ]);
            removeNotification();
        }
    }
    const removeNotification = () => {
        setTimeout(() => {
            setNotification([]);
        }, 5000);
    };
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <div>
                    <Field
                        name="userName"
                        label="UserName"
                        variant="outlined"
                        value={values?.userName}
                        as={TextField}
                        style={{ width: "10vw", margin: "2rem" }}
                        error={touched.userName && !!errors.userName}
                        helperText={touched.userName && errors.userName}
                        onBlur={(e)=>checkinguser(e)}
                        required
                    />

                    <Field
                        name="password"
                        label="Password"
                        required
                        variant="outlined"
                        type="password"
                        value={values?.password}  
                        as={TextField}
                        style={{ width: "10vw", margin: "2rem" }}
                        error={touched.password && !!errors.password}
                        helperText={touched.password && errors.password}
                    />
                  
                    <Field
                        name="firstName"
                        label="First Name"
                        variant="outlined"
                        value={values?.firstName}  
                        as={TextField}
                        style={{ width: "10vw", margin: "2rem" }}
                        error={touched.firstName && !!errors.firstName}
                        helperText={touched.firstName && errors.firstName}
                        required
                    />

                    <Field
                        name="lastName"
                        label="Last Name"
                        variant="outlined"
                        as={TextField}
                        style={{ width: "10vw", margin: "2rem" }}
                        error={touched.lastName && !!errors.lastName}
                        helperText={touched.lastName && errors.lastName}
                        required
                    />

                    <Field
                        name="mobile"
                        label="Mobile No"
                        variant="outlined"
                        as={TextField}
                        style={{ width: "10vw", margin: "2rem" }}
                        error={touched.mobile && !!errors.mobile}
                        helperText={touched.mobile && errors.mobile}
                        required
                    />
                    <Field
                        name="age"
                        label="Age"
                        variant="outlined"
                        as={TextField}
                        style={{ width: "10vw", margin: "2rem" }}
                        error={touched.age && !!errors.age}
                        helperText={touched.age && errors.age}
                        required
                    />
                    <div style={{ margin: "2rem" }}>
                        <InputLabel id="gender" required>Gender</InputLabel>
                        <Select
                            name="gender"
                            labelId="gender"
                            value={values.gender}
                            onChange={(e) => setFieldValue("gender", e.target.value)}
                            label="Gender"
                            style={{ width: "10vw" }}
                            error={touched.gender && !!errors.gender}
                            helperText={touched.gender && errors.gender}
                        >
                            <MenuItem value="male">Male</MenuItem>
                            <MenuItem value="female">Female</MenuItem>
                        </Select>
                    </div>

                    <div style={{ margin: "2rem" }}>
                        <InputLabel id="course" required>Course</InputLabel>
                        <Select
                            name="course"
                            labelId="course"
                            value={values.course}
                            onChange={(e) => setFieldValue("course", e.target.value)}
                            label="Course"
                            style={{ width: "20vw" }}
                            error={touched.course && !!errors.course}
                            helperText={touched.course && errors.course}
                        >
                            <MenuItem value="FullStackWithJava">FullStackWithJava</MenuItem>
                            <MenuItem value="FullStackWithPython">FullStackWithPython</MenuItem>
                            <MenuItem value="FrontEnd">FrontEnd</MenuItem>
                            <MenuItem value="BackEnd">BackEnd</MenuItem>
                        </Select>
                    </div>

                </div>
                <Button onClick={handleCloseDialog} variant="contained" style={{ float: "left" }}>
                    CANCEL
                </Button>
                <Button type="submit" variant="contained" style={{ float: "right" }}>
                    SUBMIT
                </Button>
            </Form>
        </div>
    );
};

// withFormik HOC
const FormDetails = withFormik({
    mapPropsToValues: ({ obj }) => ({
        userName: obj?.userName || "",
        password: obj?.password || "", 
        firstName: obj?.firstName || "",
        lastName: obj?.lastName || "",
        mobile: obj?.mobile || "",
        age: obj?.age || "",
        gender: obj?.gender || "",
        course: obj?.course || "",
        role: obj?.role || "user",  
    }),

    validationSchema, // Use the validation schema here

    handleSubmit: (values, { props }) => {
        const { submit } = props;
        submit(values);
        console.log("Submitted values:", values);
    },
})(FormData);

export default FormDetails;
