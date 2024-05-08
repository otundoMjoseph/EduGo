import React, { useState, useEffect } from 'react';
import ApiService from './ApiService';

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
      setStudent(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Clear search results when search term is empty
  useEffect(() => {
    if (!searchTerm) {
      setStudent(null);
    }
  }, [searchTerm]);

  return (
    <div>
      <input
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
      {student && (
        <div>
          <h2>Student Information</h2>
          {/* Display student information here, e.g., */}
          <p>Name: {student.name}</p>
          <p>ID: {student.id}</p>
          {/* ... */}
        </div>
      )}
    </div>
  );
}

export default GetStudent;