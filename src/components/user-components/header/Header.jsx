import {faBed, faCalendarDays, faPerson,} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./header.css";
import {DateRange} from "react-date-range";
import {useState} from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import {format} from "date-fns";
import {useNavigate} from "react-router-dom";
import Button from "@mui/material/Button";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from "@mui/material/TextField";
import {cities} from "../../../resources/sampleData/cityList";

const Header = ({type}) => {
    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ]);
    const buttonStyle = {
        padding: "20px",
    };
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        room: 1,
    });

    const navigate = useNavigate();

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            };
        });
    };

    const handleSearch = () => {
        if(destination?.length>0){
            navigate("/hotels", {state: {destination, date, options}});
        }
    };
    const handleExplore = () => {
        navigate("/hotels", {state: {destination, date, options}});
    };

    return (
        <div className="header">
            <div
                className={
                    type === "list" ? "headerContainer listMode" : "headerContainer"
                }
            >
                {/*<div className="headerList">*/}
                {/*    <div className="headerListItem active">*/}
                {/*        <FontAwesomeIcon icon={faBed}/>*/}
                {/*        <span>Stays</span>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {type !== "list" && (
                    <>
                        <div style={buttonStyle}>
                            <h1 className="headerTitle">Luxury for Less</h1>
                            <p className="headerDesc">
                                Signup for 15% discount on your first stay
                            </p>
                            <Button variant="contained" type="button" onClick={handleExplore}>
                                Explore Now
                            </Button>
                        </div>
                        <div className="headerSearch">
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faBed} className="headerIcon"/>
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={cities}
                                    sx={{width: 200}}
                                    onChange={(event,newValue) => {
                                        setDestination(newValue)
                                    }}
                                    renderInput={(params) =>
                                        <TextField {...params} label="Where are you going?" />}
                                />
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
                                <span
                                    onClick={() => setOpenDate(!openDate)}
                                    className="headerSearchText"
                                >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                                    date[0].endDate,
                                    "MM/dd/yyyy"
                                )}`}</span>
                                {openDate && (
                                    <DateRange
                                        editableDateInputs={true}
                                        onChange={(item) => setDate([item.selection])}
                                        moveRangeOnFirstSelection={false}
                                        ranges={date}
                                        className="date"
                                        minDate={new Date()}
                                    />
                                )}
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
                                <span
                                    onClick={() => setOpenOptions(!openOptions)}
                                    className="headerSearchText"
                                >{`${options.adult} adult · ${options.room} room`}</span>
                                {openOptions && (
                                    <div className="options">
                                        <div className="optionItem">
                                            <span className="optionText">Adult</span>
                                            <div className="optionCounter">
                                                <button
                                                    disabled={options.adult <= 1}
                                                    className="optionCounterButton"
                                                    onClick={() => handleOption("adult", "d")}
                                                >
                                                    -
                                                </button>
                                                <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                                                <button
                                                    className="optionCounterButton"
                                                    onClick={() => handleOption("adult", "i")}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>

                                        <div className="optionItem">
                                            <span className="optionText">Room</span>
                                            <div className="optionCounter">
                                                <button
                                                    disabled={options.room <= 1}
                                                    className="optionCounterButton"
                                                    onClick={() => handleOption("room", "d")}
                                                >
                                                    -
                                                </button>
                                                <span className="optionCounterNumber">
                          {options.room}
                        </span>
                                                <button
                                                    className="optionCounterButton"
                                                    onClick={() => handleOption("room", "i")}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="headerSearchItem">
                                <Button
                                    variant="contained"
                                    type="button"
                                    onClick={handleSearch}
                                >
                                    Search
                                </Button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Header;
