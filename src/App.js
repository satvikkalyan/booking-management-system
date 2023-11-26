import "./App.css";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/user-pages/home/Home";
import { FilteredProperties } from "./pages/user-pages/filteredProperties/FilteredProperties";
import Hotel from "./pages/user-pages/hotel/Hotel";
import Login from "./pages/common-pages/login/Login";
import Register from "./pages/common-pages/register/Register";
import NavBar from "./components/common-components/navbar/NavBar";
import ForgotPassword from "./pages/common-pages/forgotpassword/ForgotPassword";
import { UserDetailsProvider } from "./UserContext";
import { gapi } from "gapi-script";
import Profile from "./pages/common-pages/profile/Profile";
import AdminHome from "./pages/admin-pages/home/admin-home";
import PromotionsList from "./pages/admin-pages/list/promotions/promotionsList";
import UserList from "./pages/admin-pages/list/users/userList";
import BookingsList from "./pages/admin-pages/list/bookings/bookingsList";
import FeedBackList from "./pages/admin-pages/list/feedBackList/FeedBackList";
import PropertiesList from "./pages/admin-pages/list/properties/propertiesList";
import { clientId } from "./components/utility/constants";
import AddNewUser from "./pages/admin-pages/list/users/adduser/addNewUser";
import AddNewProperty from "./pages/admin-pages/list/properties/addproperties/addNewProperty";
import AddNewPromotions from "./pages/admin-pages/list/promotions/addpromotions/addNewPromotions";
import FeedBack from "./pages/user-pages/feedback/feedback";
import Payments from "./components/user-components/payments/Payments";
import ConfirmationPage from "./components/user-components/confirmationPage/ConfirmationPage";
import ErrorPage from "./pages/common-pages/errorpage/ErrorPage";
import TestFile from "./pages/common-pages/testPage/TestFile";
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

function App() {
  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  });
  // https://tawk.to/chat/63922c8db0d6371309d35bfb/1gjpfs266
  return (
    <UserDetailsProvider>
      <div>
        <NavBar />
        <TawkMessengerReact
                propertyId="63922c8db0d6371309d35bfb"
                widgetId="1gjpfs266"/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<FilteredProperties />} />
          <Route path="/hotels/:id" element={<Hotel />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/confirm" element={<ConfirmationPage />} />
          <Route path="/admin-home" element={<AdminHome />} />
          <Route path="/admin/users" element={<UserList />} />
          <Route path="/admin/bookings" element={<BookingsList />} />
          <Route path="/admin/promotions" element={<PromotionsList />} />
          <Route path="/admin/properties" element={<PropertiesList />} />
          <Route path="/admin/feedBack" element={<FeedBackList />} />
          <Route path="/admin/Users/add" element={<AddNewUser />} />
          <Route path="/admin/Users/add/:id" element={<AddNewUser />} />
          <Route path="/admin/Users/edit/:id" element={<AddNewUser />} />
          <Route path="/admin/Properties/add" element={<AddNewProperty />} />
          <Route
            path="/admin/Promotions/edit/:id"
            element={<AddNewPromotions />}
          />
          <Route path="/admin/Promotions/add" element={<AddNewPromotions />} />
          <Route
            path="/admin/Properties/edit/:id"
            element={<AddNewProperty />}
          />
          <Route path="/user/feedback" element={<FeedBack />} />
          <Route path="/errorPage" element={<ErrorPage />} />
          <Route path="/test" element={<TestFile />} />
        </Routes>
      </div>
    </UserDetailsProvider>
  );
}

export default App;
