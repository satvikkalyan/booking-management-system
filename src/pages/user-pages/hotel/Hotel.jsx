import "./hotel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useLoginDet } from "../../../UserContext";
import {
  isUserLoggedIn,
  getNumberOfDays,
} from "../../../components/utility/utilityFunctions";
import Maps from "../../../components/user-components/Maps/Maps";
import CustomButton from "../../../components/common-components/customButton/CustomButton";
import BedSelectionModal from "../../../components/user-components/bedSelectionPopup/bedSelectionModal";
const Hotel = () => {
  const userDetails = useLoginDet();
  const [slideNumber, setSlideNumber] = useState(0);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();
  const [photos, setPhotos] = useState([]);
  const [hotelData] = useState(location?.state?.item);
  const totalDays = getNumberOfDays(
    location?.state?.date[0]?.endDate,
    location?.state?.date[0]?.startDate
  );
  useEffect(() => {
    if (photos?.length === 0) {
      var photos2 = [];
      photos2.push({ src: hotelData?.img });
      photos2.push({ src: hotelData?.img });
      photos2.push({ src: hotelData?.img });
      photos2.push({ src: hotelData?.img });
      photos2.push({ src: hotelData?.img });
      photos2.push({ src: hotelData?.img });
      setPhotos(photos2)
    }

    return () => {};
  }, [photos.length,hotelData]);

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
                      src={photos[slideNumber]?.src}
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
            <h1 className="hotelTitle"> {hotelData.propertyName} </h1>
            <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocationDot}/>
              <span>{hotelData.city}</span>
            </div>
            <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
            <div className="hotelImages">
              {photos?.map((photo, i) => (
                  <div className="hotelImgWrapper" key={i}>
                    <img
                        onClick={() => handleOpen(i)}
                        src={photo.src}
                        alt=""
                        className="hotelImg"
                    />
                  </div>
              ))}
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsTexts">
                <h1 className="hotelTitle">{hotelData?.descriptionTitle}</h1>
                <p className="hotelDesc">{hotelData?.description}</p>
                <div className="div-map1">
                  <Maps
                      props={{
                        from: "Bloomington",
                        toDes: hotelData?.location + "," + hotelData?.city,
                      }}
                  />
                </div>
              </div>
              <div className="hotelDetailsPrice">
                <h1>{hotelData?.highlightTitle}</h1>
                <span>{hotelData?.highlightDescription}</span>
                <h2>
                  <b>${totalDays * hotelData?.price}</b> ({totalDays } nights)
                </h2>
                <CustomButton className={"handle-reserve-button"} onClick={handleReserve} buttonName={"Reserve or Book Now!"}/>
              </div>
            </div>
          </div>
          {showModal && (
              <BedSelectionModal
                  setShowModal={setShowModal}
                  resource={location?.state.item?.roomTypeResourceList}
                  startDate={location?.state?.date[0]?.startDate}
                  endDate={location?.state?.date[0]?.endDate}
                  hotelData={hotelData}
              />
          )}
        </div>
      </div>

  );
};

export default Hotel;
