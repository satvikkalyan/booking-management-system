import React from "react";
import Button from "@mui/material/Button";

const CustomButton = ({className,buttonName,onClick , disabled}) => {
    const buttonStyles = {
        backgroundColor: 'var(--button-color)',
    };

    return (
        <Button disabled={disabled} className={`cb-${className}`} variant="contained" style={buttonStyles} onClick={onClick}>
            {buttonName}
        </Button>
    );
};

export default CustomButton;
