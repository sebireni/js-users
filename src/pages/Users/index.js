import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
//import axios from 'axios';
import './Users.css';

const Users = () => {
  const [userdata, setUserdata] = useState(null);
  //const [usertoedit, setUsertoedit] = useState(null);
  const navigate = useNavigate();

  const LoadEdit=(id) => {
    navigate('/users/edit/'+id);
    //const object = userdata.find(obj => obj.id === id);
  }

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

  console.log(userdata);
  
  return (
    <div className='container'>
      <div className='card'>
        <div className='card-title'>
          <h2>Users List</h2>
        </div>
        <div className='card-body'>
          <div className='divbtn'>
            <Link to='/new' className='btn btn-success'>Add New User</Link>
          </div>
          <table className='table table-bordered'>
            <thead className='bg-dark text-white'>
              <tr>
                <td>First Name</td>
                <td>Last Name</td>
                <td>Created at</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              { userdata &&
                userdata.map(item => (
                  <tr key={item.id}>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.created_at}</td>
                    <td>
                      <a onClick={() => { LoadEdit(item.id) }} className="btn btn-success">Edit</a>
                    </td>
                    
                  </tr>
                ))
              }

            </tbody>

          </table>

        </div>

      </div>
    </div>
  );
};

export default Users;