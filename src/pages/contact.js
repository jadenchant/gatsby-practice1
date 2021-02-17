import React, { useState } from "react";
import { navigate } from "gatsby";
import Navbar from "../components/Navbar";
import "../css/contact.css";

export default function Contact() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");

  const handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    if (name === "fname") {
      setFname(value);
    } else if (name === "lname") {
      setLname(value);
    } else {
      setEmail(value);
    }
  };

  function handleSubmit() {
    checkValidInputs();
  }

  function checkValidInputs() {
    const missingInput = checkMissingInput();
    const validEmail = checkValidEmail();
  }

  // Function that checks for missing inputs
  // Returns string
  // Format '000' for missing none,
  // Format '111 form missing all, ect
  function checkMissingInput() {
    let missingInput;
    if (fname === "") {
      missingInput += "1";
    } else {
      missingInput += "0";
    }

    if (lname === "") {
      missingInput += "1";
    } else {
      missingInput += "0";
    }

    if (email === "") {
      missingInput += "1";
    } else {
      missingInput += "0";
    }

    return missingInput;
  }

  // Function that checks the email for @ and .
  // Returns stirng
  // Possible outputs: '@', '.', 'Both', Null
  function checkValidEmail() {
    let isMissingAt = true;
    let isMissingDot = true;

    if (email.indexOf("@") !== -1) {
      isMissingAt = false;
    }
    if (email.indexOf(".") !== -1) {
      isMissingDot = false;
    }

    if (isMissingAt && isMissingDot) {
      return "Both";
    } else if (isMissingAt) {
      return "@";
    } else if (isMissingDot) {
      return ".";
    }

    return null;
  }

  return (
    <div className='contact'>
      <Navbar />
      <h1>Contact</h1>

      <form
        onSubmit={event => {
          event.preventDefault();
          navigate("/form-submitted/");
        }}
      >
        <label>
          First Name:
          <input
            name='fname'
            type='string'
            value={fname}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Last Name:
          <input
            name='lname'
            type='string'
            value={lname}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email:
          <input
            name='email'
            type='string'
            value={email}
            onChange={handleInputChange}
          />
        </label>
        <button onClick={handleSubmit}>Submit</button>
      </form>

      <h1>{fname}</h1>
      <h1>{lname}</h1>
      <h1>{email}</h1>
    </div>
  );
}
