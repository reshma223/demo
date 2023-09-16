import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Button as MuiButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./desktop2.css";

const Desktop2 = () => {
  const navigate = useNavigate();

  const onPetitionTextClick = useCallback(() => {
    navigate("/petition");
  }, [navigate]);

  const onInsuranceTextClick = useCallback(() => {
    navigate("/insurance");
  }, [navigate]);

  const onGovSupportTextClick = useCallback(() => {
    navigate("/govsupport");
  }, [navigate]);

  const onContactUsTextClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <div className="home">
      <section className="nav-bar" id="nav-bar" navbar />
      <img
        className="logo-small-icon"
        alt=""
        src="/screenshot-20230916-112303removebgpreview-4-1@2x.png"
      />
      <nav className="nav-items" id="navigation">
        <b className="home1">Home</b>
        <b className="petition" onClick={onPetitionTextClick}>
          Petition
        </b>
        <b className="insurance" onClick={onInsuranceTextClick}>
          Insurance
        </b>
        <b className="gov-support" onClick={onGovSupportTextClick}>
          Gov Support
        </b>
        <b className="contact-us" onClick={onContactUsTextClick}>
          Contact Us
        </b>
      </nav>
      <img
        className="farmer-1-icon"
        id="farmer"
        alt=""
        src="/farmer-1@2x.png"
      />
      <h1 className="agro-solution" id="heading">
        AGRO SOLUTION
      </h1>
      <div className="agro-container" id="container" />
      <p className="content-container" id="paragraph">
        <span className="content">We are a service based company</span>
        <span className="content"> empowering farmers through the</span>
        <span className="content">insurance service and in listing down</span>
        <span className="content">{`the government incentive. `}</span>
      </p>
      {/* <Button className="login-button" variant="primary">{`Log in `}</Button> */}
      
      <MuiButton
        className="login-button"
        sx={{ width: 176 }}
        variant="contained"
      >
          login
      </MuiButton>
      <MuiButton
        className="signup-button"
        sx={{ width: 176 }}
        variant="contained"
      >
        Sign Up
      </MuiButton>
    </div>
  );
};

export default Desktop2;
