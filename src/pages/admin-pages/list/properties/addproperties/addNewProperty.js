import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import "./addNewProperty.css";
import Button from "@mui/material/Button";
import { useLocation, useNavigate } from "react-router-dom";
import {
  flex_style,
  paperStyle5,
  propertyTemplate,
} from "../../../../../components/utility/constants";
import Sidebar from "../../../../../components/admin-components/sidebar/Sidebar";
import { postPropData } from "../../../../../components/utility/fetchCalls";
export default function AddNewProperty() {
  const navigate = useNavigate();
  const navigateToHomePage = () => {
    navigate("/admin/properties");
  };
  const location = useLocation();
  const [property, setProperty] = useState(
    location?.state ? location?.state : propertyTemplate
  );

  const handleListener = (evt) => {
    const value = evt.target.value;
    setProperty({
      ...property,
      [evt.target.name]: value,
    });
  };
  const [room1Name, setRoom1Name] = useState(
    location?.state ? location?.state?.roomTypeResourceList[0]?.roomName : ""
  );
  const [room2Name, setRoom2Name] = useState(
    location?.state
      ? location?.state?.roomTypeResourceList.length > 1
        ? location?.state?.roomTypeResourceList[1]?.roomName
        : ""
      : ""
  );
  const [room1Count, setRoom1Count] = useState(
    location?.state
      ? location?.state?.roomTypeResourceList[0]?.bedsAvailable
      : 0
  );
  const [room2Count, setRoom2Count] = useState(
    location?.state
      ? location?.state?.roomTypeResourceList.length > 1
        ? location?.state?.roomTypeResourceList[1]?.bedsAvailable
        : 0
      : 0
  );

  const handleRoom1NameListener = (evt) => {
    setRoom1Name(evt.target.value);
  };
  const handleRoom2NameListener = (evt) => {
    setRoom2Name(evt.target.value);
  };
  const handleRoom1CountListener = (evt) => {
    setRoom1Count(evt.target.value);
  };
  const handleRoom2CountListener = (evt) => {
    setRoom2Count(evt.target.value);
  };

  const handleOnSubmit = () => {
    const roomTypeResourceList = [];
    if (room1Name.length > 0 && room2Name.length > 0) {
      if (
        property?.roomTypeResourceList[0]?.id &&
        property?.roomTypeResourceList[1]?.id
      ) {
        roomTypeResourceList.push({
          id: property?.roomTypeResourceList[0]?.id,
          roomName: room1Name,
          bedsAvailable: room1Count,
        });
        roomTypeResourceList.push({
          id: property?.roomTypeResourceList[1]?.id,
          roomName: room2Name,
          bedsAvailable: room2Count,
        });
      } else {
        roomTypeResourceList.push({
          roomName: room1Name,
          bedsAvailable: room1Count,
        });
        roomTypeResourceList.push({
          roomName: room2Name,
          bedsAvailable: room2Count,
        });
      }
    } else if (room1Name.length > 0 || room2Name.length > 0) {
      if (room1Name.length > 0) {
        if (property?.roomTypeResourceList[0]?.id) {
          roomTypeResourceList.push({
            id: property?.roomTypeResourceList[0]?.id,
            roomName: room1Name,
            bedsAvailable: room1Count,
          });
        } else {
          roomTypeResourceList.push({
            roomName: room1Name,
            bedsAvailable: room1Count,
          });
        }
      } else {
        if (property?.roomTypeResourceList[1]?.id) {
          roomTypeResourceList.push({
            id: property?.roomTypeResourceList[1]?.id,
            roomName: room2Name,
            bedsAvailable: room2Count,
          });
        } else {
          roomTypeResourceList.push({
            roomName: room2Name,
            bedsAvailable: room2Count,
          });
        }
      }
    }
    var finalVal = property;
    if (room1Name.length > 0 || room2Name.length > 0)
      finalVal["roomTypeResourceList"] = roomTypeResourceList;
    postPropData(finalVal).then((data) => {
      navigate("/admin/properties")
    });
  };
  return (
    <>
      <div className="list">
        <Sidebar />
        <div className="listContainer">
          <Grid align="center">
            <Paper elevation={10} style={paperStyle5}>
              <div>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <div>
                          <TextField
                            id="propertyName"
                            name="propertyName"
                            label="Property Name"
                            value={property?.propertyName}
                            onChange={handleListener}
                          />
                        </div>
                      </td>
                      <td>
                        <Box sx={flex_style}>
                          <TextField
                            id="location"
                            name="location"
                            label="Location"
                            value={property?.location}
                            onChange={handleListener}
                          />
                        </Box>
                      </td>
                      <td>
                        <Box sx={flex_style}>
                          <TextField
                            id="city"
                            name="city"
                            label="City"
                            value={property?.city}
                            onChange={handleListener}
                          />
                        </Box>
                      </td>
                      <td>
                        <Box sx={flex_style}>
                          <TextField
                            id="state"
                            name="state"
                            label="State"
                            value={property?.state}
                            onChange={handleListener}
                          />
                        </Box>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Box sx={flex_style}>
                          <TextField
                            id="zipCode"
                            name="zipCode"
                            label="Zip Code"
                            value={property?.zipCode}
                            onChange={handleListener}
                          />
                        </Box>
                      </td>
                      <td>
                        <Box sx={flex_style}>
                          <TextField
                            id="rating"
                            name="rating"
                            label="Rating"
                            value={property?.rating}
                            onChange={handleListener}
                          />
                        </Box>
                      </td>
                      <td>
                        <Box sx={flex_style}>
                          <TextField
                            id="status"
                            name="status"
                            label="Current Availablility"
                            value={property?.status}
                            onChange={handleListener}
                          />
                        </Box>
                      </td>
                      <td>
                        <Box sx={flex_style}>
                          <TextField
                            id="type"
                            name="type"
                            label="Property Type"
                            value={property?.type}
                            onChange={handleListener}
                          />
                        </Box>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <Box sx={flex_style}>
                          <TextField
                            id="descriptionTitle"
                            name="descriptionTitle"
                            label="Description Text Title"
                            value={property?.descriptionTitle}
                            onChange={handleListener}
                          />
                        </Box>
                      </td>
                      <td>
                        <Box sx={flex_style}>
                          <TextField
                            id="description"
                            name="description"
                            label="Property description"
                            value={property?.description}
                            onChange={handleListener}
                          />
                        </Box>
                      </td>
                      <td>
                        <Box sx={flex_style}>
                          <TextField
                            id="highlightTitle"
                            name="highlightTitle"
                            label="Property Highlights Title"
                            value={property?.highlightTitle}
                            onChange={handleListener}
                          />
                        </Box>
                      </td>
                      <td>
                        <Box sx={flex_style}>
                          <TextField
                            id="highlightDescription"
                            name="highlightDescription"
                            label="Highlights Description"
                            value={property?.highlightDescription}
                            onChange={handleListener}
                          />
                        </Box>
                      </td>
                    </tr>
                    <tr></tr>
                    <tr>
                      <td>
                        <Box sx={flex_style}>
                          <TextField
                            id="price"
                            name="price"
                            label="Price"
                            type="number"
                            value={property?.price}
                            onChange={handleListener}
                          />
                        </Box>
                      </td>
                      <td>
                        <Box sx={flex_style}>
                          <TextField
                            id="propertyFacilities"
                            name="propertyFacilities"
                            label="Room Facilities"
                            value={property?.propertyFacilities}
                            onChange={handleListener}
                          />
                        </Box>
                      </td>
                      <td>
                        <Box sx={flex_style}>
                          <TextField
                            id="availableFrom"
                            name="availableFrom"
                            label="Available From(YYYY-MM-DD)"
                            value={property?.availableFrom}
                            onChange={handleListener}
                          />
                        </Box>
                      </td>
                      <td>
                        <Box sx={flex_style}>
                          <TextField
                            id="availableTo"
                            name="availableTo"
                            label="Available To(YYYY-MM-DD)"
                            value={property?.availableTo}
                            onChange={handleListener}
                          />
                        </Box>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Box sx={flex_style}>
                          <TextField
                            id="imageSrc"
                            name="imageSrc"
                            label="Primary Image"
                            value={property?.imageSrc}
                            onChange={handleListener}
                          />
                        </Box>
                      </td>
                      <td>
                        <Box sx={flex_style}>
                          <TextField
                            id="imageSource1"
                            name="imageSource1"
                            label="Description img1"
                            value={property?.imageSource1}
                            onChange={handleListener}
                          />
                        </Box>
                      </td>
                      <td>
                        <Box sx={flex_style}>
                          <TextField
                            id="imageSource2"
                            name="imageSource2"
                            label="Description img2"
                            value={property?.imageSource2}
                            onChange={handleListener}
                          />
                        </Box>
                      </td>
                      <td>
                        <Box sx={flex_style}>
                          <TextField
                            id="imageSource3"
                            name="imageSource3"
                            label="Description img3"
                            value={property?.imageSource3}
                            onChange={handleListener}
                          />
                        </Box>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Box sx={flex_style}>
                          <TextField
                            id="imageSource4"
                            name="imageSource4"
                            label="Description img4"
                            value={property?.imageSource4}
                            onChange={handleListener}
                          />
                        </Box>
                      </td>
                      <td>
                        <Box sx={flex_style}>
                          <TextField
                            id="room1"
                            name="room1"
                            label="Room 1 Name"
                            value={room1Name}
                            onChange={handleRoom1NameListener}
                          />
                        </Box>
                      </td>
                      <td>
                        <Box sx={flex_style}>
                          <TextField
                            id="room2"
                            name="room2"
                            label="Room 2 Name"
                            value={room2Name}
                            onChange={handleRoom2NameListener}
                          />
                        </Box>
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>
                        <Box sx={flex_style}>
                          <TextField
                            id="room1"
                            name="room1"
                            type="number"
                            label="Room 1 Bed Count"
                            value={room1Count}
                            onChange={handleRoom1CountListener}
                          />
                        </Box>
                      </td>
                      <td>
                        <Box sx={flex_style}>
                          <TextField
                            id="room1"
                            name="room1"
                            type="number"
                            label="Room 2 Bed Count"
                            value={room2Count}
                            onChange={handleRoom2CountListener}
                          />
                        </Box>
                      </td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>
                        {!location?.state && (
                          <Box sx={flex_style}>
                            <Button
                              variant="contained"
                              onClick={handleOnSubmit}
                            >
                              Create Property
                            </Button>
                          </Box>
                        )}
                        {location?.state && (
                          <Box sx={flex_style}>
                            <Button
                              variant="contained"
                              onClick={handleOnSubmit}
                            >
                              Save
                            </Button>
                          </Box>
                        )}
                      </td>
                      <td>
                        <Box sx={flex_style}>
                          <Button
                            variant="contained"
                            onClick={navigateToHomePage}
                          >
                            Back
                          </Button>
                        </Box>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Paper>
          </Grid>
        </div>
      </div>
    </>
  );
}
