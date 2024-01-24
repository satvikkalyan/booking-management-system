import React, { useContext, useState } from "react";
import { bookingObj } from "../components/utility/constants";
const BookingDetailsContext = React.createContext();
const BookingDetailsUpdateContext = React.createContext();

export function useBookingDetails() {
    return useContext(BookingDetailsContext);
}
export function useUpdateBookingDetails() {
    return useContext(BookingDetailsUpdateContext);
}
export function BookingDetailsProvider({ children }) {
    const [bookingDetails, setBookingDetails] = useState(bookingObj);
    const setBookingData = (value) => {
        setBookingDetails(value);
    };

    return (
        <BookingDetailsContext.Provider value={bookingDetails}>
            <BookingDetailsUpdateContext.Provider value={setBookingDetails}>
                {children}
            </BookingDetailsUpdateContext.Provider>
        </BookingDetailsContext.Provider>
    );
}
