import "./sidebar.css";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import { Link } from "react-router-dom";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FeedbackIcon from '@mui/icons-material/Feedback';
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="center">
        <ul>
          <Link to="/admin-home" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/admin/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Customers</span>
            </li>
          </Link>
          <Link to="/admin/properties" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Properties</span>
            </li>
          </Link>
          <Link to="/admin/bookings" style={{ textDecoration: "none" }}>
            <li>
              <CreditCardIcon className="icon" />
              <span>Bookings</span>
            </li>
          </Link>
          <Link to="/admin/promotions" style={{ textDecoration: "none" }}>
            <li>
              <LocalOfferIcon className="icon" />
              <span>Promotions</span>
            </li>
          </Link>
          <Link to="/admin/feedback" style={{ textDecoration: "none" }}>
            <li>
              <FeedbackIcon className="icon" />
              <span>Feedback</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
