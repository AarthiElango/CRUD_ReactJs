import React, { useState } from "react";
import { API_URL } from "../Constants/URL";
import axios from "axios";
import { Form, Button } from "semantic-ui-react";
import { useNavigate} from 'react-router-dom';
function Create() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();

  const postData = async () => {
    await axios.post(API_URL, { firstName, lastName }) 
    navigate('/read') ;};

  return (
    <div className="form-container">
    <Form className="form-field">
      <Form.Field>
        <label>FirstName</label>
        <input
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          placeholder="Enter First Name "
        />
      </Form.Field>
      <br />
      <Form.Field>
        <label>LastName</label>
        <input
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
          placeholder="Enter LastName "
        />
      </Form.Field>
      <br />
      

      <Button onClick={postData}>SUBMIT</Button>
    </Form>
    </div>
  );
}

export default Create;
