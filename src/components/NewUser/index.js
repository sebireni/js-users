import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NewUser.css';

const NewUser = () => {
  const [firstname, setFirstname]=useState('');
  const [lastname, setLastname]=useState('');
  const[validationFirstname, setValidationFirstname]=useState(false);
  const[validationLastname, setValidationLastname]=useState(false);
  const [active, setActive]=useState(true);
  const [status, setStatus]=useState('');

  const navigate=useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (active) {
      setStatus('active');
    } else {
      setStatus('locked')
    };

    // post needs work!

    const userdata={firstname, lastname, status};

    fetch("https://assessment-users-backend.herokuapp.com/users",{
      method:'POST',
      headers:{'content-type':'application/json'},
      body:JSON.stringify(userdata)
    }).then((res)=>{
      alert('Saved successfully.')
      navigate('/users');
    }).catch((err)=>{
      console.log(err.message)
    })
      

    // fetch(`https://assessment-users-backend.herokuapp.com/users`,
    //   {
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     method: 'POST',
    //     body: {first_name: firstname, last_name: lastname, status: status}
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

  }
  
  return (
    <div>
      <div className='row'>
        <div className='offset-lg-3 col-lg-6'>
          <form classame='container' onSubmit={handleSubmit}>
            <div className='card' style={{'textAlign':'left'}}>
              <div className='card-title'>
                <h2>Add new user</h2>
              </div>

              <div className='card-body'>
                <div className='row'>
                  <div className='col-lg-12'>
                    <div className='form-group'>
                      <label>First Name</label> {firstname.length===0 && validationFirstname && <span className="text-danger">!Enter First Name</span>}
                      <input required value={firstname} onMouseDown={e=>setValidationFirstname(true)} onChange={e=>setFirstname(e.target.value)} className='form-control'></input>
                    </div>
                  </div>

                  <div className='col-lg-12'>
                    <div className='form-group'>
                      <label>Last Name</label> {lastname.length===0 && validationLastname && <span className="text-danger">!Enter Last Name</span>}
                      <input required value={lastname} onMouseDown={e=>setValidationLastname(true)} onChange={e=>setLastname(e.target.value)} className='form-control'></input>
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
                      <button className='btn btn-success' type='submit'>Save</button>
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

export default NewUser;