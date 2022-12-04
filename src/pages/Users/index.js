import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Users.css';

const Users = () => {

  const [data, setData] = useState(null);

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
      .then((actualData) => setData(actualData))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  console.log(data);

  // useEffect(() => {
  //   fetch(`https://assessment-users-backend.herokuapp.com/users`,
  //   {
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     method: 'POST',
  //     body: {first_name: 'Bela', last_name: 'Test', status: 'active'}
  //   })
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error(
  //           `This is an HTTP error: The status is ${response.status}`
  //         );
  //       }
  //       return response.json();
  //     })
  //     .then((actualData) => console.log(actualData))
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // }, []);
  
  return (
    <div className='users'>This is the USERS page
    </div>
  );
};

export default Users;