import React, { useState } from 'react';
import axios from 'axios';
import './DepartmentForm.css';

const DepartmentForm = () => {
  const [department, setDepartment] = useState({ code: '', name: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleInputChange = (e) => {
    setDepartment({ ...department, [e.target.name]: e.target.value });
  };

  const handleAddDepartment = async () => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(null);

      if (!department.name) {
        setError('Please fill in the department name.');
        return;
      }

      
      const departmentData = { DepartmentName: department.name };

    
      await axios.post('https://localhost:44308/api/Department', departmentData);

      setSuccess('Department added successfully!');
      setDepartment({ code: '', name: '' }); 
    } catch (error) {
      setError('An error occurred while adding the department. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Add Department</h2>
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}
      <label>Name:</label>
      <input type="text" name="name" value={department.name} onChange={handleInputChange} />
      <button onClick={handleAddDepartment} disabled={loading}>
        {loading ? 'Adding Department...' : 'Add Department'}
      </button>
    </div>
  );
};

export default DepartmentForm;
