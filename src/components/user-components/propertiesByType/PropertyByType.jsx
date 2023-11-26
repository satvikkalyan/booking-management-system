import React from "react";
import "./propertiesByType.css";

export default function PropertyByType(object) {
  const data = object.object;
  return (
    <div className="pListItem">
      <img src={data.src} alt="" className="pListImg" />
      <div className="pListTitles">
        <h1>{data.propertyType}</h1>
        <h2>
          {data.numberAvailable} {data.propertyType}
        </h2>
      </div>
    </div>
  );
}
