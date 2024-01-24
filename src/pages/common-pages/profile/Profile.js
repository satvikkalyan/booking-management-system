import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import placeholderpic from "../../../resources/images/userprofile.jpeg";
import Box from "@mui/material/Box";
import "./Profile.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { flex_style, paperStyle,bookingsColumns } from "../../../components/utility/constants";
import { useLoginDet } from "../../../context/UserContext";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import Datatable from "../../../components/admin-components/datatable/Datatable";
import { bookingRows } from "../../../resources/sampleData/sampleBookings";
import {
  getProperties,
  getUsersByEmail,getPromotions
} from "../../../components/utility/fetchCalls";
export default function Profile() {
  const userDetails = useLoginDet();
  const navigate = useNavigate();
  const [isEditClicked, setIsEditClicked] = useState(false);
  const [user, setUser] = useState(userDetails);
  const isOnsiteEmployee = userDetails.onSiteEmployee;
  const backUpvalue = { ...user };
  const [bookingData, setBookingData] = useState([]);
  const navigateTohomePage = () => {
    navigate("/");
  };
  const onEditClicked = () => {
    setIsEditClicked(true);
  };
  const onSaveClicked = () => {
    setIsEditClicked(false);
  };
  const handleListener = (evt) => {
    const value = evt.target.value;
    setUser({
      ...user,
      [evt.target.name]: value,
    });
  };

  const [promotions,setPromotions] = useState([
    {
      id: 1,
      promotionMessage: "New User 10% off",
      promotionTitle: "NEWUSER10",
      discount:"20"
    },
    {
      id: 1,
      promotionMessage: "New User 30% off",
      promotionTitle: "NEWUSER30",
      discount:"20"

    },
    {
      id: 1,
      promotionMessage: "New User 40% off",
      promotionTitle: "NEWUSER40",
      discount:"20"

    },
  ])
  useEffect(() => {
    if (bookingData.length == 0 && userDetails?.email?.length>0) {
      getProperties().then((data) => {
        var bookings = {};
        for (var x = 0; x < data?.length; x++) {
          const bookingResources = data[x]?.bookingResources;
          var booking = {};
          for (var y = 0; y < bookingResources?.length; y++) {
            booking = {};
            const bookingItem = bookingResources[y];
            booking.id = bookingItem.id;
            booking.occupancy = bookingItem.occupancy;
            booking.status = bookingItem.status;
            booking.paymentType = bookingItem.paymentType;
            booking.bookingTimestamp = bookingItem.bookingTimestamp;
            booking.propertyName = data[x].propertyName;
            booking.imageSrc = data[x].imageSrc;
            booking.address = data[x].location;
            booking.userId = userDetails.id
            bookings[bookingItem.id] = booking;
          }
          const bookingsArray = Object.values(bookings);
          getUsersByEmail(userDetails.email).then((data) => {
            var currenUserBookings = [];
            for (var x = 0; x < data?.bookingResources?.length; x++) {
              var br = data.bookingResources[x];
              if (br) {
                currenUserBookings.push(bookings[br.id]);
              }
            }
            if(!isOnsiteEmployee)
            setBookingData(currenUserBookings);
            else
            setBookingData(bookingsArray)
          });
        }
      });
    }
    getPromotions().then((data)=>{
      setPromotions(data)
    })
    return () => {};
  }, []);

  return (
    <>{
      isOnsiteEmployee && (
        <>
          <Grid align="center">
            <Paper elevation={10} style={paperStyle}>
              <h3>All Bookings</h3>
                <Datatable
          props={{
            entity: "OS-DB",
            cols: bookingsColumns,
            data: bookingData,
          }}
        />

            </Paper>
          </Grid>
          <Grid align="center">
            <Paper elevation={10} style={paperStyle}>
              <h3>Promotions Available to Customers</h3>
              <table>
                <tbody>
                  {promotions.map((row) => {
                    return (
                      <tr key={row.id+"Promotions"}>
                          <td className="td-width-start">
                            <AutoAwesomeIcon fontSize="small" />
                          </td>
                          <td className="td-width-end">
                            {row.promotionMessage}!!! With Discount {row.discount}% <b>Apply Code:</b><i>{row.promotionTitle}</i>
                          </td>
                        </tr>
                    );
                  })}
                </tbody>
              </table>
            </Paper>
          </Grid>
        </>
      )
    }
    {!isOnsiteEmployee && (
      <Grid align="center">
        <Paper elevation={10} style={paperStyle}>
          <div>
            <table>
              <tbody>
                <tr>
                  <td rowSpan={3}>
                    <div>
                      <img src={placeholderpic} alt="Hi" />
                    </div>
                  </td>
                  <td>
                    <Box sx={flex_style}>
                      <TextField
                        id="firstname"
                        name="firstName"
                        label="First Name"
                        value={user?.firstName}
                        onChange={handleListener}
                        disabled={!isEditClicked}
                      />
                    </Box>
                  </td>
                  <td>
                    <Box sx={flex_style}>
                      <TextField
                        id="lastname"
                        name="lastName"
                        label="Last Name"
                        value={user?.lastName}
                        disabled={!isEditClicked}
                        onChange={handleListener}
                      />
                    </Box>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Box sx={flex_style}>
                      <TextField
                        id="gender"
                        name="gender"
                        label="Gender"
                        value={user?.gender}
                        disabled={!isEditClicked}
                        onChange={handleListener}
                      />
                    </Box>
                  </td>
                  <td>
                    <Box sx={flex_style}>
                      <TextField
                        id="age"
                        name="age"
                        label="Age"
                        value={user?.age}
                        disabled={!isEditClicked}
                        onChange={handleListener}
                      />
                    </Box>
                  </td>
                </tr>

                <tr>
                  <td>
                    <Box sx={flex_style}>
                      <TextField
                        id="mobilenumber"
                        name="mobile"
                        label="Mobile Number"
                        value={user?.mobile}
                        disabled={!isEditClicked}
                        onChange={handleListener}
                      />
                    </Box>
                  </td>
                  <td>
                    <Box sx={flex_style}>
                      <TextField
                        id="email"
                        name="email"
                        label="Email"
                        value={user?.email}
                        disabled={!isEditClicked}
                        onChange={handleListener}
                      />
                    </Box>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Box sx={flex_style}>
                      <Button variant="contained" disabled={!isEditClicked}>
                        Upload Image
                      </Button>
                    </Box>
                  </td>
                  <td>
                    <Box sx={flex_style}>
                      <TextField
                        id="userrating"
                        name="userrating"
                        label="My Rating"
                        value={user?.userrating}
                        disabled={true}
                        onChange={handleListener}
                      />
                    </Box>
                  </td>
                  <td rowSpan={3}>
                    <Box sx={flex_style}>
                      <TextField
                        id="address"
                        name="address"
                        label="Address"
                        value={user?.address}
                        multiline
                        rows={3}
                        disabled={!isEditClicked}
                        onChange={handleListener}
                      />
                    </Box>
                  </td>
                </tr>
                {!isOnsiteEmployee && (
                  <>
                    <tr>
                      <td>
                        <Box sx={flex_style}>
                          <TextField
                            id="creditcardName"
                            name="creditcardName"
                            label="Name on Credit Card"
                            value={user?.creditcardName}
                            disabled={!isEditClicked}
                            onChange={handleListener}
                          />
                        </Box>
                      </td>
                      <td>
                        <Box sx={flex_style}>
                          <TextField
                            id="expirydate"
                            name="expirydate"
                            label="Expiry Date"
                            value={user?.expirydate}
                            disabled={!isEditClicked}
                            onChange={handleListener}
                          />
                        </Box>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Box sx={flex_style}>
                          <TextField
                            id="creditcardnumber"
                            name="creditcardnumber"
                            label="Credit Card Number"
                            value={user?.creditcardnumber}
                            disabled={!isEditClicked}
                            onChange={handleListener}
                          />
                        </Box>
                      </td>
                      <td>
                        <Box sx={flex_style}>
                          <TextField
                            id="interests"
                            name="interests"
                            label="User Interests"
                            value={user?.interests}
                            multiline
                            rows={1}
                            disabled={!isEditClicked}
                            onChange={handleListener}
                          />
                        </Box>
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>
                        {!isEditClicked && (
                          <Box sx={flex_style}>
                            <Button variant="contained" onClick={onEditClicked}>
                              Edit
                            </Button>
                          </Box>
                        )}
                        {isEditClicked && (
                          <Box sx={flex_style}>
                            <Button variant="contained" onClick={onSaveClicked}>
                              Save
                            </Button>
                          </Box>
                        )}
                      </td>
                      <td>
                        {isEditClicked && (
                          <Box sx={flex_style}>
                            <Button
                              variant="contained"
                              onClick={() => {
                                setIsEditClicked(false);
                                setUser(backUpvalue);
                              }}
                            >
                              Cancel
                            </Button>
                          </Box>
                        )}
                        {!isEditClicked && (
                          <Box sx={flex_style}>
                            <Button
                              variant="contained"
                              onClick={navigateTohomePage}
                            >
                              Back
                            </Button>
                          </Box>
                        )}
                      </td>
                    </tr>
                  </>
                )}
              </tbody>
            </table>
          </div>
        </Paper>
      </Grid>
      )}
      {!isOnsiteEmployee && (
        <>
          <Grid align="center">
            <Paper elevation={10} style={paperStyle}>
              <h3>My Bookings</h3>
                <Datatable
          props={{
            entity: "Profile",
            cols: bookingsColumns,
            data: bookingData,
          }}
        />

            </Paper>
          </Grid>
          <Grid align="center">
            <Paper elevation={10} style={paperStyle}>
              <h3>Promotions</h3>
              <table>
                <tbody>
                  {promotions.map((row,index) => {
                    return (
                        <tr key={index+"Promotions"}>
                          <td className="td-width-start">
                            <AutoAwesomeIcon fontSize="small" />
                          </td>
                          <td className="td-width-end">
                            {row.promotionMessage}!!! With Discount {row.discount}% <b>Apply Code:</b><i>{row.promotionTitle}</i>
                          </td>
                        </tr>
                    );
                  })}
                </tbody>
              </table>
            </Paper>
          </Grid>
        </>
      )}
    </>
  );
}
