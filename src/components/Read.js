import axios from "axios";
import React,{useEffect,useState} from "react";
import {Table,Button} from 'semantic-ui-react';
import { API_URL } from "../Constants/URL";
import { useNavigate } from "react-router-dom";

function Read(){
    const [apiData, setAPIData]= useState([]);
    const navigate = useNavigate();
   
   const UpdateUser = ({firstName,lastName,domain,id}) => {
    localStorage.setItem('id', id)
        localStorage.setItem('firstName', firstName)
        localStorage.setItem('lastName', lastName)
        localStorage.setItem('domain', domain)
    navigate('/update')

   }


    const deleteUser = async (id) => {
        try {
            await axios.delete(`${API_URL}/${id}`);
                      callGetAPI();
        } catch (error) {
            console.error("Failed to delete user:", error);
            
        }
    };
    const callGetAPI = async () =>{
        const resp=await axios.get(API_URL) ;
        setAPIData(resp.data);
    }
useEffect(() => {
    callGetAPI();
},[] );


    return (
        <Table className="table">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell className="table-head">FirstName</Table.HeaderCell>
            <Table.HeaderCell className="table-head">LastName</Table.HeaderCell>
            <Table.HeaderCell className="table-head">DELETE</Table.HeaderCell>
            <Table.HeaderCell className="table-head">UPDATE</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {apiData.map((data) => (
            <Table.Row key={data.id} className="table-row">
              <Table.Cell className="table-cell">{data.firstName}</Table.Cell>
              <Table.Cell className="table-cell">{data.lastName}</Table.Cell>
              <Table.Cell className="table-cell">
                <Button className="delete-button" onClick={() => deleteUser(data.id)}>
                  delete
                </Button>
              </Table.Cell>
              <Table.Cell className="table-cell">
                <Button className="update-button" onClick={() => UpdateUser(data)}>
                  Update
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    )
}

export default Read;