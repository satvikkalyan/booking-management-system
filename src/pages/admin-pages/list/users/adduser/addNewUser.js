import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import placeholderpic from "./../../../../../resources/images/userprofile.jpeg";
import Box from "@mui/material/Box";
import "./addNewUser.css";
import Button from "@mui/material/Button";
import { useLocation, useNavigate } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import {
  paperStyle4,
  flex_style,
  userObj,
  userAPI,
} from "../../../../../components/utility/constants";
import { postDataToAPI } from "../../../../../components/utility/fetchCalls";
import Sidebar from "../../../../../components/admin-components/sidebar/Sidebar";

export default function AddNewUser() {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(location?.state ? location?.state : userObj);
  const navigateTohomePage = () => {
    navigate("/admin/users");
  };
  const [role, setRole] = React.useState(
    user?.userType === "Admin"
      ? "management"
      : user?.userType === "On Site Employee"
      ? "onSiteEmployee"
      : user?.userType === "Customer Support Team"
      ? "customerSupportTeam"
      : "customer"
  );
  const handleListener = (evt) => {
    const value = evt.target.value;
    setUser({
      ...user,
      [evt.target.name]: value,
    });
  };
  const handleChange = (event) => {
    setRole(event.target.value);
  };
  const createUser = () => {
    user.password = user?.password?.length > 0 ? user?.password : "temp";
    user.customer = false;
    user.onSiteEmployee = false;
    user.customerSupportTeam = false;
    user.management = false;
    user[role] = true;
    if(user?.bookingResources?.length===0 || !user?.bookingResources){
      user.bookingResources = []
    }
    let { userType, ...actualData } = user;
    postDataToAPI(userAPI, actualData).then((e) => {
      if (e.status === 200) {
        navigate("/admin/users");
      } else {
        console.log(e);
      }
    });
  };
  return (
    <>
      <div className="list">
        <Sidebar />
        <div className="listContainer">
          <Grid align="center">
            <Paper elevation={10} style={paperStyle4}>
              <div>
                <table>
                  <tbody>
                    <tr>
                      <td rowSpan={3}>
                        <div>
                          <img
                            src={user?.profileImageUrl.length>0?user?.profileImageUrl:placeholderpic}
                            alt={placeholderpic}
                          />
                        </div>
                      </td>
                      <td>
                        <Box sx={flex_style}>
                          <TextField
                            id="firstname"
                            name="firstName"
                            label="First Name"
                            value={user.firstName}
                            onChange={handleListener}
                          />
                        </Box>
                      </td>
                      <td>
                        <Box sx={flex_style}>
                          <TextField
                            id="lastname"
                            name="lastName"
                            value={user.lastName}
                            label="Last Name"
                            onChange={handleListener}
                          />
                        </Box>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Box sx={flex_style}>
                          <TextField
                            id="gender"
                            name="gender"
                            label="Gender"
                            value={user.gender}
                            onChange={handleListener}
                          />
                        </Box>
                      </td>
                      <td>
                        <Box sx={flex_style}>
                          <TextField
                            id="age"
                            name="age"
                            label="Age"
                            value={user.dateOfBirth}
                          />
                        </Box>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <Box sx={flex_style}>
                          <TextField
                            id="mobilenumber"
                            name="mobile"
                            label="Mobile Number"
                            value={user.mobile}
                            onChange={handleListener}
                          />
                        </Box>
                      </td>
                      <td>
                        <Box sx={flex_style}>
                          <TextField
                            id="email"
                            name="email"
                            label="Email"
                            value={user.email}
                            onChange={handleListener}
                          />
                        </Box>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Box sx={flex_style}>
                          {/* <Button variant="contained">Upload Image</Button> */}
                        </Box>
                      </td>
                      <td>
                        <Box sx={flex_style}>
                          <TextField
                            value={role}
                            onChange={handleChange}
                            select // tell TextField to render select
                            label="User Role"
                            className="select"
                          >
                            <MenuItem value={"management"}>Admin</MenuItem>
                            <MenuItem value={"onSiteEmployee"}>
                              On Site User
                            </MenuItem>
                            <MenuItem value={"customer"}>Customer</MenuItem>
                            <MenuItem value={"customerSupportTeam"}>
                              Customer Support Team
                            </MenuItem>
                          </TextField>
                        </Box>
                      </td>
                      <td rowSpan={2}>
                        <Box sx={flex_style}>
                          <TextField
                            id="address"
                            name="address"
                            label="Address"
                            multiline
                            rows={4}
                            onChange={handleListener}
                            value={user.address}
                          />
                        </Box>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Box sx={flex_style}>
                          <TextField id="profileImageUrl" name="profileImageUrl" label="Image URL" value={user.profileImageUrl} onChange={handleListener}/>
                        </Box>
                      </td>
                      <td>
                        <Box sx={flex_style}>
                          <TextField
                            id="Assigned-Property"
                            name="Assigned-Property"
                            label="Assigned Property"
                          />
                        </Box>
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>
                        <Box sx={flex_style}>
                          <Button variant="contained" onClick={createUser}>
                            Create User
                          </Button>
                        </Box>
                      </td>
                      <td>
                        <Box sx={flex_style}>
                          <Button
                            variant="contained"
                            onClick={navigateTohomePage}
                          >
                            Back
                          </Button>
                        </Box>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Paper>
          </Grid>
        </div>
      </div>
    </>
  );
}
