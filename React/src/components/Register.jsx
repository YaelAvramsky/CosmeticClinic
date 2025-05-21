import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SetId, SetFirstName, SetLastName, SetPhonNumber, SetEmail, SetCity } from '../redux/RegisterSlice'; // עדכן את הנתיב בהתאם
import { Box, Button, TextField, Typography, Paper } from '@mui/material';
import '@mui/material/styles';
import SpaIcon from '@mui/icons-material/Spa';
import { fetchClientPost } from '../../api';
import './Register.css'

// const AddNewClient=async(Id,FirstName,LastName,PhonNumber,Email,City)=>{
//   const res=await fetchClient(`http://localhost:5223/api/Client?Id=${encodeURIComponent(Id)}&FirstName=${encodeURIComponent(FirstName)}&LastName=${encodeURIComponent(LastName)
//   }&PhonNumber=${encodeURIComponent(PhonNumber)}&Email=${encodeURIComponent(Email)}&City=${encodeURIComponent(City)}`)
//   return res;
// }
// const AddNewClient = async (Id, FirstName, LastName, PhonNumber, Email, City) => {
//     const data = {
//         Id,
//         FirstName,
//         LastName,
//         PhonNumber,
//         Email,
//         City
//     };

//     const res = await fetchClientPost('http://localhost:5223/api/Client', data);
//     return res;
// };
const AddNewClient = async (Id, FirstName, LastName, PhonNumber, Email, City) => {
    const query = new URLSearchParams({
        Id,
        FirstName,
        LastName,
        PhonNumber,
        Email,
        City
    }).toString();

    const res = await fetchClientPost(`http://localhost:5223/api/Client?${query}`, {});
    return res;
};

const Register = () => {

    const dispatch = useDispatch();
    const { id, FirstName, LastName, PhonNumber, Email, City } = useSelector((state) => state.register);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await AddNewClient(id, FirstName, LastName, PhonNumber, Email, City);
        alert('You have successfully registered in our system');
    };

    return (
        <Box className="container" sx={{ padding: 2 }}>
            <Paper elevation={3} sx={{ padding: 4 }}>
                <Typography variant="h4" gutterBottom>
                    Sign Up
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="ID"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        onChange={(e) => dispatch(SetId(e.target.value))}
                    />
                    <TextField
                        label="First Name"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        onChange={(e) => dispatch(SetFirstName(e.target.value))}
                    />
                    <TextField
                        label="Last Name"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        onChange={(e) => dispatch(SetLastName(e.target.value))}
                    />
                    <TextField
                        label="Phone Number"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        onChange={(e) => dispatch(SetPhonNumber(e.target.value))}
                    />
                    <TextField
                        label="Email"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        type="email"
                        onChange={(e) => dispatch(SetEmail(e.target.value))}
                    />
                    <TextField
                        label="City"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        onChange={(e) => dispatch(SetCity(e.target.value))}
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        className="button"
                        fullWidth
                    >
                        Sign Up
                    </Button>

                </form>
            </Paper>
        </Box>
    );
};

export default Register;

