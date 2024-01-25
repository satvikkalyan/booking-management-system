import React, { useState, useRef } from "react";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
import Grid from "@mui/material/Grid";
import "./ConfirmationPage.css";
import Paper from "@mui/material/Paper";
import { paperStyle } from "../../../components/utility/constants";
import Button from "@mui/material/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { useLoginDet } from "../../../context/UserContext";
import QRCode from "react-qr-code";
import ReactToPrint from "react-to-print";
import {useBookingDetails} from "../../../context/BookingDetails";
import CustomButton from "../../../components/common-components/customButton/CustomButton";

function ConfirmationPage() {
  const navigate = useNavigate();
  const bookingDetails = useBookingDetails()
  console.log(bookingDetails)
  const currentLoggedInUser = useLoginDet();
  const [isOnSiteEmp] = useState(currentLoggedInUser?.onSiteEmployee);
  const { width, height } = useWindowSize();
  const handleDownload = () => {
    console.log(componentRef);
  };
  const navigateToHome = () => {
    navigate("/");
  };
  const timestamp = bookingDetails.paymentInformation?.transactionId || Date.now();

  const dateObject = new Date(timestamp);

  const dateFormat = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })

  const bookingDetails_ = {
    bookingID: bookingDetails.paymentInformation?.transactionId || Date.now().toString(),
    bookingDate: dateFormat.format(bookingDetails.paymentInformation?.transactionId) || Date.now(),
    givenName:
      currentLoggedInUser?.firstName?.length > 0
        ? currentLoggedInUser?.firstName
        : "Zoro",
    lastName:
      currentLoggedInUser?.lastName?.length > 0
        ? currentLoggedInUser?.lastName
        : "Moss Head",
    propName: bookingDetails.propertyName || "Hello Hotel",
    propAddress: bookingDetails.propertyAddress || "Hello Hotel",
    contactNumber: "8123456678",
    paymentType: bookingDetails.isCreditCard ? "Credit Card":"Cash",
    transactionID: bookingDetails.paymentInformation?.transactionId || Date.now().toString(),
  };
  console.log(bookingDetails_)
  const componentRef = useRef();
  return (
    <>
      <Confetti width={width} height={height} />
      <div className={"confirmation-container"}>
        <div className={"confirmation-QR"}>
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
                  <QRCode value={bookingDetails_.bookingID?.toString()}/>
                </td>
                <td className="td-label">Booking ID</td>
                <td>{bookingDetails_.bookingID}</td>
              </tr>
              <tr>
                <td className="td-label">Booking Date</td>
                <td>{bookingDetails_.bookingDate}</td>
              </tr>
              <tr>
                <td className="td-label">Given Name</td>
                <td>{bookingDetails_.givenName}</td>
              </tr>
              <tr>
                <td className="td-label">Last Name</td>
                <td>{bookingDetails_.lastName}</td>
              </tr>

              <tr>
                <td colSpan={2} className="td-middle">
                  <h3>Property Details</h3>
                </td>
              </tr>
              <tr>
                <td className="td-label">Property Name</td>
                <td>{bookingDetails_.propName}</td>
              </tr>
              <tr>
                <td className="td-label">Property Address</td>
                <td>{bookingDetails_.propAddress}</td>
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
                <td>{bookingDetails_.paymentType}</td>
              </tr>
              <tr>
                <td className="td-label">Transaction ID</td>
                <td>{bookingDetails_.transactionID}</td>
              </tr>
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

                      <CustomButton className={"navigate-to-home-button"} buttonName={isOnSiteEmp ? "Print" : "Download"} onClick={handleDownload}/>

                    )}
                />
              </td>
              <td>
                <CustomButton className={"navigate-to-home-button"} buttonName={"Go to Home"} onClick={navigateToHome}/>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ConfirmationPage;
