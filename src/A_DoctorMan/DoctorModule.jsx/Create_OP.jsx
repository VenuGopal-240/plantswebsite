import React, { useState } from 'react';
import './opcss.css';
const OperationForm = () => {
  const [doctor, setDoctor] = useState('');
  const [operationDate, setOperationDate] = useState('');
  const [operationType, setOperationType] = useState('');
  const [patientName, setPatientName] = useState('');

  const doctors = [
    'Dr. Smith',
    'Dr. Johnson',
    'Dr. Williams',
    'Dr. Brown',
    'Dr. Jones',
    'Dr. Garcia',
    'Dr. Martinez',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Operation scheduled for ${patientName} by ${doctor} on ${operationDate} for ${operationType}`);
  };

  return (
    <div className="operation-form">
      <h2>Operation Scheduling Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="patientName">Patient Name:</label>
          <input
            type="text"
            id="patientName"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="doctor">Select Doctor:</label>
          <select
            id="doctor"
            value={doctor}
            onChange={(e) => setDoctor(e.target.value)}
            required
          >
            <option value="">Select a doctor</option>
            {doctors.map((doc, index) => (
              <option key={index} value={doc}>
                {doc}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="operationDate">Operation Date:</label>
          <input
            type="date"
            id="operationDate"
            value={operationDate}
            onChange={(e) => setOperationDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="operationType">Type of Operation:</label>
          <input
            type="text"
            id="operationType"
            value={operationType}
            onChange={(e) => setOperationType(e.target.value)}
            required
          />
        </div>
        <button type="submit">Schedule Operation</button>
      </form>
    </div>
  );
};

export default OperationForm;
