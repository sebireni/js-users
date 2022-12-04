import React, {useState, useEffect} from 'react';
//import axios from 'axios';
import Users from '../../components/Users';
import './UsersList.css';

const UsersList = () => {

  const [userdata, setUserdata] = useState([]);

  useEffect(() => {
    fetch(`https://assessment-users-backend.herokuapp.com/users`,
    {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => setUserdata(actualData))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>
      <Users data = { userdata }/>
    </div>
  );
};

export default UsersList;