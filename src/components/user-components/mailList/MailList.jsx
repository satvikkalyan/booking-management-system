import "./mailList.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { postDataToAPI } from "../../utility/fetchCalls";
import { subscriptionAPI } from "../../utility/constants";
import { useState } from "react";

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
        <input type="text" placeholder="Your Email" onChange={handleChange} />
        <Button onClick={enrollInSubscription}>Subscribe</Button>
        {"  "}
        <Button onClick={navigateToFeedBackPage}>FeedBack</Button>
      </div>
    </div>
  );
};

export default MailList;
