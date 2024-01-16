import React from "react";
import "./propertyByCities.css";

export default function PropertyByCity(s) {
  const data = s.object;
  return (
    <div className="featuredItem">
      <img src={data.src} alt="" className="featuredImg" />
      <div className="featuredTitles">
        <h1 className={"city-details"}>{data.cityName}</h1>
        <h2 className={"city-details"}>{data.numberAvailable} properties</h2>
      </div>
    </div>
  );
}
