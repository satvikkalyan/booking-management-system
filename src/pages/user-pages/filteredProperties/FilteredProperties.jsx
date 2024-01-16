import "./filteredProperties.css";
import {  useLocation, useNavigate } from "react-router-dom";
import React, { useState,useEffect } from "react";
import { properties } from "../../../resources/sampleData/properties";
import SearchItem from "../../../components/user-components/searchItem/SearchItem";
import Autocomplete from "@mui/material/Autocomplete";
import { cities } from "../../../resources/sampleData/cityList";
import TextField from "@mui/material/TextField";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import Button from "@mui/material/Button";
export const FilteredProperties = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const [destination, setDestination] = useState(location?.state?.destination);
  const [newDestination, setNewDestination] = useState("");
  const [newProps, setNewProps] = useState(properties);
  const [date, setDate] = useState([null]);
  const [options] = useState(location?.state?.options);
  const filteredProps = newProps
  const [openDate, setOpenDate] = useState(false);
  const handleSearch = () => {
    setDestination(newDestination);
  };
  return (
    <div>
      {/*<div className="listContainer">*/}
      {/*  <div className="listWrapper">*/}
      {/*    <div className="listSearch">*/}
      {/*      <h1 className="lsTitle">Search</h1>*/}
      {/*      <div className="lsItem">*/}
      {/*        <label>Destination</label>*/}
      {/*        <Autocomplete*/}
      {/*          disablePortal*/}
      {/*          id="combo-box-demo"*/}
      {/*          options={cities}*/}
      {/*          sx={{ width: "100%" }}*/}
      {/*          onChange={(event, newValue) => {*/}
      {/*            setNewDestination(newValue);*/}
      {/*          }}*/}
      {/*          renderInput={(params) => (*/}
      {/*            <TextField {...params} style={{ backgroundColor: "white" }} />*/}
      {/*          )}*/}
      {/*        />*/}
      {/*      </div>*/}
      {/*      <div className="lsItem">*/}
      {/*        <label>Check-in Date</label>*/}
      {/*        <span onClick={() => setOpenDate(!openDate)}>{`${format(*/}
      {/*          date[0].startDate,*/}
      {/*          "MM/dd/yyyy"*/}
      {/*        )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>*/}
      {/*        {openDate && (*/}
      {/*          <DateRange*/}
      {/*            onChange={(item) => setDate([item.selection])}*/}
      {/*            minDate={new Date()}*/}
      {/*            ranges={date}*/}
      {/*          />*/}
      {/*        )}*/}
      {/*      </div>*/}
      {/*      <div className="lsItem">*/}
      {/*        <label>Options</label>*/}
      {/*        <div className="lsOptions">*/}
      {/*          <div className="lsOptionItem">*/}
      {/*            <span className="lsOptionText">*/}
      {/*              Min price <small>per night</small>*/}
      {/*            </span>*/}
      {/*            <input type="number" className="lsOptionInput" />*/}
      {/*          </div>*/}
      {/*          <div className="lsOptionItem">*/}
      {/*            <span className="lsOptionText">*/}
      {/*              Max price <small>per night</small>*/}
      {/*            </span>*/}
      {/*            <input type="number" className="lsOptionInput" />*/}
      {/*          </div>*/}
      {/*          <div className="lsOptionItem">*/}
      {/*            <span className="lsOptionText">Adult</span>*/}
      {/*            <input*/}
      {/*              type="number"*/}
      {/*              min={1}*/}
      {/*              className="lsOptionInput"*/}
      {/*              placeholder={options?.adult ? options?.adult : "1"}*/}
      {/*            />*/}
      {/*          </div>*/}
      {/*          <div className="lsOptionItem">*/}
      {/*            <span className="lsOptionText">Children</span>*/}
      {/*            <input*/}
      {/*              type="number"*/}
      {/*              min={0}*/}
      {/*              className="lsOptionInput"*/}
      {/*              placeholder={options.children}*/}
      {/*            />*/}
      {/*          </div>*/}
      {/*          <div className="lsOptionItem">*/}
      {/*            <span className="lsOptionText">Room</span>*/}
      {/*            <input*/}
      {/*              type="number"*/}
      {/*              min={1}*/}
      {/*              className="lsOptionInput"*/}
      {/*              placeholder={options?.room ? options?.room : "1"}*/}
      {/*            />*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*      <Button variant="contained" type="button" onClick={handleSearch}>*/}
      {/*        Search*/}
      {/*      </Button>*/}
      {/*    </div>*/}
      {/*    <div className="listResult">*/}
      {/*      {filteredProps.length > 0 &&*/}
      {/*        filteredProps.map((item, index) => {*/}
      {/*          return <SearchItem props={{"item":item,"date":date}} key={item.id} />;*/}
      {/*        })}*/}
      {/*      {filteredProps.length === 0 && (*/}
      {/*        <>*/}
      {/*          <table>*/}
      {/*            <tbody>*/}
      {/*              <tr>*/}
      {/*                <td style={{ textAlign: "center" }}>*/}
      {/*                  <h3>Oops! No properties Found!</h3>*/}
      {/*                </td>*/}
      {/*              </tr>*/}
      {/*              <tr>*/}
      {/*                <td style={{ textAlign: "center" }}>*/}
      {/*                  <Button*/}
      {/*                    variant="contained"*/}
      {/*                    type="button"*/}
      {/*                    onClick={()=>navigate("/")}*/}
      {/*                  >*/}
      {/*                    Go to Home Page*/}
      {/*                  </Button>*/}
      {/*                </td>*/}
      {/*              </tr>*/}
      {/*            </tbody>*/}
      {/*          </table>*/}
      {/*        </>*/}
      {/*      )}*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
};
