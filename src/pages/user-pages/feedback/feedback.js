import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import "./feedback.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import {
  flex_style,
  FeedBackPageStyle,
} from "../../../components/utility/constants";

const FeedBack = () => {
  const navigate = useNavigate();
  const submitFeedback = ()=>{
    navigate("/")
  }
  return (
    <>
      <Grid align="center">
        <Paper elevation={10} style={FeedBackPageStyle}>
          <div>
            <table>
              <tbody>
                <tr>
                  <td>
                    <Box sx={flex_style}>
                      <TextField id="name" name="name" label="Name" />
                    </Box>
                  </td>
                  <td rowSpan={2}>
                    <Box sx={flex_style}>
                      <TextField
                        id="feedback"
                        name="feedback"
                        label="FeedBack"
                        multiline
                        rows={5}
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
                      />
                    </Box>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Box sx={flex_style}>
                      <TextField id="email" name="email" label="Email" />
                    </Box>
                  </td>
                  <td>
                    <Box sx={flex_style}>
                      <Button variant="contained" fullWidth={true} onClick={submitFeedback}>Submit</Button>
                    </Box>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Paper>
      </Grid>
    </>
  );
};

export default FeedBack;
