import "./home.css";
import React from "react";
import Header from "../../../components/user-components/header/Header";
import PropertiesByCities from "../../../components/user-components/propertyByCity/PropertiesByCities";
import PropertiesByTypes from "../../../components/user-components/propertiesByType/PropertiesByTypes";
import SponsoredProperties from "../../../components/user-components/sponsoredProperties/SponsoredProperties"
import MailList from "../../../components/user-components/mailList/MailList";
import Footer from "../../../components/user-components/footer/Footer";
import NavBar from "../../../components/common-components/navbar/NavBar";
export const Home = () => {
  return (
    <div>
        <NavBar />
      <Header />
      <div className="homeContainer">
        <PropertiesByCities />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertiesByTypes />
        <h1 className="homeTitle">Homes guests love</h1>
        <SponsoredProperties/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};
