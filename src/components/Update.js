import React,{useEffect,useState} from "react";
import { Form, Button } from "semantic-ui-react";
import { API_URL } from "../Constants/URL";
import axios from "axios";
import { useNavigate} from 'react-router-dom';

function Update(){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    
    const [id, setId] = useState("");
    const navigate = useNavigate();
    const updateUser = async () => {
        if (!id) {
            console.error("No ID provided for update.");
            return; 
        }
        
        try {
            const response = await axios.put(`${API_URL}/${id}`, {
                firstName,
                lastName
            });
            console.log("Update response:", response);
                  navigate('/read');  } catch (error) {
            if (error.response) {
                    console.error("Server responded with error:", error.response.data);
                console.error("Status code:", error.response.status);
            } else if (error.request) {
                     console.error("No response received:", error.request);
            } else {
                console.error("Error updating user:", error.message);
            }
        }
    };

   useEffect(() => {
        const userId = localStorage.getItem('id');
        const userFirstName = localStorage.getItem('firstName');
        const userLastName = localStorage.getItem('lastName');

        if (userId && userFirstName && userLastName) {
            setId(userId);
            setFirstName(userFirstName);
            setLastName(userLastName);
        } else {
            console.error("User data not found in localStorage.");
             }
    }, []);

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
          <Button onClick={updateUser} className="form-button">
            UPDATE
          </Button>
        </Form>
      </div>
    )
}

export default Update;