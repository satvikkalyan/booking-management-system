import "./PropertiesListPage.css";
import {useLocation, useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {properties} from "../../../resources/sampleData/properties";
import PropertyDetailCard from "../../../components/user-components/propertyDetailCard/PropertyDetailCard";
import TextField from "@mui/material/TextField";
import CustomButton from "../../../components/common-components/customButton/CustomButton";
import {useBookingDetails, useUpdateBookingDetails} from "../../../context/BookingDetails";

export const PropertiesListPage = () => {
    const navigate = useNavigate()
    const bookingDetails = useBookingDetails()
    const [filteredProperties, setFilteredProperties] = useState(bookingDetails?.properties);
    // const [filteredProperties, setFilteredProperties] = useState(properties);
    console.log(properties, filteredProperties)
    const [date, setDate] = useState([null]);
    const [formData, setFormData] = useState({
        minPrice: 1,
        maxPrice: 1000,
        rating: 1,
    });

    const handleChange = (field, value) => {
        setFormData({
            ...formData,
            [field]: value >= 1 ? value : 1,
        });
    };
    const handleFilter = () => {
        const filtered = properties.filter(
            (property) => property.price >= formData.minPrice && property.price <= formData.maxPrice && property.rating >= formData.rating
        );
        setFilteredProperties(filtered);
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
                                           value={formData.minPrice}
                                           onChange={(e) => handleChange('minPrice', parseInt(e.target.value, 10))}
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
                                           value={formData.maxPrice}
                                           onChange={(e) => handleChange('maxPrice', parseInt(e.target.value, 10))}
                                />

                            </div>
                            <div className="lsOptionItem">
                                <span className="lsOptionText">Rating</span>
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
                                           type="number" id="rating-input"
                                           placeholder={"1"}
                                           value={formData.rating}
                                           onChange={(e) => handleChange('rating', parseInt(e.target.value, 10))}
                                           variant="outlined"/>
                            </div>
                        </div>
                    </div>
                    <div className={"lsItem-button"}>
                        <CustomButton className="explore-button" buttonName={"Filter"} onClick={handleFilter}/>
                    </div>
                </div>

            </div>
            <div className={"hotels-display-container"}>
                <div className="listContainer">
                    <div className="listResult">
                        {filteredProperties.length > 0 &&
                            filteredProperties.map((item, index) => {
                                return <PropertyDetailCard props={{"item": item}} key={item.propertyId}/>;
                            })}
                        {filteredProperties.length === 0 && (
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
                                            <CustomButton className="home-page-navigate" buttonName={"Go to Home Page"}
                                                          onClick={() => navigate("/")}/>
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
