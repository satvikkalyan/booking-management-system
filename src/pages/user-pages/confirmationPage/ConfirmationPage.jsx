import React, { useState, useRef } from "react";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
import Grid from "@mui/material/Grid";
import "./confirmationPage.css";
import Paper from "@mui/material/Paper";
import { paperStyle } from "../../../components/utility/constants";
import Button from "@mui/material/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { useLoginDet } from "../../../context/UserContext";
import QRCode from "react-qr-code";
import ReactToPrint from "react-to-print";

function ConfirmationPage() {
  const navigate = useNavigate();
  const location = useLocation();
  var current = new Date();
  var currentMonth = current.getMonth() + 1;
  if (currentMonth < 10) {
    currentMonth = "0" + currentMonth;
  }
  var currentDay = current.getDate();
  if (currentDay < 10) {
    currentDay = "0" + currentDay;
  }
  current = `${current.getFullYear()}-${currentMonth}-${currentDay}`;
  const currentLoggedInUser = useLoginDet();
  const [isOnSiteEmp] = useState(currentLoggedInUser.onSiteEmployee);
  const { width, height } = useWindowSize();
  const handleDownload = () => {
    console.log(componentRef);
  };
  const navigateToHome = () => {
    navigate("/");
  };
  const bookingDetails = {
    bookingID: location.state?.bookingJson?.bookingTimestamp,
    bookingDate: current,
    givenName:
      currentLoggedInUser?.firstName?.length > 0
        ? currentLoggedInUser?.firstName
        : "Zoro",
    lastName:
      currentLoggedInUser?.lastName?.length > 0
        ? currentLoggedInUser?.lastName
        : "Moss Head",
    propName: location?.state?.prevState?.hotelData?.propertyName?location?.state?.prevState?.hotelData?.propertyName:location?.state?.prevState?.hotelData?.hotelName,
    propAddress: location?.state?.prevState?.hotelData?.location?location?.state?.prevState?.hotelData?.location:location?.state?.prevState?.hotelData?.hotelAddress,
    contactNumber: "8123456678",
    paymentType: location.state?.bookingJson?.paymentType,
    transactionID: location?.state?.bookingJson?.bookingTimestamp,
  };
  const componentRef = useRef();
  return (
    <>
      <Confetti width={width} height={height} />
      <Grid align="center">
        <Paper elevation={10} style={paperStyle}>
          <div ref={componentRef}>
            <table>
              <tbody>
                <tr>
                  <td colSpan={3} className="td-center">
                    <h2>Booking Details</h2>
                  </td>
                </tr>
                <tr>
                  <td rowSpan={12} className={"qr-code"}>
                    <QRCode value={bookingDetails.bookingID} />
                  </td>
                  <td className="td-label">Booking ID</td>
                  <td>{bookingDetails.bookingID}</td>
                </tr>
                <tr>
                  <td className="td-label">Booking Date</td>
                  <td>{bookingDetails.bookingDate}</td>
                </tr>
                <tr>
                  <td className="td-label">Given Name</td>
                  <td>{bookingDetails.givenName}</td>
                </tr>
                <tr>
                  <td className="td-label">Last Name</td>
                  <td>{bookingDetails.lastName}</td>
                </tr>

                <tr>
                  <td colSpan={2} className="td-middle">
                    <h3>Property Details</h3>
                  </td>
                </tr>
                <tr>
                  <td className="td-label">Property Name</td>
                  <td>{bookingDetails.propName}</td>
                </tr>
                <tr>
                  <td className="td-label">Property Address</td>
                  <td>{bookingDetails.propAddress}</td>
                </tr>
                <tr>
                  <td className="td-label">Contact Number</td>
                  <td>{8919934222}</td>
                </tr>
                <tr>
                  <td colSpan={2} className="td-middle">
                    <h3>Transaction Details</h3>
                  </td>
                </tr>
                <tr>
                  <td className="td-label">Payment Type</td>
                  <td>{bookingDetails.paymentType}</td>
                </tr>
                <tr>
                  <td className="td-label">Transaction ID</td>
                  <td>{bookingDetails.transactionID}</td>
                </tr>
                {/* <tr>
                <td>
                  {" "}
                  {isOnSiteEmp && (
                    <Button variant="contained" onClick={handleDownload}>
                      Send to Confirmation to User
                    </Button>
                  )}
                  {!isOnSiteEmp && (
                    <Button variant="contained" onClick={handleDownload}>
                      Download
                    </Button>
                  )}
                </td>
                <td>
                  <Button variant="contained" onClick={navigateToHome}>
                    {" "}
                    Go to Home
                  </Button>
                </td>
              </tr> */}
              </tbody>
            </table>
          </div>
          <table>
            <tbody>
              <tr>
                <td width={"45%"}></td>
                <td>
                  <ReactToPrint
                    content={() => componentRef.current}
                    trigger={() => (
                      <Button variant="contained" onClick={handleDownload}>
                        {isOnSiteEmp ? "Print" : "Download"}
                      </Button>
                    )}
                  />
                </td>
                <td>
                  <Button variant="contained" onClick={navigateToHome}>
                    {" "}
                    Go to Home
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </Paper>
      </Grid>
    </>
  );
}

export default ConfirmationPage;
