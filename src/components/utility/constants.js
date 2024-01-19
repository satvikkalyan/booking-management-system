import placeholderpic from "./../../resources/images/userprofile.jpeg"
const API = `http://localhost:8081`
export const userAPI = `${API}/api/v1/users/`;
export const roomsCountAPI = `${API}/api/v1/admins/roomscount/`;
export const usersCountAPI =
  `${API}/api/v1/admins/customercount/`;
export const totalRevenue =
  `${API}/api/v1/admins/revenue/`;
export const propertiesAPI =
  `${API}/api/v1/properties/`;
export const subscriptionAPI =   `${API}/api/v1/subscriptions/`;

export const userDeleteAPI = `${API}/api/v1/users/delete/`
export const propertyDeleteAPI = `${API}/api/v1/properties/delete/`
export const promotionsAPI = `${API}/api/v1/promotions/`
export const checkoutAPI = `${API}/api/v1/bookings/checkout/`
export const userObj = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  mobile: "",
  address: "",
  profileImageUrl: "",
  userRating: "",
  gender: "",
  dateOfBirth: "2022-11-20",
  cardDetailsResourceList: [
    {
      cardNumber: new Date().getTime(),
      cardName: "",
      cardExpiry: "",
    },
  ],
  bookingResources: [],
  customer: true,
  management: false,
  onSiteEmployee: false,
  customerSupportTeam: false,
};

export const hotelDataTemplate = {
  hotelAddress: "Elton St 125 New york",
  descriptionTitle: "Stay in the heart of City",
  description:
    "Located a 5-minute walk from St. Florian's Gate in Krakow, Tower Street Apartments has accommodations with air conditioning and free WiFi. The units come with hardwood floors and feature a fully equipped kitchenette with a microwave, a flat-screen TV, and a private bathroom with shower and a hairdryer. A fridge is also offered, as well as an electric tea pot and a coffee machine. Popular points of interest near the apartment include Cloth Hall, Main Market Square and Town Hall Tower. The nearest airport is John Paul II International Kraków–Balice, 16.1 km from Tower Street Apartments, and the property offers a paid airport shuttle service.",
  hotelName: "Tower Street Apartments",
  highlightTitle: "Perfect for a 9-night stay!",
  highlightDesc:
    "Located in the real heart of Krakow, this property has an excellent location score of 9.8!",
  photos: [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ],
  price: 0,
};

export const paperStyle = {
  padding: 20,
  height: "100%",
  width: "90%",
  margin: "50px auto",
};
export const paperStylePayments = {
  padding: 20,
  height: "81vh",
  width: "60%",
  margin: "50px auto",
};

export const paperStyle4 = {
  padding: 30,
  height: "70vh",
  width: "100%",
  margin: "10px auto",
};
export const paperStyle5 = {
  padding: 10,
  height: "85vh",
  width: "150vh",
  margin: "1px auto",
};

export const paperStyle2 = {
  padding: 20,
  height: "fit-content",
  width: "40vh",
  margin: "100px auto",
};

export const flex_style = {
  display: "inline-flex",
  m: 1,
  p: 1,
  borderRadius: 2,
  fontSize: "0.875rem",
  fontWeight: "700",
};

export const paperStyle3 = {
  padding: 20,
  height: "70vh",
  width: "40vh",
  margin: "100px auto",
};

export const avatarStyle = {
  backgroundColor: "#1bbd7e",
};
export const buttonStyle = {
  padding: "20px",
};

export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.profileImageUrl} alt={placeholderpic} />
          {params.row.firstName + " " +params.row.lastName}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "userType",
    headerName: "User Type",
    width: 150,
  }
  
];

export const bookingsColumns = [
  { field: "id", headerName: "Booking ID", width: 100 },
  {
    field: "propertyName",
    headerName: "Property Name",
    width: 350,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.imageSrc} alt="avatar" />
          {params.row.propertyName}
        </div>
      );
    },
  },
  {
    field: "userId",
    headerName: "User ID",
    width: 110,
  },
  {
    field: "occupancy",
    headerName: "No of Rooms",
    width: 100,
  },
  {
    field: "bookingTimestamp",
    headerName: "Payment ID",
    width: 200,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status === "IN" && <>Active Booking</>}
          {params.row.status !== "IN" && <>Inactive</>}
        </div>
      );
    },
  },
];



export const propertiesColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "Property Name",
    width: 400,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.imageSrc} alt="avatar" />
          {params.row.propertyName}
        </div>
      );
    },
  },
  {
    field: "location",
    headerName: "location",
    width: 150,
  },

  {
    field: "city",
    headerName: "city",
    width: 200,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {((params.row.status === "active")||(params.row.status === "Available") ) ?  <>Available</> :<>Unavailable</>}
        </div>
      );
    },
  },
];

export const promotionsCol = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "promotionTitle",
    headerName: "Promotion Name",
    width: 230,
  },
  {
    field: "promotionMessage",
    headerName: "Promotion Details",
    width: 500,
  },

  {
    field: "discount",
    headerName: "Discount Offered",
    width: 130,
  },
  {
    field: "status",
    headerName: "Status",
    width: 80,
    renderCell: (params) => {
      let activeStatus = "Inactive";
      if (params.row.status === true) {
        activeStatus = "active";
      }
      return (
        <div className={`cellWithStatus ${activeStatus}`}>
          {params.row?.promotionTitle?.length>0  && <>Active</>}
          {params.row?.promotionTitle?.length==0 && <>Inactive</>}
        </div>
      );
    },
  },
];

export const FeedBackPageStyle = {
  padding: 50,
  height: "40vh",
  width: "50%",
  margin: "50px auto",
};

export const feedBackColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "name",
    headerName: "Name",
    width: 230,
  },
  {
    field: "mobile",
    headerName: "Mobile Number",
    width: 150,
  },

  {
    field: "email",
    headerName: "Email",
    width: 200,
  },
  {
    field: "feedback",
    headerName: "Feed Back",
    width: 160,
  },
];
export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const getLastSixMonths = () => {
  var today = new Date();
  var d;
  var month;
  var dict = {};

  for (var i = 5; i > 0; i -= 1) {
    var currentMonth = today.getMonth() - i + 1;
    if (currentMonth < 10) {
      currentMonth = "0" + currentMonth;
    }

    const ToDate = `${today.getFullYear()}-${currentMonth}-30`;
    const fromDate = `${today.getFullYear()}-${currentMonth}-01`;
    d = new Date(today.getFullYear(), today.getMonth() - i, 1);
    month = monthNames[d.getMonth()];
    dict[month] = { from: fromDate, to: ToDate };
  }
  today = new Date();
  const fromDate = `${today.getFullYear()}-${today.getMonth() + 1}-01`;
  const ToDate = `${today.getFullYear()}-${
    today.getMonth() + 1
  }-${today.getDate()<10?'0'+today.getDate():today.getDate()}`;
  month = monthNames[today.getMonth()];
  dict[month] = { from: fromDate, to: ToDate };
  return dict;
};

export const sampleRoomData = [
  {
    price: 100,
    bedsAvailable: 2,
    desc: "King size bed ",
    roomName: "King Room",
    roomNumbers: [{ number: 201, disabled: true }, { number: 202 }],
  },
  {
    price: 100,
    bedsAvailable: 2,
    desc: "King size bed ",
    roomName: "King Room",
    roomNumbers: [{ number: 201, disabled: false }, { number: 202 }],
  },
  {
    price: 100,
    bedsAvailable: 2,
    desc: "King size bed ",
    roomName: "King Room",
    roomNumbers: [{ number: 201, disabled: true }, { number: 202 }],
  },
].map((x, i) => {
  x.roomNumbers = x.roomNumbers.map((y) => ({
    ...y,
    id: `room${y.number}`,
  }));
  return { ...x, id: `room${i}` };
});

export const getPromotionsDataTemplate = () => {
  const current = new Date();
  // const fromDate = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()-1}`;
  var currentMonth = current.getMonth() + 1;
  if (currentMonth < 10) {
    currentMonth = "0" + currentMonth;
  }
  var currentDay = current.getDate();
  if (currentDay < 10) {
    currentDay = "0" + currentDay;
  }
  const dateInRequiredFormat = `${current.getFullYear()}-${currentMonth}-${currentDay}`;
  return {
    promotionMessage: "",
    postedDate: dateInRequiredFormat,
    promotionTitle: "",
    discount: 0,
  };
};


export const propertyTemplate =
  {
    "propertyName": "",
    "location": "",
    "city": "",
    "state": "",
    "zipCode": "",
    "status": "",
    "price": 0,
    "rating": "",
    "imageSrc": "",
    "roomTypeResourceList": [
    ],
    "type": "",
    "bookingResources": [

    ],
    "description": "",
    "roomFacilities": "",
    "availableFrom": "",
    "availableTo": "",
    "descriptionTitle": "",
    "highlightTitle": "",
    "highlightDescription": "",
    "imageSource1": "",
    "imageSource2": "",
    "imageSource3": "",
    "imageSource4": ""
  }
