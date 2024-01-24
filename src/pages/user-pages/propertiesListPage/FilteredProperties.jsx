import "./filteredProperties.css";
import {useLocation, useNavigate} from "react-router-dom";
import React, {useState, useEffect} from "react";
import {properties} from "../../../resources/sampleData/properties";
import SearchItem from "../../../components/user-components/searchItem/SearchItem";
import TextField from "@mui/material/TextField";
import CustomButton from "../../../components/common-components/customButton/CustomButton";
import {useBookingDetails, useUpdateBookingDetails} from "../../../context/BookingDetails";

export const FilteredProperties = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const bookingDetails = useBookingDetails()
    // const filteredProperties = properties
    // const properties = bookingDetails?.properties
    const [date, setDate] = useState([null]);
    const [searchData] = useState(location?.state);
    const [openDate, setOpenDate] = useState(false);
    useEffect(()=>
        {
            //API CAll to Get Properties

        },[]
    )
    const handleSearch = () => {

    };
    return (
        <div className={"hotels-view-container"}>
            <div className={"filter-box-container"}>
                <div className="listSearch">
                    <h1 className="lsTitle">Filter</h1>
                    <div className="lsItem">
                        <div className="lsOptions">
                            <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                                <TextField style={{
                                    height: '30px',
                                    maxWidth: '80px',
                                }}
                                           InputProps={{
                                               style: {
                                                   height: '30px',
                                               },
                                               min: 1,
                                           }}

                                           type="number" id="min-price-input" variant="outlined"/>
                            </div>
                            <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                                <TextField style={{
                                    height: '30px',
                                    maxWidth: '80px',
                                }}
                                           InputProps={{
                                               style: {
                                                   height: '30px',
                                               },
                                               min: 1,
                                           }}

                                    type="number"
                                    id="max-price-input"
                                    variant="outlined"
                                />

                            </div>
                            <div className="lsOptionItem">
                                <span className="lsOptionText">Room</span>
                                <TextField style={{
                                    height: '30px',
                                    maxWidth: '80px',
                                }}
                                           InputProps={{
                                               style: {
                                                   height: '30px',
                                               },
                                               min: 1,
                                           }}

                                           type="number" id="rooms-input"
                                           placeholder={searchData?.adult ? searchData?.adult : "1"} variant="outlined"/>
                            </div>
                        </div>
                    </div>
                    <div className={"lsItem-button"}>
                        <CustomButton className="explore-button" buttonName={"Search"} onClick={handleSearch}/>
                    </div>
                </div>

            </div>
            <div className={"hotels-display-container"}>
                <div className="listContainer">
                        <div className="listResult">
                            {properties.length > 0 &&
                                properties.map((item, index) => {
                                    return <SearchItem props={{"item": item, "date": date}} key={item.id}/>;
                                })}
                            {properties.length === 0 && (
                                <>
                                    <table>
                                        <tbody>
                                        <tr>
                                            <td style={{textAlign: "center"}}>
                                                <h3>Oops! No properties Found!</h3>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style={{textAlign: "center"}}>
                                                <CustomButton className="home-page-navigate" buttonName={"Go to Home Page"} onClick={() => navigate("/")}/>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </>
                            )}
                        </div>
                </div>
            </div>
            <div className={"filter-box-container"}>

            </div>

        </div>
    );
};