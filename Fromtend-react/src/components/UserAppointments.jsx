import React from 'react';
import './css/UserAppointments.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchAppointmentDelete } from '../../api';
import EventBusyIcon from '@mui/icons-material/EventBusy';

const UserAppointments = () => {
  const navigate = useNavigate();
  const arrAppointments = useSelector((state) => state.appointments.arrAppointment);

  const handleNewButtonClick = () => {
    navigate('/TreatmentType');
  };

  const handleCancel = async (appointment) => {
    const result = await fetchAppointmentDelete(appointment);
    // אפשר להוסיף כאן dispatch לעדכון ה־Redux אם צריך
    console.log('Deleted:', result);
  };

  return (
    <div className="appointments-container">
      <h2 className="appointments-title">Your Appointments</h2>

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
              <button className="cancel-btn" onClick={() => handleCancel(appointment)}>
                <EventBusyIcon sx={{ fontSize: 18, marginRight: 1 }} />
                Cancel
              </button>
            </div>
          ))
        ) : (
          <p className="no-appointments">You have no appointments yet.</p>
        )}
      </div>

      <button className="new-appointment-btn" onClick={handleNewButtonClick}>
        + New Appointment
      </button>
    </div>
  );
};

export default UserAppointments;