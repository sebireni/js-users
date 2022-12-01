import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Users.css';

const Users = () => {

  // //alap

  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  //  useEffect(() => {
  //   fetch(`https://assessment-users-backend.herokuapp.com`)
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

  // //alap2

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const response = await axios.get(
  //         `https://assessment-users-backend.herokuapp.com`
  //       );
  //       setData(response.data);
  //       setError(null);
  //     } catch (err) {
  //       setError(err.message);
  //       setData(null);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   getData();
  // }, []);


  

  ///régebbiekből kiindulva..

// const handleSubmit = async () => {
//   const { email, password } = values;
//   const { data, error } = await axios({
//     url: 'https://assessment-users-backend.herokuapp.com',
//     method: 'POST',
//     headers: {
  //      'Content-Type': 'application/json'

//     },
//   },
//   {  
//     email, 
//     password
//   })

  // await axios({
  //   url: 'https://assessment-users-backend.herokuapp.com',
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   data: ,
  // })
  // .then((res) => { })
  // .catch((err) => { })

  
  return (
    <div className='users'>This is the USERS page
    </div>
  );
};

export default Users;