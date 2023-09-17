import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./signup.css";

const signup = () => {
  const navigate = useNavigate();

  const onSignupButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAlreadyHaveAnClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className="signup">
      <img
        className="logo-big-icon"
        alt=""
        src="/screenshot-20230916-112303removebgpreview-4-11@2x.png"
      />
      <div className="container" id="container" />
      <div className="citizenship-number">Citizenship Number</div>
      <div className="username">Username</div>
      <div className="password">Password</div>
      <div className="confirm-password">Confirm Password</div>
      <b className="sign-up">Sign Up</b>
      <Form className="citizenship">
        <Form.Control type="text" />
      </Form>
      <Form className="user">
        <Form.Control type="text" />
      </Form>
      <Form className="confirm">
        <Form.Control type="text" />
      </Form>
      <Form className="password1">
        <Form.Control type="text" />
      </Form>
      <Button
        className="signup-button1"
        variant="primary"
        onClick={onSignupButtonClick}
      >{`Sign Up `}</Button>
      <div className="already-have-an-container" onClick={onAlreadyHaveAnClick}>
        <span>Already have an account?</span>
        <b>{` `}</b>
        <i className="log-in">Log in</i>
        <b>{` `}</b>
      </div>
    </div>
  );
};

export default signup;
