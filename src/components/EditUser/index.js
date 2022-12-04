import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {useLocation} from 'react-router-dom';
import './EditUser.css';

const EditUser = () => {

  // const { userid } = useParams();

  const navigate=useNavigate();

  const location = useLocation();

  const usertoedit = location.state.user;
  // const [firstname, setFirstname]=useState(usertoedit.first_name);
  // const [lastname, setLastname]=useState(usertoedit.last_name);
  // const [status, setStatus]=useState(usertoedit.status);

  const [firstname, setFirstname]=useState('');
  const [lastname, setLastname]=useState('');
  const [active, setActive]=useState(true);
  const [status, setStatus]=useState('');

  useEffect(() => {
    fetch("https://assessment-users-backend.herokuapp.com/users/" + usertoedit.id).then((res) => {
        return res.json();
    }).then((resp) => {
        setFirstname(resp.first_name);
        setLastname(resp.last_name);
        setStatus(resp.status);
        if (resp.status === 'locked') {
          setActive(false);
        }
    }).catch((err) => {
        console.log(err.message);
    })
  }, []);

  const handleSubmit=(e)=>{
    e.preventDefault();

    if (active) {
      setStatus('active');
    } else {
      setStatus('locked')
    };

    const userdata={firstname, lastname, status};

    //post needs work!
    
    fetch("https://assessment-users-backend.herokuapp.com/users/" + usertoedit.id,{
      method:"PUT",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(userdata)
    }).then((res)=>{
      alert('Saved successfully.')
      navigate('/users');
    }).catch((err)=>{
      console.log(err.message)
    })
  }
  
  return (
    <div>
      <div className='row'>
        <div className='offset-lg-3 col-lg-6'>
          <form classame='container' onSubmit={handleSubmit}>
            <div className='card' style={{'textAlign':'left'}}>
              <div className='card-title'>
                <h2>Edit User</h2>
              </div>

              <div className='card-body'>
                <div className='row'>
                  <div className='col-lg-12'>
                    <div className='form-group'>
                      <label>First Name</label>
                      <input required value={firstname} onChange={e=>setFirstname(e.target.value)} className='form-control'></input>
                    </div>
                  </div>

                  <div className='col-lg-12'>
                    <div className='form-group'>
                      <label>Last Name</label>
                      <input required value={lastname} onChange={e=>setLastname(e.target.value)} className='form-control'></input>
                    </div>
                  </div>

                  <div className='col-lg-12'>
                    <div className='form-check'>
                      <input checked={active} onChange={e=>setActive(e.target.checked)} type='checkbox' className='form-check-iput'></input>
                      <label className='form-check-label'>Active</label>
                    </div>
                  </div>

                  <div className='col-lg-12'>
                    <div className='form-group'>
                      <button className='btn btn-success' type='submit'>Save edit</button>
                      <Link to='/users' className='btn btn-danger'>Cancel</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditUser;