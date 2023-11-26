import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { firebase, auth } from "../login/firebase";
import { useNavigate } from "react-router-dom";
import {
  paperStyle,
  avatarStyle,
  buttonStyle,
} from "../../../components/utility/constants";
import { getDataFromMobileNumber, postDataToAPI } from "../../../components/utility/fetchCalls";
import { userAPI } from "../../../components/utility/constants";

export default function ForgotPassword() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [secretValue, setSecretValue] = useState("");
  const [result, setResult] = useState("");
  const [displayForgotPassword, setDisplayForgotPassword] = useState(false);
  const [displayVerifyButton, setDisplayVerifyButton] = useState(false);
  const [displayOTPField, setDisplayOTPField] = useState(false);
  const [password1, setPassword1Value] = useState("");
  const [password2, setPassword2Value] = useState("");
  const [userData, setUserData] = useState("");
  const navigate = useNavigate()
  const VerifyOTP = () => {
    result.confirm(secretValue).then(function (result) {
      getDataFromMobileNumber(mobileNumber).then((userData) => {
        setUserData(userData);
        console.log(userData)
        setDisplayForgotPassword(true);
      });
    });
  };
  const signin = () => {
    let mynumber = "+1" + mobileNumber;
    if (mynumber === "" || mynumber.length < 10) return;
    let verify = new firebase.auth.RecaptchaVerifier("recaptcha-container", {
      size: "invisible",
    });
    auth
      .signInWithPhoneNumber(mynumber, verify)
      .then((result) => {
        setDisplayOTPField(true);
        setDisplayVerifyButton(true);
        setResult(result);
      })
      .catch((err) => {
        alert(err);
        window.location.reload();
      });
  };
  const isMobileNumber = (text) => {
    var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    return re.test(text);
  };
  const onSubmitClicked = () => {
    if (isMobileNumber(mobileNumber)) signin();
    else {
      console.log("Invalid Mobile Number");
    }
  };
  const handleChange = (e) => {
    setMobileNumber(e.target.value);
  };
  const handleSecretChange = (e) => {
    setSecretValue(e.target.value);
  };
  const handlePassword1Change = (e) => {
    setPassword1Value(e.target.value);
  };
  const handlePassword2Change = (e) => {
    setPassword2Value(e.target.value);
  };

  const changePassword = () => {
    userData.password = password1
    postDataToAPI(userAPI,userData).then((e)=>{
      console.log("Changed Password");
      if (e.status === 200) {
        navigate("/");
      }
      else{
        console.log(e.status)
      }
    })
  };
  return (
    <Grid align="center">
      <Paper elevation={10} style={paperStyle}>
        <Avatar style={avatarStyle}>
          <LockOutlinedIcon />
        </Avatar>
        <h2>Forgot Password</h2>
        <TextField
          id="email"
          variant="standard"
          label="Enter Phone Number"
          placeholder="Enter Phone Number"
          value={mobileNumber}
          disabled={displayOTPField}
          onChange={handleChange}
          fullWidth
          required
        />

        {displayForgotPassword && (
          <>
            <TextField
              id="password1"
              variant="standard"
              type="password"
              label="Enter New Password"
              placeholder="Enter Password"
              value={password1}
              onChange={handlePassword1Change}
              fullWidth
              required
            />
            <TextField
              id="password2"
              variant="standard"
              type="password"
              label="Enter New Password Again"
              placeholder="Enter Password Again"
              value={password2}
              onChange={handlePassword2Change}
              fullWidth
              required
            />
            <br />
            <br />
            <Button
              variant="contained"
              type="button"
              fullWidth
              onClick={changePassword}
            >
              Change Password
            </Button>
          </>
        )}

        {!displayForgotPassword && (
          <>
            {displayOTPField && (
              <TextField
                id="otp"
                variant="standard"
                label="Enter OTP"
                placeholder="Enter OTP"
                value={secretValue}
                onChange={handleSecretChange}
                fullWidth
                required
              />
            )}
            <div style={buttonStyle}>
              {!displayVerifyButton && (
                <Button
                  variant="contained"
                  type="submit"
                  fullWidth
                  onClick={onSubmitClicked}
                >
                  Submit
                </Button>
              )}
              <div style={buttonStyle} id="recaptcha-container"></div>
              {displayVerifyButton && (
                <Button
                  variant="contained"
                  type="button"
                  fullWidth
                  onClick={VerifyOTP}
                >
                  Verify OTP
                </Button>
              )}
            </div>
          </>
        )}
      </Paper>
    </Grid>
  );
}
