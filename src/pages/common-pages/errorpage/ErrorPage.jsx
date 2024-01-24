import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { paperStyle2 } from "../../../components/utility/constants";
import { useNavigate } from "react-router-dom";
import "./ErrorPage.css";
import { Button } from "@mui/material";
function ErrorPage() {
  const navigate = useNavigate();
  const navigateTohomePage = () => {
    navigate("/login",{
            state : {
                pageInfo: {
                    currentPage: 'Login'
                }
            },

        });
  };
  return (
    <Grid align="center">
      <Paper elevation={10} style={paperStyle2}>
        <table>
          <tbody>


          <tr >
            <td className="td-center">
            <img
              src="https://media.tenor.com/gRCDxcr64k0AAAAd/wait-a-minute-who-are-you.gif"
              alt="Who are you"
              className="imge-tag"
            />
            </td>

          </tr>
          <tr>
            <td className="td-center">
            <Button variant="contained" onClick={navigateTohomePage}>
              {" "}
              Take me to Login
            </Button>
            </td>

          </tr>
          </tbody>
        </table>
      </Paper>
    </Grid>
  );
}

export default ErrorPage;
