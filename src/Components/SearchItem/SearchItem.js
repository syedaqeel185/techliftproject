import React from "react";
import "./searchitem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://images.unsplash.com/photo-1525177407778-715cf858c691?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <span className="siTitle">Isb Heights</span>
        <span className="siDistance">500m away</span>
        <span className="siTaxiOp">Free Taxi</span>
        <span className="siSubtitle">Prime location in islamabad</span>
        <span className="siFeatures">2 bathrooms double bed</span>
        <span className="siCancelOp">Free Cancellation</span>
        <span className="siCancelOpSubtitle">Just book now. You may cancel later.</span>
      </div>
      <div className="siDetails">
        <div className="siRating">
        <span> Excellent </span>
        <button type="">4.9</button>
        <button type="">4.9</button>
        </div>
        <div className="siDetailTexts">
            <span className="siPrice">12000</span>
            <span className="siTaxOp">Includes taxes and fees</span>
       
            <button className="siCheckButton" type="">See Availability</button>

        </div>
       
      </div>

    </div>
  );
};

export default SearchItem;
