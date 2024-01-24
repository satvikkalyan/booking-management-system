import React, {useState} from "react"
import "./searchBar.css"
import TextField from "@mui/material/TextField";
import CustomButton from "../customButton/CustomButton";
import {InputAdornment} from "@mui/material";
import PeopleIcon from '@mui/icons-material/People';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import {useNavigate} from "react-router-dom";
import {useBookingDetails, useUpdateBookingDetails} from "../../../context/BookingDetails";
import {fetchProperties} from "../../../service/propertiesService";

const SearchBar = () => {
    const today = new Date();
    const navigate = useNavigate();
    const bookingDetails = useBookingDetails()
    const setBookingDetails = useUpdateBookingDetails()
    const formattedToday = today.toLocaleDateString('en-US', {month: '2-digit', day: '2-digit', year: 'numeric'});

    const [formFields, setFormFields] = useState({
        adult: "",
        destination: "",
        toDate: "",
        fromDate: formattedToday,
        toDateError: false,
        fromDateError: false,
        destinationError: false,
        adultError: false,
    });

    const handleChange = (field, value) => {
        setFormFields({
            ...formFields,
            [field]: value,
            [`${field}Error`]: false,
        });
    };

    const handleSearch = async () => {
        const { fromDate, toDate, adult, destination } = formFields;

        for (const field in formFields) {
            if (!formFields[field] && field !== "toDateError" && field !== "fromDateError" && field !== "destinationError" && field !== "adultError") {
                setFormFields({
                    ...formFields,
                    [`${field}Error`]: true,
                });
                return;
            }
        }

        const fromDateObj = new Date(fromDate);
        const toDateObj = new Date(toDate);
        setFormFields({
            ...formFields,
            toDateError: false,
        });

        bookingDetails.fromDate = fromDate
        bookingDetails.toDate = toDate
        bookingDetails.adult = adult
        bookingDetails.destination = destination
        bookingDetails.properties = await fetchProperties({
            "destination": destination,
            "startDate": fromDate,
            "endDate": toDate,
            "numberOfBeds": adult
        })
        if (fromDateObj <= toDateObj) {
            setBookingDetails(bookingDetails)
            navigate("/hotels", {
                state: {
                    pageInfo: {
                        currentPage: 'filteredProperties'
                    }
                },

            })
        } else {
            setFormFields({
                ...formFields,
                toDateError: true,
            });        }
    }
    return (<div className={"searchBar-outer"}>
        <div className={"search-bar-outline"}>
            <div className={"search-item"}>
                <TextField InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <FmdGoodIcon style={{ fontSize: 'medium' }}/>
                        </InputAdornment>
                    ),
                    style: {
                        height: '40px',
                        fontSize: "small"
                    },
                }}
                           InputLabelProps={{
                               style: {
                                   fontSize: 'medium',
                               },
                           }}
                           id="destination-input"
                           label="Destination"
                           variant="outlined"
                           value={formFields.destination}
                           onChange={(e) => handleChange("destination", e.target.value)}
                           error={formFields.destinationError}
                />

            </div>
            <div className={"search-item"}>
                <TextField InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <CalendarMonthIcon style={{ fontSize: 'medium' }}/>
                        </InputAdornment>
                    ),
                    style: {
                        height: '40px',
                        fontSize: "small"
                    },
                }}
                           InputLabelProps={{
                               style: {
                                   fontSize: 'medium',
                               },
                           }}
                           id="from-date-input"
                           label="From Date"
                           variant="outlined"
                           value={formFields.fromDate}
                           onChange={(e) => handleChange("fromDate", e.target.value)}
                           error={formFields.fromDateError}
                />
                <span id={"separator-span"}> - </span>
                <TextField InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <CalendarMonthIcon style={{ fontSize: 'medium' }}/>
                        </InputAdornment>
                    ),
                    style: {
                        height: '40px',
                        fontSize: "small"
                    },
                }}
                           InputLabelProps={{
                               style: {
                                   fontSize: 'medium',
                               },
                           }}
                           id="to-date-input"
                           label="To Date"
                           variant="outlined"
                           value={formFields.toDate}
                           onChange={(e) => handleChange("toDate", e.target.value)}
                           error={formFields.toDateError}
                />
            </div>
            <div className={"search-item"}>
                <TextField InputProps={{
                    startAdornment: (
                        <InputAdornment position="start"  >
                            <PeopleIcon style={{ fontSize: 'medium' }} />
                        </InputAdornment>
                    ),
                    style: {
                        height: '40px',
                        fontSize: "small"
                    },
                    min: 1,
                }}
                           InputLabelProps={{
                               style: {
                                   fontSize: 'medium',
                               },
                           }}
                           id="number-of-adults"
                           type={"number"}
                           label="Number of Adults"
                           variant="outlined"
                           value={formFields.adult}
                           onChange={(e) => handleChange("adult", e.target.value)}
                           error={formFields.adultError}
                />
            </div>
            <div className={"search-item"}>
                <CustomButton buttonName={"Search"} onClick={handleSearch} className={"search-button"}/>
            </div>
        </div>
    </div>)
}

export default SearchBar;