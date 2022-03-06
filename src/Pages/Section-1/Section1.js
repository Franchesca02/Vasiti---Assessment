import React from "react";
import Icon1 from "../../assets/image1.png";
import "./Section1.css";

const Section1 = () => {
  return (
    <>
      <div className="row flex-column flex-md-row Hero-Section justify-content-evenly">
        <div className="col-md-6 col-12">
          <div className="SectionText">
            <h1 className="">
              Amazing Experiences from Our Wonderful Customers
            </h1>
            <p className="col-md-11 col-12">
              Here is what customers and vendors are saying about us, you can
              share your stories with us too.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className="SectionImage">
            <div>
              <img className="col-12" src={Icon1} alt="testimonial" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Section1;
