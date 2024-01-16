import "./payments.css";
import { useLocation, useNavigate } from "react-router-dom";
import { Fragment, useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useLoginDet } from "../../../UserContext";
import { postDataToAPI, getDataFromAPI } from "../../utility/fetchCalls";
const Payments = () => {
  const userDetails = useLoginDet();
  let [isCreditCard, setIsCreditCard] = useState(true);
  const navigateToHomePage = () => {
    navigate("/");
  };
  const location = useLocation();
  let [bookingDets, setBookingDets] = useState(location.state);
  const navigate = useNavigate();
  const navigateToConfirmPage = () => {
    const date = Date.now().toString();
    const current = bookingDets.fromDate;
    var currentMonth = current.getMonth() + 1;
    if (currentMonth < 10) {
      currentMonth = "0" + currentMonth;
    }
    var currentDay = current.getDate();
    if (currentDay < 10) {
      currentDay = "0" + currentDay;
    }
    const next = bookingDets.toDate;
    var nextMonth = next.getMonth() + 1;
    if (nextMonth < 10) {
      nextMonth = "0" + nextMonth;
    }
    var nextDay = next.getDate();
    if (nextDay < 10) {
      nextDay = "0" + nextDay;
    }
    const bookingJson = {
      fromDate: `${current.getFullYear()}-${currentMonth}-${currentDay}`,
      toDate: `${next.getFullYear()}-${nextMonth}-${nextDay}`,
      occupancy: bookingDets.occupancy,
      paymentType: isCreditCard ? "Card" : "Cash",
      roomTypeCount: bookingDets.roomTypeCount,
      bookingTimestamp: date,
    };

    const detailsFilled =
      givenName.length > 0 && lastName.length > 0 && email.length > 0;
    if (detailsFilled) {
      if (isCreditCard) {
        if (
          cvv.length == 3 &&
          expiryDate.length == 5 &&
          cardNumber.length > 5
        ) {
          console.log(
            `https://bms-backend-spring-prelive.herokuapp.com/api/v1/bookings/${userDetails.id}/${bookingDets.hotelData.id}/`
          );
          postDataToAPI(
            `https://bms-backend-spring-prelive.herokuapp.com/api/v1/bookings/${userDetails.id}/${bookingDets.hotelData.id}/`,
            bookingJson
          ).then((data) => {
            navigate("/confirm", {
              state: { prevState: location.state, bookingJson: bookingJson },
            });
          });
        }
      } else {
        console.log(
          `https://bms-backend-spring-prelive.herokuapp.com/api/v1/bookings/${userDetails.id}/${bookingDets.hotelData.id}/`
        );

        postDataToAPI(
          `https://bms-backend-spring-prelive.herokuapp.com/api/v1/bookings/${userDetails.id}/${bookingDets.hotelData.id}/`,
          bookingJson
        ).then((data) => {
          navigate("/confirm", {
            state: { prevState: location.state, bookingJson: bookingJson },
          });
        });
      }
    }
  };
  const [isOk, setIsOk] = useState(false);
  const [givenName, setGivenName] = useState(userDetails?.firstName);
  const [lastName, setLastName] = useState(userDetails?.firstName);
  const [cardNumber, setCardNumber] = useState(
    userDetails?.cardDetailsResourceList[0]?.cardNumber
  );
  const [expiryDate, setExpiryDate] = useState(
    userDetails?.cardDetailsResourceList[0]?.cardExpiry
  );
  const [cvv, setCVV] = useState(userDetails?.cardDetailsResourceList[0]?.cvv);
  const [email, setEmail] = useState(userDetails?.email);
  useEffect(() => {
    if (givenName.length > 0 && lastName.length > 0 && email.length > 0) {
      if (isCreditCard) {
        if (
          cardNumber.length > 5 &&
          expiryDate.length >= 5 &&
          cvv.length === 3
        ) {
          setIsOk(true);
        } else {
          setIsOk(false);
        }
      } else {
        setIsOk(true);
      }
    } else {
      setIsOk(false);
    }
    return () => {};
  }, [givenName, lastName, email, cardNumber, expiryDate, cvv, isCreditCard]);

  const handleGivenNameChange = (e) => {
    setGivenName(e.target.value);
  };
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };
  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };
  const handleExpiryChange = (e) => {
    setExpiryDate(e.target.value);
  };
  const handleCVVChange = (e) => {
    setCVV(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <div className="payments container">
        <form>
          <div className="row">
            <h4>Payment Details</h4>
            <div className="input-group">
              <TextField
                id="outlined-basic"
                label="Given Name"
                variant="outlined"
                fullWidth
                value={givenName}
                onChange={handleGivenNameChange}
              />
            </div>
            <div className="input-group">
              <TextField
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                fullWidth
                value={lastName}
                onChange={handleLastNameChange}
              />
            </div>
            <div className="input-group">
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                fullWidth
                value={email}
                onChange={handleEmailChange}
              />
            </div>
          </div>
          <div className="row">
            <h4>Payment Details</h4>
            <div className="input-group">
              <input
                id="payment-method-card"
                type="radio"
                name="payment-method"
                value="card"
                checked={true}
                onChange={() => {}}
              />
              <label
                onClick={(e) => setIsCreditCard(true)}
                htmlFor="payment-method-card"
              >
                <span>
                  <i className="fa fa-cc-visa"></i>Credit Card
                </span>
              </label>
              <input
                id="payment-method-paypal"
                type="radio"
                name="payment-method"
                value="paypal"
              />
              <label
                onClick={(e) => setIsCreditCard(false)}
                htmlFor="payment-method-paypal"
              >
                {" "}
                <span>
                  <i className="fa fa-cc-paypal"></i>Cash at counter
                </span>
              </label>
            </div>
            {isCreditCard && (
              <Fragment>
                <div className="input-group">
                  <TextField
                    id="outlined-basic"
                    label="Card Number"
                    variant="outlined"
                    fullWidth
                    value={cardNumber}
                    onChange={handleCardNumberChange}
                  />{" "}
                </div>
                <div className="col-half">
                  <TextField
                    id="outlined-basic"
                    label="CVV"
                    variant="outlined"
                    value={cvv}
                    onChange={handleCVVChange}
                  />
                </div>
                <div className="col-half">
                  <div className="input-group">
                    <TextField
                      id="outlined-basic"
                      label="Expiry Date"
                      value={expiryDate}
                      variant="outlined"
                      onChange={handleExpiryChange}
                    />
                  </div>
                </div>
              </Fragment>
            )}
          </div>
          <div className="row">
            <div className="input-group"></div>
          </div>
        </form>
        {!isOk && (
          <span style={{ color: "red", marginLeft: "3%" }}>
            <b>Please Fill All the Fields</b>
          </span>
        )}
        <div className="flex-container">
          <div className="flex-child magenta">
            <Button
              style={{
                borderRadius: 15,
                backgroundColor: "navajowhite",
                padding: "18px 36px",
              }}
              variant="contained"
              fullWidth
              onClick={navigateToConfirmPage}
              disabled={!isOk}
            >
              Continue
            </Button>
          </div>
          <div className="flex-child green">
            <Button
              style={{
                borderRadius: 15,
                backgroundColor: "navajowhite",
                padding: "18px 36px",
              }}
              variant="contained"
              fullWidth
              onClick={navigateToHomePage}
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payments;
