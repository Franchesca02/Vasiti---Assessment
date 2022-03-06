import React from "react";
import "./style.css";
import blacbeautiful from "../../assets/black-beautiful-ladies-smiling 1.png";
import HeroReviewBorder from "../../assets/friends.png";

const HeroReview = () => {
  return (
    <div className="section-two-e">
      <div className="row flex-column-reverse flex-md-row">
        <div className="col-12 col-md-7">
          <div className="customer-experience1">
            <div>
              <img src={blacbeautiful} alt="beautifulgirls" />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-5">
          <div className="customer-experience-text-1 pt-5">
            <h2>Tolu & Joy’s Experience</h2>
            <button className="customer-experience-btn">CUSTOMER</button>
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
      </div>
    </div>
  );
};
export default HeroReview;
