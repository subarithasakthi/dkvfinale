import React, {  useState, useEffect } from 'react'
import { Button, Container, Form, Grid, Segment, Input, Dropdown, Radio, } from 'semantic-ui-react';
import './App.css';
import { useNavigate, useParams, Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import {toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"


const intialState = { 
  Name: "",
  Mobile_Number: "",
  Address: "",
};
 const Memberform = () => {
  const [state, setState] = useState(intialState);

   const { Name,Mobile_Number,Address } = state;
  const navigate = useNavigate();

  const {id} = useParams();
  useEffect(() => {
    axios.get(`http://localhost:5000/api/get/${id}`)
    .then((resp)=> setState({...resp.data[0]}))

  },[id] );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Name || !Mobile_Number || !Address) {
      toast.error("please fill all the fields");
    } else {
      if(!id){
        axios
        .post("http://localhost:5000/api/post", {
      Name,
      Mobile_Number,
      Address,
      })
      .then(() => {
          setState({Name: "",Mobile_Number: "",Address: ""});
      })
      .catch((err) => toast.error(err.response.data));
      toast.success("Contact Added Successfully");
      }else{
        axios
        .put(`http://localhost:5000/api/update/${id}`, {
          Name,
          Mobile_Number,
          Address,
          })
          .then(() => {
              setState({Name: "",Mobile_Number: "",Address: "" });
          })
          .catch((err) => toast.error(err.response.data));
          toast.success("Contact Added Successfully");
      }
      
      setTimeout(() => navigate("/Member"), 500);
    }
  };


      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
      };

     
      return (

        <div align="center">
        
        
          <form onSubmit={handleSubmit}>
        
          <center><h2> Membership Form</h2></center><br/>
          <b> <label htmlfor =" Name ">Full Name :</label></b>
           <input  placeholder='Enter Your Full Name ...'
              id="Name"
              name="Name"
              type="text"
              value={Name || ""} 
              onChange={handleInputChange}
            />


            <b> <label htmlfor =" Mobile_Number ">Mobile Number :</label></b>
            <input 
              placeholder='Enter Your 10 digit Number ...'
              id="Mobile_Number"
              type="number"
              name="Mobile_Number"
          
              value={Mobile_Number || ""}
              onChange={handleInputChange}

            />
            <b> <label htmlfor =" Address ">Address :</label></b>
            <input
            placeholder='Enter address ...'
              id="Address"
              name="Address"
              type="text"
              value={Address || ""}
              onChange={handleInputChange}
            /> <br/>

           
            
            <input   type="submit" value={id?"Update":"Save" }/>
            
            <Link to="/Member">
            <input type='button' value="Go Back" />
            </Link >
            </form>
                  </div>

      );
    }



