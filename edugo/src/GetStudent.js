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
      const response = await ApiService.getStudentById(searchTerm);
      console.log(response)
      setStudent(
        <div>
          <h2>Student Information</h2>

          <p>Name: {response.name}</p>
          <p>ID: {response.id}</p>

        </div>
      );
    } catch (error) {
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
        placeholder="Enter student ID"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}

      />
      <button onClick={handleSearch} disabled={!searchTerm}>
        Search
      </button>

      {loading && <p>Loading student data...</p>}
      {error && <p>Error: {error}</p>}


      
      <div>
        {student && student}
      </div>
    </div>
  );
}

export default GetStudent;