import React, { useState } from 'react';
import ApiService from './ApiService';

function SubmitStudent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await ApiService.createStudent(formData);
      
      setFormData({ name: '', email: '',  }); 
      
      alert('Student submitted successfully!'); e
    } catch (error) {
      
      console.error('Error submitting student:', error);
      alert('Failed to submit student. Please try again.'); 
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Submit Student</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
     
      <button type="submit">Submit</button>
    </form>
  );
}

export default SubmitStudent;