import React from "react";
import "./style.css";

const CustomerCard = ({
  customerName,
  location,
  customerType,
  detail,
  image,
}) => {
  return (
    <div className="col-sm-12 col-md-4 text-left mt-5 mb-5">
      <div className="customer-card">
        <div className="customer-profile">
          <img src={image} alt="customers" />
        </div>
        <h3>{customerName}</h3>
        <div className="d-flex  mt-2 mb-2">
          <small className="pr-3 d-block">{location}</small>
          <small className="tag">{customerType}</small>
        </div>
        <small className="customer-detail">{detail}</small>
      </div>
    </div>
  );
};
export default CustomerCard;
