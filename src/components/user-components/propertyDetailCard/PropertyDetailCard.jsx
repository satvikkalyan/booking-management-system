import "./PropertyDetailCard.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../common-components/customButton/CustomButton";
import React from "react";

const PropertyDetailCard = (props) => {
  const navigate = useNavigate();
  const id = props.props.id;
  const date = props.props.date;
  const item = props.props.item;
  const handleNavigate = () => {
    navigate(`/hotels/${item.id}`, {
      state: {
          id, date, item, pageInfo: {
          currentPage: 'hotelDetail'
        } },
       });
  };
  return (
    <div className="searchItem">
      <img src={item.img} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.propertyName}</h1>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">{item.description}</span>
        <span className="siFeatures">{item.propertyFacilities}</span>
        <span className="siCancelOp">Free Cancellation</span>
        {item.cancellationOptions === "Free Cancellation" && (
          <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        )}
      </div>
      <div className="siDetails">
        <br />
        <div className="siRating">
          <button>{item.rating}</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">${item.price}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <CustomButton className="check-avail-button" buttonName={"See availability"} onClick={handleNavigate}/>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailCard;
