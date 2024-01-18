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
                    <CustomButton   buttonName={"Login"} onClick={()=>navigate("/login")} className={"login-button"}/>
                    <CustomButton   buttonName={"Sign Up"} onClick={()=>navigate("/register")} className={"signup-button"}/>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
