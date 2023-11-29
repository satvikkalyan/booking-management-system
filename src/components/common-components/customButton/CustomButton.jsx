import React from "react";
import Button from "@mui/material/Button";

const CustomButton = (props) => {
    const buttonStyles = {
        backgroundColor: 'var(--button-color)', // Use your custom variable here
        marginLeft: '10px',
    };

    return (
        <Button variant="contained" style={buttonStyles} onClick={props.onclick}>
            {props.buttonName}
        </Button>
    );
};

export default CustomButton;
