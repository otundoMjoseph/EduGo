import React, { useState, useEffect } from 'react';
import ApiService from './ApiService';
import Navbar from './NavBar';

function GetStudentDetailsComponent() {
    const [students, setStudents] = useState([]);

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

    const handleStudentSelect = async (id) => {
        try {
            const student = await ApiService.getStudentById(id);
            alert(`Student Details: ${JSON.stringify(student)}`);
        } catch (error) {
            console.error('Error fetching student details:', error);
            alert('An error occurred while fetching student details.');
        }
    };

    return (
        <div>
            <Navbar />
             <img className="student-img" src='./images/getstudent.png' width={"120px"} alt={"user-logo"} ></img>
            <h2>Get Student Details</h2>
           
            <ul>
                {students.map(student => (
                    <li key={student.id} onClick={() => handleStudentSelect(student.id)}>
                        {student.name} - {student.id}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default GetStudentDetailsComponent;
