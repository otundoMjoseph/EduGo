import React, { useState } from 'react';
import ApiService from './ApiService';

function DeleteStudent() {
    const [studentId, setStudentId] = useState('');
    const [message, setMessage] = useState('');

    const handleDelete = async () => {
        try {
            await ApiService.deleteStudent(studentId);
            setMessage('Student deleted successfully!');
            
            setStudentId(''); 
        } catch (error) {
            setMessage('An error occurred while deleting.');
            console.error(error); 
        }
    };

    return (
        <div>
            <h2>Delete Student</h2>
            <label htmlFor="studentId">Student ID:</label>
            <input 
                type="text" 
                id="studentId" 
                value={studentId} 
                onChange={(e) => setStudentId(e.target.value)} 
            />
            <button onClick={handleDelete} disabled={!studentId}> 
                Confirm Delete 
            </button> 
            {message && <p>{message}</p>} 
        </div>
    );
}

export default DeleteStudent;