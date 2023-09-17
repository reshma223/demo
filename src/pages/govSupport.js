
import { Component, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import  govSupport from "./govSupport.css";

import Notice from "../components/notice.js";

const govsupport = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onPetitionTextClick = useCallback(() => {
    navigate("/petition");
  }, [navigate]);

  const onInsuranceTextClick = useCallback(() => {
    navigate("/insurance");
  }, [navigate]);

  const onContactUsTextClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <div className="govSupport">
       
      <section className="nav-container" />
      <img
        className="logo-small-icon3"
        alt=""
        src="/screenshot-20230916-112303removebgpreview-4-1@2x.png"
      />
     
      <nav className="nav-items1" id="nav-items">
        <b className="home4" onClick={onHomeTextClick}>
          Home
        </b>
        <b className="petition5" onClick={onPetitionTextClick}>
          Petition
        </b>
        <b className="insurance5" onClick={onInsuranceTextClick}>
          Insurance
        </b>
        <b className="gov-support3">Gov Support</b>
        <b className="contact-us4" onClick={onContactUsTextClick}>
          Contact Us
        </b>
      </nav>
      <div className="gov-container" />
      <h2 className="gov-support4">Gov Support</h2>
      <div className="searchbar">
        <div className="searchbar-child" />
        <div className="search">Search</div>
        <img className="vector-icon" alt="" src="/vector.svg" />
      </div>
      <div className="gov-nav">
        <div className="province">Province</div>
        <div className="municiple">Municiple</div>
        <div className="ministry">Ministry</div>
      </div>
      <Notice text="Notice 1" />
      <Notice text="Notice 2" />
      <Notice text="Notice 3" />
      <Notice text="Notice 4" />
      <Notice text="Notice 5" />
      <div className="notice-container">
      <div className="profile-icon">
        <img src="group-3.svg" alt="Profile" />
      </div>
      <div className="text">
        <p>
          Lorem ipsum dolor sit amet consectetur. Sollicitudin nisi lacus nibh risus netus convallis gravida platea 
volutpat. Turpis diam porttitor vitae hendrerit massa vulputate lacus fringilla. In purus aliquam venenatis
 turpis. Elit ipsum viverra facilisis platea nec amet mauris odio elementum.
        </p>
      </div>
    </div>
    </div>
  );
};

export default govSupport;
