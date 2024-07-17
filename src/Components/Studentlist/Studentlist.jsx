import { useDispatch, useSelector } from 'react-redux';
import { fetchStudents, deleteStudent } from '../../services/actions/studentaction';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';

import './Studentlist.css';

const Studentlist = () => {
  const dispatch = useDispatch();
  const { students, loading, error } = useSelector(state => state.studentreducer);
  const navigate = useNavigate();
  const [searchItem, setSearchItem] = useState('');

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  useEffect(() => {
    console.log("Students data:", students);
  }, [students]);

  const handleDelete = (id) => {
    dispatch(deleteStudent(id));
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleSearch = (e) => {
    setSearchItem(e.target.value);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const filteredStudents = Array.isArray(students) 
    ? students.filter(student => 
        student.title.toLowerCase().includes(searchItem.toLowerCase())
      )
    : [];

  const studentsByName = filteredStudents.reduce((acc, student) => {
    if (!acc[student.f_name]) {
      acc[student.f_name] = [];
    }
    acc[student.f_name].push(student);
    return acc;
  }, {});

  return (
    <>
      <div className='pe-3 d-flex justify-content-between'>
        <div>
          <h1 style={{ display: 'inline' }}>Book List</h1>
        </div>
        <div style={{ paddingTop: '10px', paddingRight: '10px' }}>
          <Form onSubmit={handleSearch}>
            <Form.Control type="text" placeholder="Search Book Title" value={searchItem} onChange={handleSearch} />
          </Form>
        </div>
      </div>
      <div>
        {Object.keys(studentsByName).map((f_name) => (
          <div key={f_name} className='book-genre-div'>
            <h2 style={{ margin: '10px 0px 10px 16px' }}>{f_name}</h2>
            <ul>
              {studentsByName[f_name].map((student) => (
                <li key={student.id} className='book-lists'>
                  <div className='d-flex m-3'>
                    {/* <div className='photo-width'>{student && <img src={student.Photo}/>}</div> */}
                    <div className='book-detail'>
                      <p>Student F name : {student.f_name}</p>
                      <p>Student l Name : {student.l_name}</p>
                      <p>Student Roll No. : {student.roll_n}</p>
                      <p>Student Phone No. : {student.phone_n}</p>
                      <p>Student Year : {student.year}</p>
                    </div>
                  </div>
                  <div className='d-flex justify-content-center mb-3'>
                    <button onClick={() => handleEdit(student.id)} className='edit-btn'>Edit</button>
                    <button onClick={() => handleDelete(student.id)} className='delete-btn'>Delete</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default Studentlist;
