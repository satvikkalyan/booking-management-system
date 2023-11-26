import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import TextField from "@mui/material/TextField";
import {
  paperStyle,
  avatarStyle,
} from "../../../components/utility/constants";

export default function ForgotPassword() {
  return (
    <Grid align="center">
      <Paper elevation={10} style={paperStyle}>
        <Avatar style={avatarStyle}>
          <LockOutlinedIcon />
        </Avatar>
        <h2>Forgot Password</h2>
        <TextField
          id="email"
          variant="standard"
          label="Enter Phone Number"
          placeholder="Enter Phone Number"
          fullWidth
          required
        />
      </Paper>
    </Grid>
  );
}
