import React from "react";
import "./style.css";
import Josiah from "../../assets/josiah.png";
import HeroReviewBorder from "../../assets/friends.png";

const HeroReview = () => {
  return (
    <div className="section-two">
      <div className="row flex-column-reverse flex-md-row">
        <div className="col-12 col-md-5">
          <div className="customer-experience-text pt-5">
            <h2>Josiah’s Experience</h2>
            <button className="customer-experience-btn">Vendor</button>
            <p>
              I had the best experience shopping with vasiti. Usability of the
              website was great, very good customer service, an all round great
              experience. I would definately be coming back! I had the best
              experience shopping with vasiti. Usability of the website was
              great, very good customer service, an all round great experience.
              I would definately be coming back!
            </p>
            <p className="p-0 m-0">Share your own story!</p>
            <img src={HeroReviewBorder} alt="HeroReviewBorder" />
          </div>
        </div>
        <div className="col-12 col-md-7">
          <div className="customer-experience">
            <div>
              <img src={Josiah} alt="A vendor's icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroReview;
