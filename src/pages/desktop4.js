import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import InsuranceForm from "../components/insurance-form";
import "./desktop4.css";

const Desktop4 = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onPetitionTextClick = useCallback(() => {
    navigate("/petition");
  }, [navigate]);

  const onGovSupportTextClick = useCallback(() => {
    navigate("/govsupport");
  }, [navigate]);

  const onContactUsTextClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  return (
    <div className="insurance2">
      <section className="navbar1" id="nav-bar" />
      <img
        className="logo-small-icon2"
        alt=""
        src="/screenshot-20230916-112303removebgpreview-4-1@2x.png"
      />
      <nav className="nav-item1" id="nav-items">
        <b className="home3" onClick={onHomeTextClick}>
          Home
        </b>
        <b className="petition4" onClick={onPetitionTextClick}>
          Petition
        </b>
        <b className="insurance3">Insurance</b>
        <b className="gov-support2" onClick={onGovSupportTextClick}>
          Gov Support
        </b>
        <b className="contact-us3" onClick={onContactUsTextClick}>
          Contact Us
        </b>
      </nav>
      <InsuranceForm />
      <b className="insurance4">Insurance</b>
    </div>
  );
};

export default Desktop4;
