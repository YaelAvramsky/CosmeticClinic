import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  SetId,
  SetFirstName,
  SetLastName,
  SetPhonNumber,
  SetEmail,
  SetCity,
} from '../redux/RegisterSlice';
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Avatar,
  Alert,
} from '@mui/material';
import SpaIcon from '@mui/icons-material/Spa';
import { fetchClientPost } from '../../api';
import './Register.css';

const AddNewClient = async (Id, FirstName, LastName, PhonNumber, Email, City) => {
  const query = new URLSearchParams({ Id, FirstName, LastName, PhonNumber, Email, City }).toString();
  const res = await fetchClientPost(`http://localhost:5223/api/Client?${query}`, {});
  return res;
};

const Register = () => {
  const dispatch = useDispatch();
  const { id, FirstName, LastName, PhonNumber, Email, City } = useSelector((state) => state.register);

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const validate = () => {
    const newErrors = {};
    if (!id) newErrors.id = 'ID is required';
    if (!FirstName) newErrors.FirstName = 'First name is required';
    if (!LastName) newErrors.LastName = 'Last name is required';
    if (!PhonNumber || !/^\d{7,10}$/.test(PhonNumber)) newErrors.PhonNumber = 'Valid phone number is required';
    if (!Email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email)) newErrors.Email = 'Valid email is required';
    if (!City) newErrors.City = 'City is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    await AddNewClient(id, FirstName, LastName, PhonNumber, Email, City);
    setSuccessMessage('🎉 You have successfully registered in our system!');
    setTimeout(() => setSuccessMessage(''), 5000);
  };

  return (
    <Box className="container" sx={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "transparent"
    }}>
      <Paper elevation={10} sx={{
        padding: 4,
        borderRadius: 4,
        minWidth: 340,
        maxWidth: 380,
        textAlign: 'center',
        background: "#fff",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.10)"
      }}>
        <Avatar sx={{ bgcolor: "#f8bbd0", margin: '0 auto', mb: 2 }}>
          <SpaIcon fontSize="large" sx={{ color: "#ad1457" }} />
        </Avatar>
        <Typography variant="h5" fontWeight="bold" sx={{ color: "#ad1457" }} gutterBottom>
          Clinic Registration
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={2}>
          Join our wellness experience
        </Typography>

        {successMessage && (
          <Alert
            severity="success"
            sx={{
              backgroundColor: '#f8e1e7',
              color: '#7a3e3e',
              fontWeight: 500,
              marginBottom: 2,
              borderRadius: 2,
            }}
          >
            {successMessage}
          </Alert>
        )}

        <form onSubmit={handleSubmit} noValidate>
          {[
            { label: 'ID', value: id, action: SetId, errorKey: 'id' },
            { label: 'First Name', value: FirstName, action: SetFirstName, errorKey: 'FirstName' },
            { label: 'Last Name', value: LastName, action: SetLastName, errorKey: 'LastName' },
            { label: 'Phone Number', value: PhonNumber, action: SetPhonNumber, errorKey: 'PhonNumber' },
            { label: 'Email', value: Email, action: SetEmail, errorKey: 'Email', type: 'email' },
            { label: 'City', value: City, action: SetCity, errorKey: 'City' },
          ].map(({ label, value, action, errorKey, type = 'text' }) => (
            <TextField
              key={label}
              label={label}
              fullWidth
              variant="outlined"
              margin="normal"
              type={type}
              value={value}
              onChange={(e) => dispatch(action(e.target.value))}
              helperText={errors[errorKey]}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: errors[errorKey] ? '#f7cac9' : '#ccc',
                  },
                  '&:hover fieldset': {
                    borderColor: '#f48fb1',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#f48fb1',
                  },
                },
              }}
            />
          ))}

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
            Sign Up
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Register;