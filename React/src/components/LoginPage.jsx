import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setName, setId } from '../redux/LoginSlice'; // הנתיב יכול להשתנות בהתאם למבנה שלך
import backgroundImage from '../assets/clinic.jpg';
import './LoginPage.css';

import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Avatar,
} from '@mui/material';
import SpaIcon from '@mui/icons-material/Spa';
import { fetchClient } from '../../api';
import { setAppointments } from '../redux/ApppointmentSlice';
import { useNavigate } from 'react-router-dom';

// const ChecksWhetherThePersonIsAClient = async (name, id) => {
//   const res = await fetchClient(`http://localhost:5223/api/Client/check-client?name=${encodeURIComponent(name)}&id=${encodeURIComponent(id)}`);
//   console.log(res);
// }

const GetAppointments=async(name,id)=>{
  const res=await fetchClient(`http://localhost:5223/api/Client/Get-Appointments?name=${encodeURIComponent(name)}&id=${encodeURIComponent(id)}`)
  // if(!res){
  //   throw new Error("RRROR! can't fatch data")
  // }
  return res;
}

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const name = useSelector((state) => state.login.name);
  const idNumber = useSelector((state) => state.login.id);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!name || idNumber.length !== 9) {
  //     alert('Please enter your full name and a valid ID number (9 digits).');
  //     return;
  //   }
  //   dispatch(setAppointments(GetAppointments(name,idNumber)));
  //  Navigate('/appointments')
  // };

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (!name || idNumber.length !== 9) {
    alert('Please enter your full name and a valid ID number (9 digits).');
    return;
  }
  try {
    const appointments = await GetAppointments(name, idNumber);
    dispatch(setAppointments(appointments));
    navigate('/appointments');
  } catch (error) {
    console.error('Error fetching appointments:', error);
    alert('Failed to fetch appointments: ' + error.message);
  }
};

  return (
    <Box className="container">
      <Paper elevation={10} className="paper">
        <Avatar className="avatar">
          <SpaIcon fontSize="large" />
        </Avatar>
        <Typography variant="h5" fontWeight="bold" color="#4A4A4A" gutterBottom>
          Clinic Login
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={3}>
          Welcome to your personal treatment
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Full Name"
            fullWidth
            variant="outlined"
            margin="normal"
            value={name}
            onChange={(e) => dispatch(setName(e.target.value))}
          />
          <TextField
            label="ID Number"
            fullWidth
            variant="outlined"
            margin="normal"
            value={idNumber}
            onChange={(e) => {
              const idValue = e.target.value.replace(/\D/g, '').slice(0, 9);
              dispatch(setId(idValue));
            }}
            inputProps={{ maxLength: 9 }}
          />
          <Button
            type="submit"
            fullWidth
            className="button"
          >
            Log In
          </Button>
        </form>
      </Paper>
    </Box>
  );
}
