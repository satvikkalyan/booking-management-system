import React from "react";
import logo from "../../../resources/images/logo-no-background.png"
import "./navbar.css"
import CustomButton from "../customButton/CustomButton";
import {useNavigate} from "react-router-dom";
import {useLoginDet, useUpdateLoginDet} from "../../../UserContext";
import {userObj} from "../../utility/constants";

const Navbar = () => {
    const navigate = useNavigate()
    const userData = useLoginDet()
    const updateUserData = useUpdateLoginDet()
    const handleLoginClicked = () => {
        navigate("/login", {
            state: {
                pageInfo: {
                    currentPage: 'Login'
                }
            },

        })
    }
    const handleSignupClicked = () => {
        navigate("/register", {
            state: {
                pageInfo: {
                    currentPage: 'Register'
                }
            },
        })
    }
    const handleLogoutClicked = () =>{
        updateUserData(userObj);
        navigate("/", {
            state: {
                pageInfo: {
                    currentPage: 'Home'
                }
            },
        })
    }
    return (
        <div className={"navbar-main-div"}>
            <div className={"content-div"}>
                <a href={"/"}><img className={"logo"} src={logo} alt={"Logo"}/></a>
                <div className={"navigation-buttons"}>
                    {userData?.userID?.length === 0 ? (
                        <>
                            <CustomButton buttonName={"Login"} onClick={handleLoginClicked} className={"login-button"}/>
                            <CustomButton buttonName={"Sign Up"} onClick={handleSignupClicked}
                                          className={"signup-button"}/>
                        </>
                    ) : (
                        <CustomButton buttonName={"Logout"} onClick={handleLogoutClicked} className={"logout-button"}/>
                    )}
                </div>

            </div>
        </div>
    )
        ;
}

export default Navbar;
