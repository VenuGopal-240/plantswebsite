import { Button, TextField } from "@mui/material";
import React, { useState } from "react"

const RegisterDetails = ({ setOpen }) => {
    const [form, setForm] = useState({});

    const handleForm = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const registerData = async () => {
        if (form?.name && form?.email && form?.password) {
            try {
                const response = await fetch("http://localhost:8081/details/add-account", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(form),
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                console.log("Response:", data);

            } catch (error) {
                console.error("Error submitting form:", error);
            }
            setForm({ name: "", email: "", password:""});
            setOpen(true);
        }
        else {
            alert("Please Enter All Details");
        }

    }
    return (
        <>

            <div >
                <h1>REGISTRATION</h1>
                <TextField name="name" id="name" label="name" variant="outlined" onChange={handleForm} style={{ marginBottom: "2rem" }} /><br />

                <TextField name="email" id="email" type='email' label="Email" variant="outlined" onChange={handleForm} style={{ marginBottom: "2rem" }} />
                <TextField name="password" id="password" label="Password" variant="outlined" onChange={handleForm} style={{ marginBottom: "2rem" }} /><br />

                <Button variant="contained" onClick={registerData} >RegisterData</Button><br />
                Already Have a Account :<Button onClick={() => setOpen(true)}>Login</Button>
            </div>
        </>
    )
}
export default RegisterDetails;