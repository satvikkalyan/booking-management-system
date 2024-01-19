import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import "./addNewPromotions.css";
import Button from "@mui/material/Button";
import { useLocation, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import {
  flex_style,
  paperStyle4,
} from "../../../../../components/utility/constants";
import Sidebar from "../../../../../components/admin-components/sidebar/Sidebar";
import { promotionsAPI } from "../../../../../components/utility/constants";
import { postDataToAPI } from "../../../../../components/utility/fetchCalls";
import { getPromotionsDataTemplate } from "../../../../../components/utility/constants";
export default function AddNewPromotions() {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateToPreviousSection = () => {
    navigate("/admin/promotions");
  };
  const [promotionData, setPromotionData] = useState(
    location?.state?.promotionMessage
      ? location.state
      : getPromotionsDataTemplate()
  );
  const handleChange = (evt) => {
    const value = evt.target.value;
    setPromotionData({
      ...promotionData,
      [evt.target.name]: value,
    });
  };
  const handleSubmit = () => {
    if (
      /^\d+$/.test(promotionData.discount) &&
      promotionData.promotionTitle.length > 0 &&
      promotionData.promotionMessage.length > 0
    ) {
      promotionData.discount = parseInt(promotionData?.discount);
      postDataToAPI(promotionsAPI, promotionData).then((e) => {
        navigate("/admin/promotions");
      });
    } else {
      console.log("Enter all Data");
    }
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
                      <td>
                        <Box sx={flex_style}>
                          <TextField
                            id="promotionName"
                            name="promotionTitle"
                            label="Promotion Name"
                            value={promotionData.promotionTitle}
                            onChange={handleChange}
                          />
                        </Box>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Box sx={flex_style}>
                          <TextField
                            id="promotionMessage"
                            name="promotionMessage"
                            label="Promotion Details"
                            value={promotionData.promotionMessage}
                            onChange={handleChange}
                          />
                        </Box>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Box sx={flex_style}>
                          <TextField
                            id="discount"
                            name="discount"
                            label="Discount Offered"
                            value={promotionData.discount}
                            onChange={handleChange}
                          />
                        </Box>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        {location?.state?.discount && (
                          <Box sx={flex_style}>
                            <Button variant="contained" onClick={handleSubmit}>
                              Save
                            </Button>
                          </Box>
                        )}
                        {!location?.state?.discount && (
                          <Box sx={flex_style}>
                            <Button variant="contained" onClick={handleSubmit}>
                              Submit
                            </Button>
                          </Box>
                        )}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Box sx={flex_style}>
                          <Button
                            variant="contained"
                            onClick={navigateToPreviousSection}
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
