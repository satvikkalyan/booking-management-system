import React from "react";
import logo from "../../../resources/images/logo-no-background.png"
import "./navbar.css"
import CustomButton from "../customButton/CustomButton";
import { useNavigate} from "react-router-dom";

const Navbar = () => {
    const navigate= useNavigate()
    const handleLoginClicked = () =>{
        navigate("/login",{
            state : {
                pageInfo: {
                    currentPage: 'Login'
                }
            },

        })
    }
    const handleSignupClicked = () =>{
        navigate("/register",{
            state : {
                pageInfo: {
                    currentPage: 'Register'
                }
            },

        })
    }
    return (
        <div className={"navbar-main-div"}>
            <div className={"content-div"}>
                <a href={"/"}><img className={"logo"} src={logo} alt={"Logo"}/></a>
                <div className={"navigation-buttons"}>
                    <CustomButton   buttonName={"Login"} onClick={handleLoginClicked} className={"login-button"}/>
                    <CustomButton   buttonName={"Sign Up"} onClick={handleSignupClicked} className={"signup-button"}/>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
