// actions/studentaction.js
import axios from 'axios';

// Action Types
export const FETCH_STUDENTS_REQUEST = 'FETCH_STUDENTS_REQUEST';
export const FETCH_STUDENTS_SUCCESS = 'FETCH_STUDENTS_SUCCESS';
export const FETCH_STUDENTS_FAILURE = 'FETCH_STUDENTS_FAILURE';
export const ADD_STUDENT = 'ADD_STUDENT';
export const UPDATE_STUDENT = 'UPDATE_STUDENT';
export const DELETE_STUDENT = 'DELETE_STUDENT';

// Action Creators
export const fetchStudents = () => async (dispatch) => {
  dispatch({ type: FETCH_STUDENTS_REQUEST });
  try {
    const response = await axios.get('http://localhost:3000/students');
    dispatch({ type: FETCH_STUDENTS_SUCCESS, payload: response.data.students });
  } catch (error) {
    dispatch({ type: FETCH_STUDENTS_FAILURE, payload: error.message });
  }
};

export const addStudent = (student) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:3000/students', student);
    dispatch({ type: ADD_STUDENT, payload: response.data });
  } catch (error) {
    // handle error
  }
};

export const updateStudent = (student) => async (dispatch) => {
  try {
    const response = await axios.put(`http://localhost:3000/students/${student.id}`, student);
    dispatch({ type: UPDATE_STUDENT, payload: response.data });
  } catch (error) {
    // handle error
  }
};

export const deleteStudent = (id) => async (dispatch) => {
  try {
    await axios.delete(`/path-to-your-api-endpoint/${id}`);
    dispatch({ type: DELETE_STUDENT, payload: id });
  } catch (error) {
    // handle error
  }
};
