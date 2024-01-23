import React, {useState} from "react";
import "./Login.css"
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import logo from "../../../resources/images/logo-no-background.png"
import {useNavigate} from "react-router-dom";
import {loginUser} from "../../../service/userService";
import {useUpdateLoginDet} from "../../../UserContext";

export default function Login() {
    const navigate = useNavigate();
    const setUserData = useUpdateLoginDet();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [loginError, setLoginError] = useState(false);

    const handleChange = (e) => {
        const {id, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleLogin = () => {
        loginUser({
            email: formData.email,
            password: formData.password,
        })
            .then((response) => {
                if (response.status === 200) {
                    return response.json();
                } else if (response.status === 401) {
                    setLoginError(true)
                    throw new Error("Invalid username or password");
                } else {
                    setLoginError(true)
                    throw new Error("Login failed");
                }

            })
            .then((userData) => {
                setUserData(userData);
                navigate("/", {
                    state: {
                        currentPage: "Home"
                    },
                });
            })
            .catch((error) => {
                console.error("Error during login:", error.message);
            });
    };

    return (
        <div className="login">
            <div className="login-screen-login-container">
                <a href="/"><img id="logo" src={logo} alt="Logo"/></a>
                <div className="login-screen-input-container">
                    <div className={"title"}>
                        <h1>Login to your account</h1>
                    </div>
                    <div className="inputs">
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
                            onChange={handleChange}
                        />
                        {loginError && (
                            <div style={{color: "red", marginBottom: "10px"}}>
                                Invalid username or password.
                            </div>
                        )}
                        <Button id="login-button" variant="contained" onClick={handleLogin}>Login</Button>
                    </div>
                </div>
            </div>
            <div className="login-screen-signup-container">
                <div className="login-screen-signup-message-container">
                    <div className={"title"}>
                        <h2>New Here?</h2>
                        <h3>Signup and get best hotel deals!</h3>
                    </div>
                    <div className="login-screen-inputs">
                        <Button onClick={() => {
                            navigate("/register", {
                                state: {
                                    pageInfo: {
                                        currentPage: 'Register'
                                    }
                                },

                            });
                        }} id="login-button" variant="contained">Sign Up</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
