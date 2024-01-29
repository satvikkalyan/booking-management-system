import "./widget.css";
import {useEffect, useState} from "react";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {getCustomersCount, getRoomsCount,} from "./../../utility/fetchCalls";

const Widget = ({ type }) => {
  let data;
  const [roomCount, setRoomcount] = useState(null);
  const [customerCount, setCustomerCount] = useState(null);
  const [isCalled, setIsCalled] = useState(false);
  useEffect(() => {
    if (!isCalled) {
      getCustomersCount().then((data) => {
        setCustomerCount(data);
      });
      getRoomsCount().then((data) => {
        setRoomcount(data["2"]?.split(",")[0]);
      });
      setIsCalled(true);
    }
  }, [isCalled]);
  switch (type) {
    case "user":
      data = {
        title: "Customers",
        isMoney: false,
        value: customerCount,
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "Rooms",
        isMoney: false,
        value: roomCount,
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {data.value}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">{data.icon}</div>
    </div>
  );
};

export default Widget;
