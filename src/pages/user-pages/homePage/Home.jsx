import "./Home.css";
import React from "react";
import PropertiesByCities from "./propertyByCity/PropertiesByCities";
import PropertiesByTypes from "./propertiesByType/PropertiesByTypes";
import SponsoredProperties from "../../../components/user-components/sponsoredProperties/SponsoredProperties"
import MailList from "../../../components/user-components/mailList/MailList";
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
