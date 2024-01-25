import React, {useState} from "react";
import "./Register.css"
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import {useNavigate} from "react-router-dom";
import logo from "../../../resources/images/logo-no-background.png";
import {registerUser} from "../../../service/UserService";

export default function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [userExists, setUserExists] = useState(false);
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const handleChange = (e) => {
        const {id, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };
    const isSignUpDisabled = () => {
        return (
            !formData.firstName ||
            !formData.lastName ||
            !formData.email ||
            !formData.password ||
            !formData.confirmPassword
        );
    };
    const handleSignUp = () => {
            if (formData.password === formData.confirmPassword) {
                setPasswordsMatch(true);
                registerUser({
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                    password: formData.password,
                })
                .then(r => {
                    if(r.status===200){
                        navigate("/login", {
                            state: {
                                pageInfo: {
                                    currentPage: 'Login'
                                }
                            }
                        })
                    }
                    else if(r.status===409){
                        setUserExists(true);
                    }
                }).catch(e=>{
                    console.log(e)
                })
            } else {
                setPasswordsMatch(false);
            }
        }
    ;


    return (
        <div className="login">
            <div className="login-container">
                <a href="/"><img id="logo" src={logo} alt="Logo"/></a>
                <div className="input-container">
                    <div className={"title"}>
                        <h1>Create your account</h1>
                    </div>
                    <div className="inputs">
                        {userExists && (
                            <div style={{ color: "red", marginBottom: "10px" }}>
                                User with this email already exists.
                            </div>
                        )}
                        <TextField
                            required
                            id="firstName"
                            label="First Name"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                        <TextField
                            required
                            id="lastName"
                            label="Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                        <TextField
                            required
                            id="email"
                            label="Email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <TextField
                            required
                            id="password"
                            label="Password"
                            type="password"
                            value={formData.password}
                            error={!passwordsMatch}
                            helperText={!passwordsMatch && 'Passwords do not match'}
                            onChange={handleChange}
                        />
                        <TextField
                            required
                            id="confirmPassword"
                            label="Confirm Password"
                            type="password"
                            error={!passwordsMatch}
                            helperText={!passwordsMatch && 'Passwords do not match'}
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                        <Button id="login-button" variant="contained" onClick={handleSignUp}
                                disabled={isSignUpDisabled()}>Sign Up</Button>
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
                        <Button onClick={() => {
                            navigate("/login", {
                                state: {
                                    pageInfo: {
                                        currentPage: 'Login'
                                    }
                                },

                            });
                        }} id="login-button" variant="contained">Login</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
