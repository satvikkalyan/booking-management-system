import "./filteredProperties.css";
import {useLocation, useNavigate} from "react-router-dom";
import React, {useState, useEffect} from "react";
import {properties} from "../../../resources/sampleData/properties";
import SearchItem from "../../../components/user-components/searchItem/SearchItem";
import TextField from "@mui/material/TextField";
import CustomButton from "../../../components/common-components/customButton/CustomButton";

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
                                           placeholder={options?.room ? options?.room : "1"} variant="outlined"/>
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
                            {filteredProps.length > 0 &&
                                filteredProps.map((item, index) => {
                                    return <SearchItem props={{"item": item, "date": date}} key={item.id}/>;
                                })}
                            {filteredProps.length === 0 && (
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
