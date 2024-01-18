import React from "react";
import Button from "@mui/material/Button";

const CustomButton = (props) => {
    const buttonStyles = {
        backgroundColor: 'var(--button-color)',
    };

    return (
        <Button className={`cb-${props.className}`}variant="contained" style={buttonStyles} onClick={props.onClick}>
            {props.buttonName}
        </Button>
    );
};

export default CustomButton;
