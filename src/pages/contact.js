import React, { useState } from "react";
import { navigate } from "gatsby";
import Navbar from "../components/Navbar";
import "../css/contact.css";

export default function Contact() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [missingFname, setMissingFname] = useState("");
  const [missingLname, setMissingLname] = useState("");
  const [missingEmail, setMissingEmail] = useState("");
  const [incorrectEmail, setIncorrectEmail] = useState("");

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

  function handleSubmit(event) {
    event.preventDefault();
    const formError = checkValidInputs();

    if (!formError) {
      navigate("/form-submitted/");
    }
  }

  function checkValidInputs() {
    let missing = false;

    if (fname === "") {
      setMissingFname("Missing First Name");
      missing = true;
    }
    if (lname === "") {
      setMissingLname("Missing Last Name");
      missing = true;
    }
    if (email === "") {
      setMissingEmail("Email Address");
      setIncorrectEmail("Missing @ and . in Email Address");
      missing = true;
    } else if (email.indexOf("@") === -1 && email.indexOf(".") === -1) {
      setIncorrectEmail('Missing "@" and "." in Email Address');
      missing = true;
    } else if (email.indexOf("@") === -1) {
      setIncorrectEmail('Missing "@" in Email Address');
      missing = true;
    } else if (email.indexOf(".") === -1) {
      setIncorrectEmail('Missing "." in Email Address');
      missing = true;
    }

    return missing;
  }

  return (
    <div className='contact'>
      <Navbar />
      <h1>Contact</h1>

      <form>
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
        <div className='form-error'></div>
      </form>

      <div className='input-error'>
        <ul>
          <li>{missingFname}</li>
          <li>{missingLname}</li>
          <li>{missingEmail}</li>
          <li>{incorrectEmail}</li>
        </ul>
      </div>

      <h1>{fname}</h1>
      <h1>{lname}</h1>
      <h1>{email}</h1>
    </div>
  );
}
