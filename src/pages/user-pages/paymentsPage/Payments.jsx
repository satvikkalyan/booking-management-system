import "./Payments.css";
import {useNavigate} from "react-router-dom";
import {Fragment, useState} from "react";
import TextField from "@mui/material/TextField";
import {useLoginDet} from "../../../context/UserContext";
import CustomButton from "../../../components/common-components/customButton/CustomButton";
import {useBookingDetails, useUpdateBookingDetails} from "../../../context/BookingDetails";
import {makePayment} from "../../../service/PaymentService";

const Payments = () => {
    const userDetails = useLoginDet();
    const navigate = useNavigate();
    const bookingDetails = useBookingDetails()
    const setBookingDetails = useUpdateBookingDetails()
    const transactionId = Date.now().toString()
    const [paymentData, setPaymentData] = useState({
        transactionId: transactionId,
        isCreditCard: true,
        givenName: userDetails?.firstName || "",
        lastName: userDetails?.lastName || "",
        cardNumber: "",
        expiryDate: "",
        cvv: "",
        email: userDetails?.email || "",
    });
    const navigateToHomePage = () => {
        navigate("/", {
            state: {
                pageInfo: {
                    currentPage: 'Home'
                }
            },

        });
    };
    let [isCreditCard, setIsCreditCard] = useState(true);
    const navigateToConfirmPage = async () => {
        bookingDetails.paymentInformation = paymentData
        setBookingDetails(bookingDetails)
        const paymentResponse = await makePayment(bookingDetails,userDetails)
            navigate("/confirm", {
                state: {
                    pageInfo: {
                        currentPage: 'Confirm'
                    }
                },
            });
    };

    const handleInputChange = (field, value) => {
        setPaymentData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };
    const labelStyles = {
        fontSize: "12px",
    };

    const isRequiredFieldsEmpty = () => {
        const requiredFields = ["givenName", "lastName", "email"];

        if (isCreditCard) {
            requiredFields.push("cardNumber", "cvv", "expiryDate");
        }

        return requiredFields.some((field) => !paymentData[field]?.length);
    };

    return (
        <div className={"payments-container"}>
            <div className={"payments-form-container"}>
                <h4>Payment Details</h4>
                <div className={"payments-form"}>
                    <div className="row">
                        <h5>Payment Details</h5>
                        <div className="input-group">
                            <TextField
                                id="outlined-basic"
                                label="Given Name"
                                variant="outlined"
                                fullWidth
                                value={paymentData.givenName}
                                onChange={(e) => handleInputChange("givenName", e.target.value)}
                                InputLabelProps={{
                                    style: labelStyles,
                                }}
                                required={true}
                            />
                        </div>
                        <div className="input-group">
                            <TextField
                                id="outlined-basic"
                                label="Last Name"
                                variant="outlined"
                                fullWidth
                                value={paymentData.lastName}
                                onChange={(e) => handleInputChange("lastName", e.target.value)}
                                InputLabelProps={{
                                    style: labelStyles,
                                }}
                                required={true}
                            />
                        </div>
                        <div className="input-group">
                            <TextField
                                id="outlined-basic"
                                label="Email"
                                variant="outlined"
                                fullWidth
                                value={paymentData.email}
                                onChange={(e) => handleInputChange("email", e.target.value)}
                                InputLabelProps={{
                                    style: labelStyles,
                                }}
                                required={true}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <h5>Card Details</h5>
                        <div className="input-group">
                            <input
                                id="payment-method-card"
                                type="radio"
                                name="payment-method"
                                value="card"
                                checked={true}
                                onChange={() => {
                                }}
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
                                        value={paymentData.cardNumber}
                                        onChange={(e) => handleInputChange("cardNumber", e.target.value)}
                                        InputLabelProps={{
                                            style: labelStyles,
                                        }}
                                        required={true}
                                    />{" "}
                                </div>
                                <div className="input-group">
                                    <TextField
                                        id="outlined-basic"
                                        label="CVV"
                                        variant="outlined"
                                        value={paymentData.cvv}
                                        onChange={(e) => handleInputChange("cvv", e.target.value)}
                                        InputLabelProps={{
                                            style: labelStyles,
                                        }}
                                        required={true}
                                    /> <TextField
                                    id="outlined-basic"
                                    label="Expiry Date"
                                    variant="outlined"
                                    value={paymentData.expiryDate}
                                    onChange={(e) => handleInputChange("expiryDate", e.target.value)}
                                    InputLabelProps={{
                                        style: labelStyles,
                                    }}
                                    required={true}
                                />
                                </div>
                            </Fragment>
                        )}
                    </div>
                    <div className="row">
                        <div className="button-group">
                            <div className="flex-child magenta">
                                <CustomButton
                                    disabled={isRequiredFieldsEmpty()}
                                    className={"payment-submit"}
                                    buttonName={"Continue"}
                                    onClick={navigateToConfirmPage}
                                />
                            </div>
                            <div className="flex-child green">
                                <CustomButton className={"payment-cancel"} buttonName={"Cancel"}
                                              onClick={navigateToHomePage}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Payments;
