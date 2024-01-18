import React, {useState} from "react"
import "./searchBar.css"
import TextField from "@mui/material/TextField";
import CustomButton from "../customButton/CustomButton";
import {InputAdornment} from "@mui/material";
import PeopleIcon from '@mui/icons-material/People';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

const SearchBar = () => {
    const today = new Date();
    const formattedToday = today.toLocaleDateString('en-US', {month: '2-digit', day: '2-digit', year: 'numeric'});
    const [adult, setAdult] = useState()
    const [destination, setDestination] = useState()
    const [toDate, setToDate] = useState()
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

    return (<div className={"searchBar-outer"}>
        <div className={"search-bar-outline"}>
            <div className={"search-item"}>
                <TextField InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <FmdGoodIcon/>
                        </InputAdornment>
                    ),
                    style: {
                        height: '40px',
                        fontSize: "small"
                    },
                }}
                           InputLabelProps={{
                               style: {
                                   fontSize: 'small',
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
                            <CalendarMonthIcon/>
                        </InputAdornment>
                    ),
                    style: {
                        height: '40px',
                        fontSize: "small"
                    },
                }}
                           InputLabelProps={{
                               style: {
                                   fontSize: 'small',
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
                            <CalendarMonthIcon/>
                        </InputAdornment>
                    ),
                    style: {
                        height: '40px',
                        fontSize: "small"
                    },
                }}
                           InputLabelProps={{
                               style: {
                                   fontSize: 'small',
                               },
                           }}
                           id="to-date-input"
                           label="To Date"
                           variant="outlined"
                           value={toDate}
                           onChange={handleToDate}
                />
            </div>
            <div className={"search-item"}>

                <TextField InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <PeopleIcon/>
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
                                   fontSize: 'small',
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
                <CustomButton buttonName={"Search"} onclick={() => {
                }} className={"search-button"}/>
            </div>
        </div>
    </div>)
}

export default SearchBar;