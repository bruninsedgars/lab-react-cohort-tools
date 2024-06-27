import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function StudentDetailsPage() {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    // Fetch student details using id
    fetch(`https://api.example.com/students/${id}`)
      .then(response => response.json())
      .then(data => setStudent(data))
      .catch(error => console.error('Error fetching student data:', error));
  }, [id]);

  if (!student) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Student Details</h1>
      <p>Name: {student.name}</p>
      <p>Email: {student.email}</p>
      <p>Age: {student.age}</p>
      {/* Render more student details as needed */}
    </div>
  );
}

export default StudentDetailsPage;
