import "./widget.css";
import { useState, useEffect } from "react";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import {
  getRoomsCount,
  getCustomersCount,
  getTodaysRevenue,
  getRevenue
} from "./../../utility/fetchCalls";
const Widget = ({ type }) => {
  let data;
  const [roomCount, setRoomcount] = useState(null);
  const [customerCount, setCustomerCount] = useState(null);
  const [todaysEarnings, setTodaysEarnings] = useState(null);
  const [totalEarnings, setTotalEarnings] = useState(null);
  const [isCalled, setIsCalled] = useState(false);
  useEffect(() => {
    if (!isCalled) {
      getCustomersCount().then((data) => {
        setCustomerCount(data);
      });
      getRoomsCount().then((data) => {
        setRoomcount(data["2"].split(",")[0]);
      });
      getTodaysRevenue().then((data) => {
        if (data[0] == null) {
          setTodaysEarnings(0);
        } else setTodaysEarnings(data);
      });
      getRevenue().then((data)=>{
        setTotalEarnings(data)
      })
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
    case "earning":
      data = {
        title: "Today's revenue",
        isMoney: true,
        value: todaysEarnings,
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "Total Revenue",
        isMoney: true,
        value: totalEarnings,
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
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
