import React, { useContext } from "react";
// import LoginDetails from '../LoginPage/LoginDetails'
import { useNavigate } from "react-router-dom";
// import { loginReq } from "../Util/api";
import { myProvider } from "../App";
import LoginDetails from "./LoginDetails (1)";
const LoginPage = () => {

    const navigate = useNavigate();
    const { notification, setNotification, data ,setIsLoaded} = useContext(myProvider);
    const submit = (values) => {
        console.log("Submitted values:", values, data);
        setIsLoaded(false);
        let findObj = data?.find((e) => e?.userName === values?.userName && e?.password === values?.password);
        console.log(findObj);

        if (findObj) {
           
            if (findObj?.role === 'admin') {
                console.log("VALUES", values?.role);
                navigate("/header/admintimesheet")
                setNotification([
                    {
                        message: "Login success to Admin",
                        severity: "success",
                    },
                ]);
                setIsLoaded(true);
                removeNotification();
            }
            if (findObj?.role === 'user') {
                console.log("VALUES", values?.role);
                navigate("/header/timesheet");
                setNotification([
                    {
                        message: "Login success to User",
                        severity: "success",
                    },
                ]);
                setIsLoaded(true);
                removeNotification();
            }
            if (findObj?.role === 'mentee') {
                console.log("VALUES", values?.role);
                navigate("/header/mentee");
                setNotification([
                    {
                        message: "Login success to Mentee",
                        severity: "success",
                    },
                ]);
                setIsLoaded(true);
                removeNotification();
            }
        }
        else{
            // setNotification([
            //     {
            //         message: "Login Failed to Mentee",
            //         severity: "error",
            //     },
            // ]);
            setNotification([
                {
                    message: "Wrong Details",
                    severity: "error",
                },
            ]);
            setIsLoaded(true);
            removeNotification();
        }
        
        // setNotification([
        //     {
        //         message: "Registration Failed",
        //         severity: "success",
        //     },
        // ]);
        // loginReq(values).then((res)=>console.log("TRUE",res)).catch((err)=>console.log("EROE",err));
        // fetch("http://192.168.5.29:8080/TimeSheetAPI/user/login", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(values)
        // })
        // .then((res) => {
        //     if (!res.ok) {
        //         console.log("Error", res);
        //         throw new Error("Failed to login");
        //     }
        //     return res.json(); // Parse the JSON response and pass it to the next `.then()`
        // })
        // .then((data) => {
        //     // Assuming the response body has `token` and `user` fields
        //     localStorage.setItem("auth_Token", data.token);  // Store the auth token
        //     sessionStorage.setItem("user", JSON.stringify(data.user)); // Store the user object

        //     console.log("Response:", data);
        //     navigate("/header/timesheet"); // Navigate to the timesheet page
        // })
        // .catch((err) => {
        //     console.log("Error:", err); // Log any errors that occur
        // });

        // navigate("/header/timesheet")
        // console.log("Va",values)
        // alert("HIII")
    }
    const removeNotification = () => {
        setTimeout(() => {
            setNotification([]);
        }, 1000);
    };
    return (
        <>
            <div style={{ display: 'flex',backgroundColor: "#DDEFD6", }}>
                <div style={{ width: "50vw", height: "100vh" }}>
                    <img src="https://img.freepik.com/free-vector/happy-young-people_24908-56819.jpg?ga=GA1.1.349453397.1742185594&semt=ais_hybrid"
                        alt="Image" style={{ width: "50vw", height: "99.5vh" }} />
                </div>
                <div style={{ width: "50vw", height: "99.5vh",}}>
                <LoginDetails submit={submit} />
                    {/* <div style={{ marginTop: "15rem" }} >
                     
                    </div> */}
                </div>
            </div>

        </>
    )
}
export default LoginPage;