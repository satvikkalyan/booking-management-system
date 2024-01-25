import {BASE_URL} from "../components/utility/constants";

const bookingsAPI = `${BASE_URL}/api/v1/bookings`;
export const makePayment = async (bookingData, userData)=>{
    const requiredData = {
        userId : userData.userId,
        fromDate: bookingData.fromDate,
        toDate: bookingData.toDate,
        propertyId: bookingData.propertyId,
        modeOfPayment: bookingData.paymentInformation.isCreditCard? "Credit Card" : "Cash",
        selectedBeds: bookingData.selectedBeds,
    }
    try {
        const response = await fetch(`${bookingsAPI}/book`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requiredData),
        })
        if(response.status===200){
            return response.json()
        }
    } catch (error) {
        console.error('Error Booking:', error.message);
    }
    console.log(bookingData,userData)
    return null
}