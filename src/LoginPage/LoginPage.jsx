import React, { useContext, useEffect, useRef, useState } from "react";
import LoginDetails from "./LoginDetails";
import Swal from 'sweetalert2';
import './LoginPage.css'
import { useNavigate } from "react-router-dom";
import { MyContext } from "../App";
import RegisterDetails from "./RegisterDetails";
import axios from "axios";
const LoginPage = () => {
    const [open, setOpen] = useState(true);
    const [loginDetails, setLoginDetails] = useState([]);
    const { setUserDetails } = useContext(MyContext);
    const useData = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        // alert("HIIII")
        axios.get("http://localhost:8081/details/getalldetails")
            .then(response => {
                console.log("Response:", response.data);
                setLoginDetails(response.data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, [open]);

    const userDetails = [
        { id: 1, userName: "venu", password: "venu123", name: 'VenuGopal' },
        { id: 2, userName: "sai", password: "sai123", name: "saiSurya" },
        { id: 3, userName: "kiran", password: "kiran123", name: "KiranKumar" },
        { id: 4, userName: "sandeep", password: "sandeep123", name: "sandeepReddy" },
        { id: 5, userName: "sasi", password: "sasi123", name: "sasiKanth" },
        { id: 6, userName: "mahesh", password: "mahesh123", name: "Mahesh" },
    ];
    const handle = (e) => {
        useData.current = { ...useData.current, [e.target.name]: e.target.value, }
    }
    const checking = () => {
        navigate('/home/home');
        if (useData?.current?.email && useData?.current?.password) {
            
            const is = loginDetails?.find((e) => e.email == useData.current.email && e.password == useData.current.password);
            setUserDetails(is);
            if (is) {
                navigate('/home/home');
                Swal.fire({
                    title: 'Success!',
                    text: 'Login Success!',
                    icon: 'success',
                    confirmButtonText: 'OK',
                    confirmButtonColor: '#3085d6',
                });
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: 'Wrong Details',
                    type: 'error',
                    confirmButtonText: 'Cool'
                })
            }
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Enter All Details',
                type: 'error',
                confirmButtonText: 'Cool'
            })
        }

        // if (is) {
        //     navigate('/home/home');
        //     // alert("succes")
        //     Swal.fire({
        //         title:   'Success!',
        //         text: 'Login Success!',
        //         icon: 'success',
        //         confirmButtonText: 'OK',
        //         confirmButtonColor: '#3085d6',
        //     });
        // }
    }
    return (
        <>
            <div
                style={{
                    // backgroundColor:"GrayText",
                    backgroundImage: `url('https://png.pngtree.com/back_origin_pic/05/09/81/ef049ecdc7d748cc7a412f3cc5e66742.jpg')`, // Replace with your image URL
                    backgroundSize: 'cover',        // Ensures the image covers the entire screen
                    backgroundPosition: 'center',   // Centers the image
                    backgroundRepeat: 'no-repeat',  // Prevents image repetition
                    height: '100vh',                // Full viewport height
                    display: 'flex',                // Enables flexbox for centering the card
                    justifyContent: 'center',       // Centers horizontally
                    alignItems: 'center',           // Centers vertically
                    width: "98%",
                    height: "93vh"
                }}
            >
                <div
                    style={{
                        width: '300px',
                        height: "auto",              // Card width
                        // padding: '20px',              // Card padding
                        backgroundColor: 'white',     // Card background color
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Shadow for card
                        borderRadius: '10px',         // Rounded corners
                        textAlign: 'center',          // Center content inside the card
                    }}
                >

                    <LoginDetails handle={handle} checking={checking} setOpen={setOpen} open={open} />
                </div>
            </div>
        </>
    )
}

export default LoginPage;


// if (useData?.current.userName && useData?.current.password) {
//     const is = userDetails?.find((e) => e.userName == useData.current.userName && e.password == useData.current.password);
//     setUserDetails(is);
//     if (is) {
//         navigate('/home/home');
//         // alert("succes")
//         Swal.fire({
//             title:   'Success!',
//             text: 'Login Success!',
//             icon: 'success',
//             confirmButtonText: 'OK',
//             confirmButtonColor: '#3085d6',
//         });
//     }
//     else {
//         // alert("WrongDetails");
//         Swal.fire({
//             icon: 'error',
//             title: 'Error!',
//             text: 'Wrong Details',
//             type: 'error',
//             confirmButtonText: 'Cool'
//         })
//     }
// }
// else {
//     alert("Enter password or name")
// }
