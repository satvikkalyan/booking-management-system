import React, {useState} from "react";
import "./SearchBar.css"
import TextField from "@mui/material/TextField";
const SearchBar = () =>{
  return (
        <div id={"search-bar-div"}>
            <div id={"search-bar"}>
                <TextField id="destination-input" label="Destination" variant="outlined" />

            </div>
        </div>
    )
}

export default SearchBar;