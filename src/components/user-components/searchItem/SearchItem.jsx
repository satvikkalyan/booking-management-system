import "./searchItem.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const SearchItem = (props) => {
  const navigate = useNavigate();
  const id = props.props.id;
  const date = props.props.date;
  const item = props.props.item;
  const handleNavigate = () => {
    navigate(`/hotels/${item.id}`, { state: { id, date, item } });
  };
  return (
    <div className="searchItem">
      <img src={item.img} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.propertyName}</h1>
        <span className="siTaxiOp">{item.transportationFacility}</span>
        <span className="siSubtitle">{item.description}</span>
        <span className="siFeatures">{item.roomFacilities}</span>
        <span className="siCancelOp">{item.cancellationOptions}</span>
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
          <Button variant="contained" type="button" onClick={handleNavigate}>
            See availability
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
