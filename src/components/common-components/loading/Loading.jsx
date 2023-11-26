import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Loading() {
  return (
    <Box sx={{ display: 'flex' ,height:"80%",justifyContent: 'center',alignItems: "center"}}>
      <CircularProgress size={80}/>
      <span style={{ justifyContent: "center", position: "fixed", top: "55%" }}>Loading...please wait</span>

    </Box>
  );
}
