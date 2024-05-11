import React, { useState, useEffect } from 'react';
import ApiService from './ApiService';

function UpdateStudentComponent() {
    const [students, setStudents] = useState([]);
    const [selectedStudentId, setSelectedStudentId] = useState('');
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [newName, setNewName] = useState('');

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const studentsData = await ApiService.getAllStudents();
                setStudents(studentsData);
            } catch (error) {
                console.error('Error fetching students:', error);
            }
        };
        fetchStudents();
    }, []);

    const handleStudentChange = async (e) => {
        const id = e.target.value;
        setSelectedStudentId(id);
        const student = await ApiService.getStudentById(id);
        setSelectedStudent(student);
    };

    const handleUpdate = async () => {
        try {
            const updatedStudent = { ...selectedStudent, name: newName };
            await ApiService.updateStudent(selectedStudentId, updatedStudent);
            alert('Student updated successfully!');
            setSelectedStudentId('');
            setSelectedStudent(null);
            setNewName('');
        } catch (error) {
            console.error('Error updating student:', error);
            alert('An error occurred while updating the student.');
        }
    };

    return (
        <div>
            <h2>Update Student</h2>
            <select value={selectedStudentId} onChange={handleStudentChange}>
                <option value="">Select a student</option>
                {students.map(student => (
                    <option key={student.id} value={student.id}>
                        {student.name} - {student.id}
                    </option>
                ))}
            </select>
            {selectedStudent && (
                <div>
                    <p>Selected Student: {selectedStudent.name}</p>
                    <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
                    <button onClick={handleUpdate}>Update Student</button>
                </div>
            )}
        </div>
    );
}

export default UpdateStudentComponent;
