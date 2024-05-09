import React, { useState, useEffect } from 'react';
import Navbar from './NavBar';
import ApiService from './ApiService';

export default function UpdateStudent() {
  const [students, setStudents] = useState([]);
  const [selectedStudentId, setSelectedStudentId] = useState(null);
  const [student, setStudent] = useState({
    name: '',
    email: '',
    // Add other fields as needed
  });

  useEffect(() => {
    const fetchStudents = async () => {
      const data = await ApiService.getStudents();
      setStudents(data);
    };

    fetchStudents();
  }, []);

  useEffect(() => {
    if (selectedStudentId) {
      const fetchStudent = async () => {
        const data = await ApiService.getStudentById(selectedStudentId);
        setStudent(data);
      };

      fetchStudent();
    }
  }, [selectedStudentId]);

  const handleStudentSelect = (id) => {
    setSelectedStudentId(id);
  };

  const handleChange = (e) => {
    setStudent({...student, [e.target.name]: e.target.value });

  };

  const handleSubmit = async (e) => {
  
    if (selectedStudentId) {
      try {
        await ApiService.updateStudent(selectedStudentId, student);
        // Handle success (e.g., show a success message, redirect)
      } catch (error) {
        // Handle error (e.g., show an error message)
      }
    }
  };

  return (
    <div className="submit-input-container">
      <Navbar />
      <img className="student-img" src='./images/getstudent.png' width={"120px"} alt={"user-logo"} ></img>
      <h1>Update Student's Details</h1>
      <div>
        <h2>Select Student to Update:</h2>
        <ul>
          {students.map((student) => (
            <li key={student.id}>
              {student.name} ({student.email})
              <button onClick={() => handleStudentSelect(student.id)} onChange={handleChange}>Update</button>
            </li>
          ))}
        </ul>
      </div>
      {selectedStudentId && (
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" value={student.name} onChange={handleChange} placeholder="Name" required />
          <input type="email" name="email" value={student.email} onChange={handleChange} placeholder="Email" required />
          {/* Add other input fields as needed */}
          <button type="submit">Update</button>
        </form>
      )}
    </div>
  );
}