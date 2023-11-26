import React from 'react'
import "./sponsoredProperties.css";

export default function SponsoredProperty(item) {
    const data = item.object
  return (
    <div className="fpItem">
    <img
      src={data.src}
      alt=""
      className="fpImg"
    />
    <span className="fpName">{data.propertyName}</span>
    <span className="fpCity">{data.location}</span>
    <span className="fpPrice">Starting from ${data.price}</span>
    <div className="fpRating">
      <button>{data.rating} / 10</button>
      <span>{data.review}</span>
    </div>
  </div>
  )
}
