import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="row justify-content-evenly align-items-center heading pt-3 pb-3">
        <div className="col-md-3 col-12">
          <h1 style={{ fontSize: "0.8rem" }}>Vasiti</h1>
        </div>
        <div className="col-md-9 col-12 flex-end">
          <ul className="d-md-flex d-none align-items-center m-0 justify-content-end">
            <li className="px-3 heading-list">ABOUT US</li>
            <li className="px-3 heading-list">STORES</li>
            <li className="px-3 heading-list">CONTACT</li>
            <li className="px-3 heading-list">LOG IN</li>
            <button className="heading-signup px-3">Sign up</button>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Navbar;
