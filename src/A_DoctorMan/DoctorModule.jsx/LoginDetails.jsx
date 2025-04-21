import React, { useState } from "react";
import './Doctor.css';
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const  LoginDetails=()=>{
  const [isRegister, setIsRegister] = useState(false);
    const nav = useNavigate();
  const toggleForm = () => {
    setIsRegister(!isRegister);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(`${isRegister ? "Registered" : "Logged in"} successfully!`);
    nav("/home/home");
  };

  return (
    <div className="app">
      <div className="form-container">
        <h1>{isRegister ? "Register" : "Login"} to Hospital</h1>
        <form onSubmit={handleSubmit}>
          {isRegister && (
            <div className="form-group">
              <TextField className='input'   label="UserName" variant="outlined" type="text" id="username" placeholder="Enter your username" required  />
            </div>
            
          )}
          <div className="form-group">
            <TextField className='input' label="Email" variant="outlined" type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <TextField   className='input' label="Password" variant="outlined"  type="password" id="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="btn">
            {isRegister ? "Register" : "Login"}
          </button>
        </form>
        <p className="toggle-text">
          {isRegister ? "Already have an account?" : "Don't have an account?"}
          <span onClick={toggleForm} className="toggle-link">
            {isRegister ? " Login" : " Register"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoginDetails;