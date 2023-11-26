import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import { GoogleLogin } from "@leecheuk/react-google-login";
import { useUpdateLoginDet } from "../../../UserContext";
import { postDataToAPI } from "../../../components/utility/fetchCalls";
import {
  userAPI,
  clientId,
  userObj,
} from "../../../components/utility/constants";
import {
  paperStyle2,
  avatarStyle,
  buttonStyle,
} from "../../../components/utility/constants";

export default function Register() {
  const currentTimeStamp = new Date().getTime();
  const mobilenumber = Math.floor(Math.random() * 10000000000).toString();
  const updateUserDetails = useUpdateLoginDet();
  const onSuccess = (res) => {
    res = res.profileObj;
    console.log(res);
    user.firstName = res.givenName;
    user.lastName = res.familyName;
    user.email = res.email;
    user.mobile = mobilenumber;
    setPassword(res.googleId);
    postData(user).then(function (e) {
      if (e.status === 200) {
        console.log("POSTED ", e, user);
        user.mobile = mobilenumber;
        updateUserDetails(user);
        navigate("/");
      } else {
        navigate("/login");
      }
    });
  };
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [user, setUser] = useState(userObj);
  user.cardDetailsResourceList = [
    {
      cardNumber: currentTimeStamp,
      cardName: "",
      cardExpiry: "",
    },
  ];
  const onFailure = (err) => {
    console.log("failed:", err);
  };
  const navigate = useNavigate();
  const checkPassword = () => {
    if (password?.length > 0 && confirmPassword?.length > 0) {
      return password === confirmPassword;
    }
    return false;
  };
  const checkMobileNumber = () => {
    return user.mobile?.length === 10;
  };
  const checkIfNotEmpty = () => {
    if (
      user.firstName?.length > 0 &&
      user.lastName?.length > 0 &&
      user.email?.length > 0 &&
      checkPassword() &&
      checkMobileNumber()
    ) {
      return true;
    }
    return false;
  };
  const getData = () => {
    if (checkIfNotEmpty()) {
      return user;
    } else {
      console.log("Mandatory Fields not filled");
    }
  };
  const handleListener = (evt) => {
    const value = evt.target.value;
    setUser({
      ...user,
      [evt.target.name]: value,
    });
  };
  const postData = (data) => {
    data.customer = true;
    data.password = password;
    return postDataToAPI(userAPI, data);
  };
  const handleConfirmPasswordChangeListener = (evt) => {
    setConfirmPassword(evt.target.value);
  };
  const handlePasswordChangeListener = (evt) => {
    setPassword(evt.target.value);
  };
  const onRegisterClicked = () => {
    if (checkIfNotEmpty()) {
      const data = getData();
      postData(data).then(function (e) {
        if (e.status === 200) {
          console.log("POSTED ", e);
          updateUserDetails(data);
          navigate("/");
        } else {
          console.log(e.status);
        }
      });
    } else {
      console.log("Mandatory Fields not filled");
    }
  };

  return (
    <Grid align="center">
      <Paper elevation={10} style={paperStyle2}>
        <Avatar style={avatarStyle}>
          <AppRegistrationIcon />
        </Avatar>
        <h2>Register</h2>
        <TextField
          id="firstname"
          name="firstName"
          variant="standard"
          label="First Name"
          placeholder="Enter your First Name"
          value={user?.firstName ? user?.firstName : ""}
          onChange={handleListener}
          fullWidth
          required
        />
        <TextField
          id="lastname"
          name="lastName"
          variant="standard"
          label="Last Name"
          placeholder="Enter your Last Name"
          value={user?.lastName ? user?.lastName : ""}
          onChange={handleListener}
          fullWidth
          required
        />
        <TextField
          id="email"
          name="email"
          variant="standard"
          label="Email"
          placeholder="Enter Email"
          value={user?.email ? user?.email : ""}
          onChange={handleListener}
          fullWidth
          required
        />
        <TextField
          id="mobilenumber"
          name="mobile"
          variant="standard"
          label="Mobile Number"
          placeholder="Enter your Mobile Number"
          value={user?.mobile ? user?.mobile : ""}
          onChange={handleListener}
          fullWidth
          required
        />
        <TextField
          id="password-1"
          name="password-1"
          variant="standard"
          label="Password"
          value={password}
          placeholder="Enter Password"
          onChange={handlePasswordChangeListener}
          type="password"
          fullWidth
          required
        />
        <TextField
          id="password-2"
          variant="standard"
          label="Re-enter Password"
          placeholder="Re-enter Password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChangeListener}
          type="password"
          fullWidth
          required
        />
        <div style={buttonStyle}>
          <Button
            variant="contained"
            type=" submit"
            fullWidth
            onClick={onRegisterClicked}
          >
            Register
          </Button>
        </div>
        <div>
          Already have an account?
          <Link href="/login">Login</Link>
        </div>
        <br />
        <div align="center">
          <GoogleLogin
            clientId={clientId}
            buttonText="Register with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
            isSignedIn={false}
          />
        </div>
      </Paper>
    </Grid>
  );
}
