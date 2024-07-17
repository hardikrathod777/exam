// import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addStudent } from '../../services/actions/studentaction';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Addstudent.css'

const AddBook = () => {
  const [f_name, setf_name] = useState('');
  const [l_name, setl_name] = useState('');
  const [roll_n, setroll_n] = useState('');
  const [year, setyear] = useState('');
  const [phone_n, setphone_n] = useState('');
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = { f_name, l_name, roll_n, phone_n , year };
    dispatch(addStudent(newStudent));
    setf_name('');
    setl_name('');
    setroll_n('');
    setphone_n('');
    setyear('');
    navigate('/studentlist');
  };


  return (
    <>
        <div className='container add'>
            <div className='form-style'>
            <form onSubmit={handleSubmit}> 
                <input type='text' placeholder='student First Name' required value={f_name} onChange={(e) => setf_name(e.target.value)} className='input'/>
                <input type="text" placeholder="Student Last Name" required value={l_name} onChange={(e) => setl_name(e.target.value)} className='input'/>
                <input type="number" placeholder="Roll no." required value={roll_n} onChange={(e) => setroll_n(e.target.value)} className='input'/>
                <input type="number" placeholder="Phone No." required value={phone_n} onChange={(e) => setphone_n(e.target.value)} className='input'/>
                <input type="number" placeholder="year" required value={year} onChange={(e) => setyear(e.target.value)} className='input'/>
                <button type="submit" className='btn-style'>Add Book</button>
            </form>
            </div>
        </div>
    </>
  );
};

export default AddBook;
