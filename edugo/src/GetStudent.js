import React, { useState, useEffect } from 'react';
import ApiService from './ApiService';
import NavBar from './NavBar'


function GetStudent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const handleSearch = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await ApiService.getStudents();
  
      const searchTermLower = searchTerm.toLowerCase();
      console.log(response[0]);
      const filteredStudents = response.filter(student=>student.name.toLowerCase().includes (searchTermLower));

if (filteredStudents.length === 0) {
        setError('No student found with the given name.');}else{
          setStudent(filteredStudents);
        }
        }
      
     catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    if (!searchTerm) {
      setStudent(null);
    }
  }, [searchTerm]);

  return (

    <div id='get-input-container'>
      <NavBar />
      <img className="student-img" src='./images/getstudent.png' width={"120px"} alt={"user-logo"} ></img>
      <h1>Get Student's Details</h1>
      <input
        autoComplete='off'
        name='name'
        id='id'
        type="text"
        placeholder="Enter student name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}

      />
      <button onClick={handleSearch} disabled={!searchTerm} class="w3-btn">
        Search
      </button>

      {loading && <p>Loading student data...</p>}
      {error && <p>Error: {error}</p>}


      
      <div>
        {student && student.map((student) => (
        <div key={student.id} class>
          <h2 >Student Information </h2>
          <p>Name: {student.name}</p>
          <p>Email: {student.email}</p>
          </div>
        ))}
 
      </div>
    </div>
  );
}

export default GetStudent;