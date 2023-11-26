import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import "./bedSelection.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SeatSelector from "../../common-components/seatSelectorComponent/SeatSelector";
import { generateTemplate } from "../../utility/utilityFunctions";
import { sampleRoomData } from "../../utility/constants";
import { postDataToAPI, getDataFromAPI } from "../../utility/fetchCalls";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
export default function BedSelection(props) {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const [counter, setcounter] = useState(0);
  const roomData = props.resource;
  const [bedData, setBedData] = useState(generateTemplate(roomData));
  var maxCapacity = 0;
  for (var x = 0; x < bedData.length; x++) {
    maxCapacity += bedData[x].availability;
  }
  const [p, setP] = useState(0);

  const handleReserve = () => {
    var roomsSelected = "";
    for (var x = 0; x < bedData.length; x++) {
      if (roomsSelected.length > 0) {
        roomsSelected += ",";
      }
      const item = bedData[x];
      var tempCount = 0;
      if (item["beds"]["NW"] === true) {
        tempCount += 1;
      }
      if (item["beds"]["NE"] === true) {
        tempCount += 1;
      }
      if (item["beds"]["SW"] === true) {
        tempCount += 1;
      }
      if (item["beds"]["SE"] === true) {
        tempCount += 1;
      }
      roomsSelected += `${bedData[x].roomName}:${tempCount}`;
    }
    const somedata = {
      fromDate: props.startDate,
      toDate: props.endDate,
      occupancy: counter,
      roomTypeCount: roomsSelected,
      hotelData: props.hotelData,
    };
    // postDataToAPI("https://bms-backend-spring-prelive.herokuapp.com/api/v1/bookings/72/6/",somedata).then((data)=>{
    //   // getDataFromAPI(`https://bms-backend-spring-prelive.herokuapp.com/api/v1/bookings/timestamp/${date}/`).then((data2)=>{
    //   //   console.log("Got Data",data2)
    //   // })
    //   // console.log(data)
    navigate("/payments", { state: somedata });
    // })
  };

  const handleListener = (evt) => {
    const value = evt.target.checked;
    const id = evt.target.id;
    const idAndName = id.split("-");
    const tempBedData = bedData;
    for (var i = 0; i < tempBedData.length; i++) {
      if (tempBedData[i].id == idAndName[0]) {
        tempBedData[i]["beds"][idAndName[1]] = value;
        break;
      }
    }
    setBedData(tempBedData);
    setP(p + 1);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    height: "60%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    outline: 0,
    p: 4,
  };
  useEffect(() => {
    var tempCount = 0;
    for (var i = 0; i < bedData.length; i++) {
      const item = bedData[i];
      if (item["beds"]["NW"] === true) {
        tempCount += 1;
      }
      if (item["beds"]["NE"] === true) {
        tempCount += 1;
      }
      if (item["beds"]["SW"] === true) {
        tempCount += 1;
      }
      if (item["beds"]["SE"] === true) {
        tempCount += 1;
      }
    }
    setcounter(tempCount);

    return () => {};
  }, [bedData, counter, p]);
  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        onBackdropClick={() => {
          props.setShowModal(false);
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ overflowY: "scroll" }}
      >
        <Box sx={style}>
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="rClose"
            onClick={() => props.setShowModal(false)}
          />
          <span>Select your rooms:</span>
          <br />
          <div className="div-scroll">
            {roomData.map((item, index) => (
              <div className="rItem" key={item.id}>
                <div className="rItemInfo">
                  <div className="rTitle">{item.roomName}</div>
                  {/* <div className="rDesc">{item.desc}</div> */}
                  <div className="rMax">
                    Max Beds : <b>{item.bedsAvailable}</b>
                  </div>
                </div>
                <div className="rSelectRooms" key={item.id}>
                  <SeatSelector
                    hc={{ handleChange: handleListener, itemKey: item.id }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="button-reserve-div">
            <span>Total Rooms Selected: {counter}</span>
            {counter > maxCapacity && (
              <span style={{ color: "red" }}> Beds Not Available</span>
            )}
          </div>
          <div className="button-reserve-div">
            <span>Meal Options:</span>
            <FormGroup>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <FormControlLabel
                        control={<Checkbox  />}
                        label="Breakfast- 15$ - All Week"
                      />
                    </td>
                    <td>
                      <FormControlLabel
                        control={<Checkbox  />}
                        label="Lunch- 15$ - All Week"
                      />
                    </td>
                    <td>
                      <FormControlLabel
                        control={<Checkbox  />}
                        label="Dinner- 15$ - All Week"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </FormGroup>
          </div>
          {counter <= maxCapacity && (
            <div className="button-reserve-div">
              <Button
                className="rButton"
                onClick={handleReserve}
                variant="contained"
              >
                Reserve Now!
              </Button>
            </div>
          )}
        </Box>
      </Modal>
    </div>
  );
}
