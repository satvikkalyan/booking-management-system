import React from "react";
import "./Register.css"
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { useNavigate } from "react-router-dom";
import logo from "../../../resources/images/logo-no-background.png";

export default function Register() {
  const navigate = useNavigate();
  return (
      <div className="login">
        <div className="login-container">
          <a href="/"><img id="logo" src={logo} alt="Logo" /></a>
          <div className="input-container">
            <div className={"title"}>
              <h1>Create your account</h1>
            </div>
            <div className="inputs">
              <TextField
                  required
                  id="firstName"
                  label="First Name"
              />
              <TextField
                  required
                  id="lastName"
                  label="Last Name"
              />
              <TextField
                  required
                  id="email"
                  label="Email"
              />
              <TextField
                  required
                  id="password"
                  label="Password"
                  type="password"
              />
              <TextField
                  required
                  id="confirmPassword"
                  label="Confirm Password"
                  type="password"
              />
              <Button  id="login-button" variant="contained">Sign Up</Button>
            </div>
          </div>
        </div>
        <div className="signup-container">
          <div className="signup-message-container">
            <div className={"title"}>
              <h2>Existing User?</h2>
              <h3>Login and get best hotel deals!</h3>
            </div>
            <div className="inputs">
              <Button onClick={()=>{
                navigate("/login");
              }} id="login-button" variant="contained">Login</Button>
            </div>
          </div>
        </div>
      </div>
  );
}
