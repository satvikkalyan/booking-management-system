import React from "react"
import "./searchBar.css"
import TextField from "@mui/material/TextField";
import CustomButton from "../customButton/CustomButton";
import {InputAdornment} from "@mui/material";
import PeopleIcon from '@mui/icons-material/People';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
const SearchBar= ()=>{

    return (<div className={"searchBar-outer"}>
        <div className={"search-bar-outline"}>
            <div className={"search-item"}>
                <TextField

                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <FmdGoodIcon />
                            </InputAdornment>
                        ),
                    }}
                    id="destination-input" label="Destination" variant="outlined"/>
            </div>
            <div className={"search-item"}>
                <TextField
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <CalendarMonthIcon />
                            </InputAdornment>
                        ),
                    }}

                    id="from-date-input"  value={new Date()}  variant="outlined"/>
                <span id={"separator-span"}> - </span>
                <TextField
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <CalendarMonthIcon />
                            </InputAdornment>
                        ),
                    }}

                    id="to-date-input" label="To Date" variant="outlined"/>
            </div>
            <div className={"search-item"}>
                <TextField InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <PeopleIcon />
                        </InputAdornment>
                    ),
                }} id="number-of-adults" label="Number of Adults" variant="outlined"/>
            </div>
            <div className={"search-item"}>
                <CustomButton   buttonName={"Search"} onclick={()=>{}} className={"search-button"}/>
            </div>
        </div>
    </div>)
}

export default SearchBar;