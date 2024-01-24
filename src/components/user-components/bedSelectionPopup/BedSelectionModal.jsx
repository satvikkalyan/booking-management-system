import React, {useState} from "react"
import "./BedSelectionModal.css"
import CustomButton from "../../common-components/customButton/CustomButton";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import SingleBedIcon from '@mui/icons-material/SingleBed';
import {useLocation, useNavigate} from "react-router-dom";
import {useBookingDetails, useUpdateBookingDetails} from "../../../context/BookingDetails";

const BedSelectionModal = (props) => {
    const propertyData = props?.propertyData
    const rooms = propertyData?.availability
    const bookingDetails = useBookingDetails()
    const setBookingDetails = useUpdateBookingDetails()
    let disabledBeds = []
    rooms.map(room=>{
        disabledBeds.push(room.direction+"-bed")
    })
    const [selectedBeds, setSelectedBeds] = useState([]);
    const navigate = useNavigate()
    const handleBedClick = (bedId) => {
        if (disabledBeds.includes(bedId)) {
            if (!selectedBeds.includes(bedId)) {
                setSelectedBeds([...selectedBeds, bedId]);
            } else {
                setSelectedBeds(selectedBeds.filter((bed) => bed !== bedId));
            }
        }
    };
    const handleReserve = ()=>{
        bookingDetails.selectedBeds = selectedBeds
        setBookingDetails(bookingDetails)
        navigate("/payments",{
            state : {
                pageInfo: {
                    currentPage: 'Payments'
                }
            },

        })
    }

    return <div className={"bed-selection-modal"}>
        <div className={"cross-pane"}>
            <div className="icon-container">
                <HighlightOffIcon style={{fontSize: '30px'}} onClick={() => props.setShowModal(false)}/>
            </div>
        </div>
        <div className="bed-selection-pane">
            <div className="bed-selection-view">
                <div className="bed-row">
                    <SingleBedIcon
                        sx={{fontSize:"100px"}}
                        className={`bed-icon ${selectedBeds.includes('north-west-bed') ? 'selected' : (!disabledBeds.includes('north-west-bed') ? 'unclickable' : 'available')}`}
                        id="north-west-bed"
                        onClick={() => handleBedClick('north-west-bed')}
                    />
                    <SingleBedIcon
                        sx={{fontSize:"100px"}}
                        className={`bed-icon ${selectedBeds.includes('north-east-bed') ? 'selected' : (!disabledBeds.includes('north-east-bed') ? 'unclickable' : 'available')}`}
                        id="north-east-bed"
                        onClick={() => handleBedClick('north-east-bed')}
                    />
                </div>
                <div className="bed-row">
                    <SingleBedIcon
                        sx={{fontSize:"100px"}}
                        className={`bed-icon ${selectedBeds.includes('south-west-bed') ? 'selected' : (!disabledBeds.includes('south-west-bed') ? 'unclickable' : 'available')}`}
                        id="south-west-bed"
                        onClick={() => handleBedClick('south-west-bed')}
                    />
                    <SingleBedIcon
                        sx={{fontSize:"100px"}}
                        className={`bed-icon ${selectedBeds.includes('south-east-bed') ? 'selected' : (!disabledBeds.includes('south-east-bed') ? 'unclickable' : 'available')}`}
                        id="south-east-bed"
                        onClick={() => handleBedClick('south-east-bed')}
                    />
                </div>
            </div>
            <div className={"bed-details"}>
                <p>Bed Count: {selectedBeds.length} {"  "}
                    Available Beds: {disabledBeds.length}</p>
            </div>
        </div>

        <div className={"button-pane"}>
            <CustomButton disabled={selectedBeds.length===0} buttonName={"Reserve Now!"} onClick={handleReserve}/>
        </div>
    </div>
}

export default BedSelectionModal;