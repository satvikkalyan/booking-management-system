import React from "react";
import "./Login.css"
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import logo from "../../../resources/images/logo-no-background.png"
import { useNavigate } from "react-router-dom";
export default function Login() {
    const navigate = useNavigate();
  return (
      <div className="login">
        <div className="login-container">
            <a href="/"><img id="logo" src={logo} alt="Logo" /></a>
            <div className="input-container">
                <div className={"title"}>
                    <h1>Login to your account</h1>
                </div>
                <div className="inputs">
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
                    <Button  id="login-button" variant="contained">Login</Button>
                </div>
            </div>
        </div>
        <div className="signup-container">
            <div className="signup-message-container">
                <div className={"title"}>
                    <h2>New Here?</h2>
                    <h3>Signup and get best hotel deals!</h3>
                </div>
                <div className="inputs">
                    <Button onClick={()=>{
                        navigate("/register");
                    }} id="login-button" variant="contained">Sign Up</Button>
                </div>
            </div>
        </div>
      </div>
  );
}
