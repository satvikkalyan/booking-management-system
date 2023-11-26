// import React, { useState } from "react";
// import "../../../pages/user-pages/filteredProperties/filteredProperties.css";
// import { format } from "date-fns";
// import { DateRange } from "react-date-range";
// import Button from "@mui/material/Button";
// import {cities} from "../../../resources/sampleData/cityList";
// import TextField from "@mui/material/TextField";
// import Autocomplete from "@mui/material/Autocomplete";
// import {useNavigate} from "react-router-dom";
//
// export default function SearchFilter(data) {
//   const navigate = useNavigate()
//   const dataFromPreviousPage = data.props;
//   const [destination, setDestination] = useState(
//     dataFromPreviousPage.destination
//   );
//   const [date, setDate] = useState(dataFromPreviousPage.date);
//   const [openDate, setOpenDate] = useState(false);
//   const [options, setOptions] = useState(dataFromPreviousPage.options);
//   const handleSearch = () => {
//     console.log(destination)
//     if(destination?.length>0){
//       navigate("/hotels", {state: {destination, date, options}});
//     }
//   };
//   return (
//     <div className="listSearch">
//       <h1 className="lsTitle">Search</h1>
//       <div className="lsItem">
//         <label>Destination</label>
//         <Autocomplete
//             disablePortal
//             id="combo-box-demo"
//             options={cities}
//             sx={{width: "100%"}}
//             onChange={(event,newValue) => {
//               setDestination(newValue)
//             }}
//             renderInput={(params) =>
//                 <TextField {...params} style={{backgroundColor:"white"}} />}
//         />
//       </div>
//       <div className="lsItem">
//         <label>Check-in Date</label>
//         <span onClick={() => setOpenDate(!openDate)}>{`${format(
//           date[0].startDate,
//           "MM/dd/yyyy"
//         )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
//         {openDate && (
//           <DateRange
//             onChange={(item) => setDate([item.selection])}
//             minDate={new Date()}
//             ranges={date}
//           />
//         )}
//       </div>
//       <div className="lsItem">
//         <label>Options</label>
//         <div className="lsOptions">
//           <div className="lsOptionItem">
//             <span className="lsOptionText">
//               Min price <small>per night</small>
//             </span>
//             <input type="number" className="lsOptionInput" />
//           </div>
//           <div className="lsOptionItem">
//             <span className="lsOptionText">
//               Max price <small>per night</small>
//             </span>
//             <input type="number" className="lsOptionInput" />
//           </div>
//           <div className="lsOptionItem">
//             <span className="lsOptionText">Adult</span>
//             type="number"
//             min={1}
//             className="lsOptionInput"
//             placeholder={options?.adult?options?.adult:"1"}
//             />
//           </div>
//           <div className="lsOptionItem">
//             <span className="lsOptionText">Children</span>
//             <input
//                 type="number"
//                 min={0}
//                 className="lsOptionInput"
//                 placeholder={options.children}
//             />
//           </div>
//           <div className="lsOptionItem">
//             <span className="lsOptionText">Room</span>
//             <input
//                 type="number"
//                 min={1}
//                 className="lsOptionInput"
//                 placeholder={options?.room?options?.room:"1"}
//             />
//           </div>
//         </div>
//       </div>
//       <Button variant="contained" type="button" onClick={handleSearch}>
//         Search
//       </Button>
//     </div>
//   <input
//   );
// }
