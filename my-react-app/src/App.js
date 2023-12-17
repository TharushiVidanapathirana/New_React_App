import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DepartmentForm from './components/DepartmentForm';
import EmployeeForm from './components/EmployeeForm';
import EmployeeListPage from './components/EmployeeListPage';

function App() {
  const buttonStyle = {
    display: 'inline-block',
    padding: '10px 20px',
    margin: '5px',
    textDecoration: 'none',
    color: 'white',
    backgroundColor: 'blue',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/department" style={buttonStyle}>
                Department
              </Link>
            </li>
            <li>
              <Link to="/employee" style={buttonStyle}>
                Employee
              </Link>
            </li>
            <li>
              <Link to="/employee-list" style={buttonStyle}>
                Employee List
              </Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Routes>
          <Route path="/department" element={<DepartmentForm />} />
          <Route path="/employee" element={<EmployeeForm />} />
          <Route path="/employee-list" element={<EmployeeListPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
