import React, { useState } from 'react';
import ApiService from './ApiService';

function SubmitStudent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    // ...other fields
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
      // Clear the form after successful submission
      setFormData({ name: '', email: '', /* ...other fields */ }); 
      // Optionally show a success message or redirect
      alert('Student submitted successfully!'); // Example success message
    } catch (error) {
      // Handle submission errors (e.g., display error messages)
      console.error('Error submitting student:', error);
      alert('Failed to submit student. Please try again.'); // Example error message
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
      {/* ...other form fields */}
      <button type="submit">Submit</button>
    </form>
  );
}

export default SubmitStudent;