import React from 'react';
import './css/UserAppointments.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AllAvailableAppointments = () => {
  const navigate = useNavigate();
  const arrAppointments = useSelector((state) => state.appointments.arrAppointment);

  const handleNewButtonClick = () => {
    navigate('/newAppointment');
  };

  return (
    <div className="appointments-container">
      <h2 className="appointments-title">Available Appointments</h2>

      <div className="appointments-list">
        {arrAppointments.length > 0 ? (
          arrAppointments.map((appointment, index) => (
            <div key={index} className="appointment-card">
              <div className="appointment-info">
                <p><strong>Date:</strong> {appointment.date}</p>
                <p><strong>Hour:</strong> {appointment.hour}</p>
                <p><strong>Day:</strong> {appointment.day}</p>
                <p><strong>Name:</strong> {appointment.name}</p>
                <p><strong>Duration:</strong> {appointment.duration}</p>
                <p><strong>Treatment:</strong> {appointment.treatmentType}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="no-appointments">No appointments available at the moment.</p>
        )}
      </div>

      <button className="new-appointment-btn" onClick={handleNewButtonClick}>
        + Choose Another Date
      </button>
    </div>
  );
};

export default AllAvailableAppointments;