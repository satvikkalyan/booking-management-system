import React from "react";
import logo from "../../../resources/images/logo-no-background.png"
import "./navbar.css"
import CustomButton from "../customButton/CustomButton";
import {useNavigate} from "react-router-dom";

const Navbar = () => {
    const navigate= useNavigate()
    return (
        <div className={"navbar-main-div"}>
            <div className={"content-div"}>
                <a href={"/"}><img className={"logo"} src={logo} alt={"Logo"}/></a>
                <div className={"navigation-buttons"}>
                    <CustomButton  id="login-button" buttonName={"Login"} onclick={()=>navigate("/login")} className={"button"}/>
                    <CustomButton  id="signup-button" buttonName={"Sign Up"} onclick={()=>navigate("/register")} className={"button"}/>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
