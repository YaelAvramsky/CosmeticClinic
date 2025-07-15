import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setName, setId } from '../redux/LoginSlice';
import { setAppointments } from '../redux/ApppointmentSlice';
import { useNavigate } from 'react-router-dom';
import { getAppointments } from '../../api';

import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Avatar,
} from '@mui/material';
import SpaIcon from '@mui/icons-material/Spa';
import './LoginPage.css';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const name = useSelector((state) => state.login.name);
  const idNumber = useSelector((state) => state.login.id);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || idNumber.length !== 9) {
      alert('Please enter your full name and a valid ID number (9 digits).');
      return;
    }
    try {
      const appointments = await getAppointments(name, idNumber);
      dispatch(setAppointments(appointments));
      navigate('/userAppointments');
    } catch (error) {
      console.error('Error fetching appointments:', error);
      alert('Failed to fetch appointments: ' + error.message);
    }
  };

  return (
    <Box className="container" sx={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "transparent" // רקע חיצוני שקוף
    }}>
      <Paper elevation={10} className="paper" sx={{
        padding: 4,
        borderRadius: 4,
        minWidth: 340,
        maxWidth: 380,
        textAlign: 'center',
        background: "#fff", // רקע לבן ל-Paper (הטופס)
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.10)"
      }}>
        <Avatar sx={{ bgcolor: "#f8bbd0", margin: '0 auto', mb: 2 }}>
          <SpaIcon fontSize="large" sx={{ color: "#ad1457" }} />
        </Avatar>
        <Typography variant="h5" fontWeight="bold" sx={{ color: "#ad1457" }} gutterBottom>
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
            required
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
            required
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 2,
              background: "linear-gradient(90deg, #ecb6d1 0%, #e7c2c2 100%)",
              color: "#ad1457",
              fontWeight: "bold",
              boxShadow: "0 2px 8px 0 rgba(236, 182, 209, 0.2)",
              '&:hover': {
                background: "linear-gradient(90deg, #e7c2c2 0%, #ecb6d1 100%)",
                color: "#fff"
              }
            }}
          >
            Log In
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default LoginPage;