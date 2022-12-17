import { Button, Segment, Table, Input, } from 'semantic-ui-react'
import '../index.css'
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";





const Member =() =>{

  const [data, setData] = useState([]);
  const loadData = async () => {
    const response = await axios.get("http://localhost:5000/api/get");
    setData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  

  const deleteContact = (id) => {
    if(window.confirm("Are you sure want to delete?")){
      axios.delete(`http://localhost:5000/api/remove/${id}`);
      toast.success(" Contact deleted successfully");
      setTimeout(() => loadData(), 500);
    }

  }
  const  SearchBar = ({ posts, setSearchResults }) => {
    const handleSubmit = (e) => e.preventDefault()

    const handleSearchChange = (e) => {
        if (!e.target.value) return setSearchResults(posts)

        const resultsArray = posts.filter(post => post.Name.includes(e.target.value) || post.Address.includes(e.target.value))

        setSearchResults(resultsArray)
    }



  return (

    <div>
      <h1><center> Member List </center></h1>


      <Segment>

        <Link to={"/Memberform"}>
          <Button Align='right' color='green' icon='plus' iconPosition='left'>Add New Members</Button>
        </Link>
        <form className="search" onSubmit={handleSubmit}>
                <input
                    className="search__input"
                    type="text"
                    id="search"
                    onChange={handleSearchChange}
                />
                 <button className="search__button">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
                </form>
      
        <Table celled selectable>
          <Table.Header >
            <Table.Row>
              <Table.HeaderCell textAlign='center'>SL.No</Table.HeaderCell>
              <Table.HeaderCell><Link to={`http://localhost:5000/api/get`}>Name</Link></Table.HeaderCell>
              <Table.HeaderCell>Mobile Number</Table.HeaderCell>
              <Table.HeaderCell>Address</Table.HeaderCell>
              
              <Table.HeaderCell>Action</Table.HeaderCell>

            </Table.Row>
          </Table.Header>

          <Table.Body>
            {
            data.map((item,index) =>{
                return (

                  <><Table.Row key={item.id}>
                    <Table.Cell textAlign='center' scope="row">{index + 1}</Table.Cell>
                    <Table.Cell textAlign='left'>{item.Name}</Table.Cell>
                    <Table.Cell textAlign='left'>{item.Phone_Number}</Table.Cell>
                    <Table.Cell textAlign='left'>{item.Address}</Table.Cell>
                    


                    <Table.Cell textAlign='left'>
                      <Link to={`/update/${item.id}`}> <i class="edit icon"></i></Link>
                      <Link> <i class="trash icon" onClick={() => deleteContact(item.id)}></i></Link>
                      <Link to={`/view/${item.id}`}><i class="eye icon"></i></Link>
                    </Table.Cell>
                  </Table.Row></>
                );
              }
            )
             
            }


          </Table.Body>
        </Table>
    </Segment>
    </div>
  );
};
}
export default Member;