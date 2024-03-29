import "./App.css";
import {Route, Routes, useLocation} from "react-router-dom";
import {Home} from "./pages/user-pages/homePage/Home";
import {PropertiesListPage} from "./pages/user-pages/propertiesListPage/PropertiesListPage";
import PropertyDetail from "./pages/user-pages/propertyDetailPage/PropertyDetail";
import Login from "./pages/common-pages/login/Login";
import Register from "./pages/common-pages/register/Register";
import ForgotPassword from "./pages/common-pages/forgotpassword/ForgotPassword";
import {UserDetailsProvider} from "./context/UserContext";
import Profile from "./pages/common-pages/profile/Profile";
import AdminHome from "./pages/admin-pages/home/AdminHome";
import PromotionsList from "./pages/admin-pages/list/promotions/promotionsList";
import UserList from "./pages/admin-pages/list/users/userList";
import BookingsList from "./pages/admin-pages/list/bookings/bookingsList";
import FeedBackList from "./pages/admin-pages/list/feedBackList/FeedBackList";
import PropertiesList from "./pages/admin-pages/list/properties/propertiesList";
import AddNewUser from "./pages/admin-pages/list/users/adduser/addNewUser";
import AddNewProperty from "./pages/admin-pages/list/properties/addproperties/addNewProperty";
import AddNewPromotions from "./pages/admin-pages/list/promotions/addpromotions/addNewPromotions";
import Feedback from "./pages/user-pages/feedbackPage/Feedback";
import Payments from "./pages/user-pages/paymentsPage/Payments";
import ConfirmationPage from "./pages/user-pages/confirmationPage/ConfirmationPage";
import ErrorPage from "./pages/common-pages/errorpage/ErrorPage";
import NavBar from "./components/common-components/nav-bar/Navbar";
import React, {useEffect, useState} from "react";
import Header from "./components/user-components/header/Header";
import SearchBar from "./components/common-components/search-bar/searchBar";
import {BookingDetailsProvider} from "./context/BookingDetails";

function App() {
    const location = useLocation()
    const [displayHeader, setDisplayHeader] = useState(false)
    const [displaySearchBar, setDisplaySearchBar] = useState(false)
    const [displayNavBar, setDisplayNavbar] = useState(false)
    useEffect(() => {
        const currentPage = location?.state?.pageInfo?.currentPage
        if (!currentPage) {
            setDisplayNavbar(true);
            setDisplayHeader(true);
            setDisplaySearchBar(true)
        } else {
            if (currentPage === "Home") {
                setDisplayNavbar(true);
                setDisplayHeader(true);
                setDisplaySearchBar(true)
            } else if (currentPage === 'Login' || currentPage === 'Register') {
                setDisplayNavbar(false);
                setDisplaySearchBar(false)
                setDisplayHeader(false);
            } else if (currentPage === 'Payments') {
                setDisplayNavbar(true);
                setDisplaySearchBar(false)
                setDisplayHeader(false);
            } else if (currentPage === 'filteredProperties') {
                setDisplayNavbar(true);
                setDisplaySearchBar(true)
                setDisplayHeader(false);
            }
            else if(currentPage === 'Confirm'){
                setDisplayHeader(false)
                setDisplaySearchBar(false)
                setDisplayNavbar(true)
            }
            else {
                setDisplayNavbar(true);
                setDisplaySearchBar(true);
            }
        }
    }, [location?.state?.pageInfo?.currentPage]);
    return (
        <BookingDetailsProvider>
            <UserDetailsProvider>
                <div className="main-div">
                    {displayNavBar && <NavBar/>}
                    {displayHeader && <Header/>}
                    {displaySearchBar && <SearchBar/>}
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/hotels" element={<PropertiesListPage/>}/>
                        <Route path="/hotels/:id" element={<PropertyDetail/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/forgot-password" element={<ForgotPassword/>}/>
                        <Route path="/payments" element={<Payments/>}/>
                        <Route path="/confirm" element={<ConfirmationPage/>}/>
                        <Route path="/admin-home" element={<AdminHome/>}/>
                        <Route path="/admin/users" element={<UserList/>}/>
                        <Route path="/admin/bookings" element={<BookingsList/>}/>
                        <Route path="/admin/promotions" element={<PromotionsList/>}/>
                        <Route path="/admin/properties" element={<PropertiesList/>}/>
                        <Route path="/admin/feedBack" element={<FeedBackList/>}/>
                        <Route path="/admin/Users/add" element={<AddNewUser/>}/>
                        <Route path="/admin/Users/add/:id" element={<AddNewUser/>}/>
                        <Route path="/admin/Users/edit/:id" element={<AddNewUser/>}/>
                        <Route path="/admin/Properties/add" element={<AddNewProperty/>}/>
                        <Route
                            path="/admin/Promotions/edit/:id"
                            element={<AddNewPromotions/>}
                        />
                        <Route path="/admin/Promotions/add" element={<AddNewPromotions/>}/>
                        <Route
                            path="/admin/Properties/edit/:id"
                            element={<AddNewProperty/>}
                        />
                        <Route path="/user/feedback" element={<Feedback/>}/>
                        <Route path="/errorPage" element={<ErrorPage/>}/>
                    </Routes>
                </div>
            </UserDetailsProvider>
        </BookingDetailsProvider>
    );
}

export default App;
