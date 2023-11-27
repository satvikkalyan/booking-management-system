import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import { useUpdateLoginDet } from "../../../UserContext";
import {
  userAPI,
  paperStyle3,
  avatarStyle,
  buttonStyle,
} from "../../../components/utility/constants";
import { getDataFromAPI } from "../../../components/utility/fetchCalls";
import Loading from "../../../components/common-components/loading/Loading";
import {
  isValidUser,
} from "../../../components/utility/utilityFunctions";
export default function Login() {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [secretValue, setSecretValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState("");
  const updateUserDetails = useUpdateLoginDet();
  const loginUsingEmail = (email, isGoogle) => {
    getDataFromAPI(userAPI + email + "/").then(function (userData) {
      if (isValidUser(userData, isGoogle,secretValue)) {
        updateUserDetails(userData);
        setUserData(userData);
        if (userData.management || userData.customerSupportTeam) {
          setIsLoading(false);
          navigate("/admin-home");
        } else {
          if(userData.onSiteEmployee){
            navigate("/profile");

          }
          else
          navigate("/");
        }
      } else {
        //User Not Logged in Handle Cases Here
        console.log("Wrong Credentials")
      }
      setIsLoading(false);
    });
  };

  const onLoginClicked = () => {
      loginUsingEmail(value, false);
    
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSecretChange = (e) => {
    setSecretValue(e.target.value);
  };

  return (
    <>
          <Grid align="center">
      <Paper elevation={isLoading ? 0 : 10} style={paperStyle3}>
        {!isLoading && (
          <>
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h2>Login</h2>
            <TextField
              id="user-name"
              value={value}
              onChange={handleChange}
              variant="standard"
              label="User Name/Mobile Number"
              placeholder="Enter Username/Mobile Number"
              fullWidth
              required
            />
            <div style={buttonStyle} id="recaptcha-container"></div>
            <TextField
              id="password"
              value={secretValue}
              variant="standard"
              label="Password/OTP"
              placeholder="Enter Password/OTP"
              type="password"
              onChange={handleSecretChange}
              fullWidth
              required
            />
            <div style={buttonStyle}>

                <Button
                  variant="contained"
                  type=" submit"
                  fullWidth
                  onClick={onLoginClicked}
                >
                  Login
                </Button>
            
            </div>
            <div>
              <Link href="/forgot-password">Forgot Password ?</Link>
              <br />
              <br />
              Don't have an account?
              <Link href="/register">Register</Link>
            </div>
            <br />
          </>
        )}
        {isLoading && <Loading />}
      </Paper>
    </Grid>
</>

  );
}
