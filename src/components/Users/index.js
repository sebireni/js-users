import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
//import axios from 'axios';
import './Users.css';

const Users = (props) => {
  const { data } = props;
  const navigate = useNavigate();

  // const LoadEdit=(id) => {
  //   navigate('/users/edit/'+id);
  // }

  const LoadEdit=(user) => {
    navigate('/edit/', { state: {user: user}});
    // const usertoedit = data.find(obj => obj.id === user.id);
    // console.log(usertoedit);
    // console.log(user.id);
  }

  const [currentUsers, setCurrentUsers] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0); //index of first item of the current page
  const usersPerPage = 10;

  useEffect(() => {
    const endOffset = itemOffset + usersPerPage; //index of last item of current page
    setCurrentUsers(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / usersPerPage));
  }, [itemOffset, usersPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * usersPerPage) % data.length;
    setItemOffset(newOffset);
  };

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
              { data &&
                currentUsers.map(user => (
                  <tr key={user.id}>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.created_at}</td>
                    <td>
                      <a onClick={() => { LoadEdit(user) }} className="btn btn-success">Edit</a>
                    </td> 
                  </tr>
                ))
              }
            </tbody>
          </table>

          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            containerClassName='pagination'
            pageLinkClassName='page-num'
            previousLinkClassName='page-num'
            nextLinkClassName='page-num'
            activeLinkClassName='active'
          />
        </div>
      </div>
    </div>
  );
};

export default Users;