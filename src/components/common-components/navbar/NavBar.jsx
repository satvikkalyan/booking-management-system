import React from "react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { useLoginDet, useUpdateLoginDet } from "../../../UserContext";
import { userObj } from "../../utility/constants";
export default function NavBar() {
  const userDetails = useLoginDet();
  const navigate = useNavigate();
  const someValueUpdate = useUpdateLoginDet();
  const onLoginClicked = () => {
    navigate("/login",{
            state : {
                pageInfo: {
                    currentPage: 'Login'
                }
            },

        });
  };
  const onRegisterClicked = () => {
    navigate("/register",{
            state : {
                pageInfo: {
                    currentPage: 'Register'
                }
            },

        });
  };
  const onLogOutClicked = () => {
    someValueUpdate(userObj);
    navigate("/");
  };
  const onHomeClicked = () => {
    navigate("/");
  };
  const onProfileClicked = () => {
    navigate("/profile");
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">
          <a href="/" style={{ textDecoration: "none", color: "white" }}>
            DSRV
          </a>
        </span>

        <div className="navItems">
          {userDetails?.email?.length > 0 && (
            <>
              <Button variant="contained" onClick={onHomeClicked} disabled>
              <span style={{ color: "white" }}><b>Current Logged IN User : </b></span>
                <span style={{ color: "yellow" }}>
                  <b>
                    {" "}
                    {userDetails?.onSiteEmployee
                      ? " Agent"
                      : userDetails?.management
                      ? " Admin"
                      : " Customer"}{" "}
                  </b>
                </span>
              </Button>{" "}
              <Button variant="contained" onClick={onHomeClicked}>
                {userDetails?.onSiteEmployee
                  ? "Book Hotel for Customer"
                  : "Home"}
              </Button>{" "}
              <Button variant="contained" onClick={onProfileClicked}>
                {userDetails?.onSiteEmployee ? "Dashboard" : "Profile"}
              </Button>{" "}
              <Button variant="contained" onClick={onLogOutClicked}>
                Logout
              </Button>
            </>
          )}
          {!userDetails?.email?.length > 0 && (
            <>
              <Button variant="contained" onClick={onLoginClicked}>
                Login
              </Button>
              <Button
                variant="contained"
                onClick={onRegisterClicked}
                sx={{ marginLeft: "10px" }}
              >
                Register
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
