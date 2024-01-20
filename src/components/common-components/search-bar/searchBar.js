import React, {useState} from "react"
import "./searchBar.css"
import TextField from "@mui/material/TextField";
import CustomButton from "../customButton/CustomButton";
import {InputAdornment} from "@mui/material";
import PeopleIcon from '@mui/icons-material/People';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import {useNavigate} from "react-router-dom";

const SearchBar = () => {
    const today = new Date();
    const navigate = useNavigate();
    const formattedToday = today.toLocaleDateString('en-US', {month: '2-digit', day: '2-digit', year: 'numeric'});
    const [adult, setAdult] = useState()
    const [destination, setDestination] = useState()
    const [toDate, setToDate] = useState()
    const [toDateError, setToDateError] = useState(false)
    const [fromDate, setFromDate] = useState(formattedToday)
    const handleAdultChange = (event) => {
        setAdult(event.target.value)
    }
    const handleFromDate = (event) => {
        setFromDate(event.target.value)
    }
    const handleToDate = (event) => {
        setToDate(event.target.value)
    }
    const handleDestination = (event) => {
        setDestination(event.target.value)
    }
    const handleSearch = () => {
        const fromDateObj = new Date(fromDate);
        const toDateObj = new Date(toDate);
        setToDateError(false)
        if (fromDateObj <= toDateObj ){
            navigate("/hotels",{
                state : {
                    toDate:toDate,
                    fromDate:fromDate,
                    adult:adult,
                    destination: destination,
                    pageInfo: {
                        currentPage: 'filteredProperties'
                    }
                },

            })
        }
        else{
            setToDateError(true)
        }
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
                           value={destination}
                           onChange={handleDestination}
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
                           value={fromDate}
                           onChange={handleFromDate}
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
                           value={toDate}
                           onChange={handleToDate}
                           error={toDateError}
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
                           value={adult}
                           onChange={handleAdultChange}
                />
            </div>
            <div className={"search-item"}>
                <CustomButton buttonName={"Search"} onClick={handleSearch} className={"search-button"}/>
            </div>
        </div>
    </div>)
}

export default SearchBar;