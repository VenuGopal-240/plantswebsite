import { Button, TextField } from "@mui/material";
import React from "react";
import RegisterDetails from "./RegisterDetails";

const LoginDetails = ({ handle, checking, open, setOpen }) => {

    return (
        <>
            {
                open ?
                    <div >
                        <h1 >LOGINPAGE</h1>
                        <TextField name="email" type="email" id="email" label="Email" variant="outlined" onChange={handle} required style={{ marginBottom: "2rem" }} />
                        <TextField name="password" id="password" label="Password" variant="outlined" onChange={handle} required style={{ marginBottom: "2rem" }} /><br />
                        <Button variant="contained" onClick={checking} >Login</Button><br />
                        Don't Have a Account :<Button onClick={()=>setOpen(false)}>Register</Button>
                    </div> : 
                   <RegisterDetails setOpen={setOpen}/>
        }


        </>
    )
}
export default LoginDetails;