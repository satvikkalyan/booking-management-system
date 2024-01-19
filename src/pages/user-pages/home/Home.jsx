import "./home.css";
import React from "react";
import Header from "../../../components/user-components/header/Header";
import PropertiesByCities from "../../../components/user-components/propertyByCity/PropertiesByCities";
import PropertiesByTypes from "../../../components/user-components/propertiesByType/PropertiesByTypes";
import SponsoredProperties from "../../../components/user-components/sponsoredProperties/SponsoredProperties"
import MailList from "../../../components/user-components/mailList/MailList";
import NavBar from "../../../components/common-components/navbarnew/Navbar";
import SearchBar from "../../../components/common-components/search-bar/searchBar";
export const Home = () => {
  return (
    <div>
      <div className="homeContainer">
        <PropertiesByCities />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertiesByTypes />
        <h1 className="homeTitle">Homes guests love</h1>
        <SponsoredProperties/>
        <MailList/>
      </div>
    </div>
  );
};
