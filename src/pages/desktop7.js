import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./desktop7.css";

const Desktop7 = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onPetitionTextClick = useCallback(() => {
    navigate("/govsupport");
  }, [navigate]);

  const onGovSupportTextClick = useCallback(() => {
    navigate("/govsupport");
  }, [navigate]);

  return (
    <div className="contact">
      <section className="navbar" id="navbar" />
      <img
        className="logo-small-icon1"
        alt=""
        src="/screenshot-20230916-112303removebgpreview-4-1@2x.png"
      />
      <nav className="nav-item" id="nav-item">
        <b className="home2" onClick={onHomeTextClick}>
          Home
        </b>
        <b className="petition1" onClick={onPetitionTextClick}>
          Petition
        </b>
        <b className="insurance1">Insurance</b>
        <b className="gov-support1" onClick={onGovSupportTextClick}>
          Gov Support
        </b>
        <b className="contact-us1">Contact Us</b>
      </nav>
      <h1 className="contact-us2">Contact Us</h1>
      <div className="container2" />
      <div className="submit-button">
        <Button className="submit-button1" variant="primary" />
        <h3 className="submit">Submit</h3>
      </div>
      <div className="subject">
        <Form className="wrapper">
          <Form.Control type="text" />
        </Form>
        <h3 className="subject1">Subject</h3>
      </div>
      <div className="name">
        <Form className="wrapper">
          <Form.Control type="text" />
        </Form>
        <h3 className="full-name"> Full Name</h3>
      </div>
      <div className="message">
        <Form.Group className="rectangle-formgroup">
          <Form.Control as="textarea" defaultValue="" />
        </Form.Group>
        <h3 className="your-message">Your Message</h3>
      </div>
      <div className="email">
        <Form className="wrapper">
          <Form.Control type="text" />
        </Form>
        <h3 className="email-address">Email address</h3>
      </div>
    </div>
  );
};

export default Desktop7;
