import "./mailList.css";
import { useNavigate } from "react-router-dom";
import { postDataToAPI } from "../../utility/fetchCalls";
import { subscriptionAPI } from "../../utility/constants";
import React, { useState } from "react";
import CustomButton from "../../common-components/customButton/CustomButton";
import TextField from "@mui/material/TextField";
import {InputAdornment} from "@mui/material";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
const MailList = () => {
  const [userEmail, setemail] = useState("");
  const navigate = useNavigate();
  const enrollInSubscription = () => {
    postDataToAPI(subscriptionAPI, { email: userEmail }).then((data) => {
      console.log(data);
    });
  };
  const navigateToFeedBackPage = () => {
    navigate("/user/feedback");
  };
  const handleChange = (e) => {
    setemail(e.target.value);
  };
  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, save money!</h1>
      <span className="mailDesc">
        Sign up and we'll send the best deals to you
      </span>
      <div className="mailInputContainer">
        <TextField
            InputProps={{
              startAdornment: (
                  <InputAdornment position="start">
                    <MailOutlineIcon />
                  </InputAdornment>
              ),
            }}
            id="email-input" label="Email" variant="outlined" onChange={handleChange}/>
        <CustomButton   buttonName={"Subscribe"} onClick={enrollInSubscription} className={"subscribe-button"}/>
        {"  "}
        <CustomButton   buttonName={"FeedBack"} onClick={navigateToFeedBackPage} className={"feedback-button"}/>
      </div>
        <span className={"copyright"}>Copyright © 2022 DSVR.</span>
    </div>
  );
};

export default MailList;
