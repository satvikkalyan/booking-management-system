import "./../list.css";
import Datatable from "../../../../components/admin-components/datatable/Datatable";
import Sidebar from "../../../../components/admin-components/sidebar/Sidebar";
import { bookingsColumns } from "../../../../components/utility/constants";
import { bookingRows } from "../../../../resources/sampleData/sampleBookings";
import { useEffect, useState } from "react";
import {
  getProperties,
  getUsers,
} from "../../../../components/utility/fetchCalls";
const BookingsList = () => {
  const [bookingData, setBookingData] = useState({});
  useEffect(() => {
    getProperties().then((data) => {
      var bookings = {};
      for (var x = 0; x < data?.length; x++) {
        const bookingResources = data[x]?.bookingResources;
        var booking = {};
        for (var y = 0; y < bookingResources?.length; y++) {
          booking = {};
          const bookingItem = bookingResources[y];
          booking.id = bookingItem.id;
          booking.occupancy = bookingItem.occupancy;
          booking.status = bookingItem.status;
          booking.paymentType = bookingItem.paymentType;
          booking.bookingTimestamp = bookingItem.bookingTimestamp;
          booking.propertyName = data[x].propertyName;
          booking.imageSrc = data[x].imageSrc;
          bookings[bookingItem.id] = booking
        }
      }
      getUsers().then((data) => {
        for (var x = 0; x < data?.length; x++) {
          const userBookingResources = data[x]?.bookingResources;
          if (userBookingResources)
          for (var y = 0; y < userBookingResources?.length; y++) {
            const bookingID = userBookingResources[y]?.id;
            if(bookingID){
              var temp = bookings[bookingID]
              temp["userId"] = data[x]?.id
              bookings[bookingID] = temp
            }
          }
        
        }
        const bookingsArray = Object.values(bookings)
        setBookingData(bookingsArray);
      });
    });

    return () => {};
  }, []);

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Datatable
          props={{
            entity: "Bookings",
            cols: bookingsColumns,
            data: bookingData,
          }}
        />
      </div>
    </div>
  );
};

export default BookingsList;
