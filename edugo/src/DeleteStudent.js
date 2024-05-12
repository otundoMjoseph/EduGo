import React, { useState, useEffect } from 'react';
import ApiService from './ApiService';
import NavBar from './NavBar';

function DeleteStudentComponent() {
    const [students, setStudents] = useState([]);
    const [selectedStudentId, setSelectedStudentId] = useState('');
    const [selectedStudent, setSelectedStudent] = useState(null);

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

    const handleDelete = async () => {
        try {
            await ApiService.deleteStudent(selectedStudentId);
            alert('Student deleted successfully!');
            setSelectedStudentId('');
            setSelectedStudent(null);
        } catch (error) {
            console.error('Error deleting student:', error);
            alert('An error occurred while deleting the student.');
        }
    };

    return (
        
            <div>
                <NavBar/>
            <img className="student-img" src='./images/getstudent.png' width={"120px"} alt={"user-logo"} ></img>
            <h2>Delete Student</h2>
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
                    <button onClick={handleDelete}>Delete Student</button>
                </div>
            )}
        </div>
    );
}

export default DeleteStudentComponent;
