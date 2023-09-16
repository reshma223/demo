import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
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
    <nav className="navbar2" id="nav-items">
      <div className="navbar3" />
      <nav className="nav-item2" id="nav">
        <b className="home5" onClick={onHomeTextClick}>
          Home
        </b>
        <b className="petition6">Petition</b>
        <b className="insurance6" onClick={onInsuranceTextClick}>
          Insurance
        </b>
        <b className="gov-support5" onClick={onGovSupportTextClick}>
          Gov Support
        </b>
        <b className="contact-us5" onClick={onContactUsTextClick}>
          Contact Us
        </b>
      </nav>
      <img
        className="logo-small-icon4"
        alt=""
        src="/screenshot-20230916-112303removebgpreview-4-1@2x.png"
      />
    </nav>
  );
};

export default Navbar;
