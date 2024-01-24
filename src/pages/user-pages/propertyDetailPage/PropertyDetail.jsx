import "./PropertyDetail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useLoginDet } from "../../../context/UserContext";
import {
  isUserLoggedIn,
  getNumberOfDays,
} from "../../../components/utility/utilityFunctions";
import Maps from "../../../components/user-components/Maps/Maps";
import CustomButton from "../../../components/common-components/customButton/CustomButton";
import BedSelectionModal from "../../../components/user-components/bedSelectionPopup/bedSelectionModal";
import {useBookingDetails} from "../../../context/BookingDetails";
const PropertyDetail = () => {
  const userDetails = useLoginDet();
  const [slideNumber, setSlideNumber] = useState(0);
  const bookingDetails = useBookingDetails()
  const  properties = bookingDetails?.properties;
  const property = properties.find(property => property.propertyId === bookingDetails.propertyId);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const photos = property?.carouselImages
  const totalDays = getNumberOfDays(
      bookingDetails?.fromDate,
      bookingDetails?.toDate,
  );

  const handleReserve = () => {
    if (!isUserLoggedIn(userDetails)) {
      setShowModal(true);
    } else {
      navigate("/errorPage");
    }
  };

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;
    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber);
  };

  return (
      <div className={"hotel-detail-container"}>
        <div className="hotelContainer">
          {open && (
              <div className="slider">
                <FontAwesomeIcon
                    icon={faCircleXmark}
                    className="close"
                    onClick={() => setOpen(false)}
                />
                <FontAwesomeIcon
                    icon={faCircleArrowLeft}
                    className="arrow"
                    onClick={() => handleMove("l")}
                />
                <div className="sliderWrapper">
                  <img
                      src={photos[slideNumber]}
                      alt=""
                      className="sliderImg"
                  />
                </div>
                <FontAwesomeIcon
                    icon={faCircleArrowRight}
                    className="arrow"
                    onClick={() => handleMove("r")}
                />
              </div>
          )}
          <div className="hotelWrapper">
            <h1 className="hotelTitle"> {property?.propertyName} </h1>
            <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocationDot}/>
              <span>{property?.city}</span>
            </div>
            <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
            <div className="hotelImages">
              {photos?.map((photo, i) => (
                  <div className="hotelImgWrapper" key={i}>
                    <img
                        onClick={() => handleOpen(i)}
                        src={photo}
                        alt=""
                        className="hotelImg"
                    />
                  </div>
              ))}
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsTexts">
                <h1 className="hotelTitle">{property?.propertyDescription}</h1>
                <p className="hotelDesc">{property?.description}</p>
                <div className="div-map1">
                  <Maps
                      props={{
                        from: "Bloomington",
                        toDes: property?.location + "," + property?.city,
                      }}
                  />
                </div>
              </div>
              <div className="hotelDetailsPrice">
                <h1>{property?.shortTitle}</h1>
                <span>{property?.shortDescription}</span>
                <h2>
                  <b>${totalDays * property?.price}</b> ({totalDays } nights)
                </h2>
                <CustomButton className={"handle-reserve-button"} onClick={handleReserve} buttonName={"Reserve or Book Now!"}/>
              </div>
            </div>
          </div>
          {showModal && (
              <BedSelectionModal
                  setShowModal={setShowModal}
                  resource={property?.roomTypeResourceList}
                  startDate={bookingDetails?.fromDate}
                  endDate={bookingDetails?.toDate}
                  hotelData={property}
              />
          )}
        </div>
      </div>

  );
};

export default PropertyDetail;
