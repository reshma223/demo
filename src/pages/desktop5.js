import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import Navbar from "../components/navbar";
import "./desktop5.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Desktop5 = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // Define the API endpoint URL
    const apiUrl = "http://samasya-001-site1.btempurl.com/api/Petition";

    // Fetch data from the API
    axios.get(apiUrl)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div className="petition2">
      <Navbar />
      <h1 className="petition3">Petition</h1>
      <div className="container3" />
      <div>
      <h2>List of Users</h2>
      <ol>
        {data.map(user => (
          <li key={user.petitionId}>{user.petitionName}</li>
        ))}
      </ol>
    </div>
      <div className="fullname">
        <Form className="wrapper1">
          <Form.Control type="text" />
        </Form>
        <h3 className="full-name1"> Full Name</h3>
      </div>
      <div className="explain-issue">
        <Form.Group className="wrapper2">
          <Form.Control as="textarea" defaultValue="" />
        </Form.Group>
        <h3 className="explain-issue1">Explain Issue</h3>
      </div>
      <div className="issue">
        <Form className="wrapper1">
          <Form.Control type="text" />
        </Form>
        <h3 className="issue1">Issue</h3>
      </div>
      <div className="ciitizen-number">
        <Form className="wrapper1">
          <Form.Control type="text" />
        </Form>
        <h3 className="citizenship-number1">Citizenship Number</h3>
      </div>
      <div className="submit-button2">
        <Button className="submit-box" variant="primary" />
        <Button className="submit1" variant="primary">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Desktop5;
