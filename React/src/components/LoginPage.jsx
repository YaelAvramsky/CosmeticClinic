import React, { useState } from 'react';
import backgroundImage from '../assets/clinic.jpg';
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Avatar,
  Grid,
} from '@mui/material';
import SpaIcon from '@mui/icons-material/Spa';

const backgroundImageUrl = backgroundImage;

const themeColors = {
  card: '#FFFFFFDD', // חצי שקיפות
  primary: '#B76BA3',
  text: '#4A4A4A',
};

export default function LoginPage() {
  const [name, setName] = useState('');
  const [idNumber, setIdNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || idNumber.length !== 9) {
      alert('אנא הזיני שם מלא ותעודת זהות תקינה (9 ספרות)');
      return;
    }
    alert(`ברוכה הבאה ${name}`);
  };

  return (
   <Box
  sx={{
    minHeight: '100vh',
    width: '100%', // הוסף את זה
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    px: 2,
  }}
>
      <Paper
        elevation={10}
        sx={{
          p: 5,
          borderRadius: 4,
          width: '100%',
          maxWidth: 400,
          textAlign: 'center',
          backdropFilter: 'blur(8px)',
          backgroundColor: themeColors.card,
        }}
      >
        <Avatar
          sx={{
            bgcolor: themeColors.primary,
            width: 60,
            height: 60,
            mb: 2,
            mx: 'auto',
          }}
        >
          <SpaIcon fontSize="large" />
        </Avatar>
        <Typography variant="h5" fontWeight="bold" color={themeColors.text} gutterBottom>
          התחברות לקליניקה
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={3}>
          ברוכה הבאה לטיפול האישי שלך
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="שם מלא"
            fullWidth
            variant="outlined"
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="תעודת זהות"
            fullWidth
            variant="outlined"
            margin="normal"
            value={idNumber}
            onChange={(e) =>
              setIdNumber(e.target.value.replace(/\D/g, '').slice(0, 9))
            }
            inputProps={{ maxLength: 9 }}
          />
          <Button
            type="submit"
            fullWidth
            sx={{
              mt: 3,
              py: 1.2,
              fontWeight: 'bold',
              background: themeColors.primary,
              color: 'white',
              borderRadius: 3,
              '&:hover': {
                background: '#9C4D86',
              },
            }}
          >
            התחברי
          </Button>
        </form>
      </Paper>
    </Box>
  );
}
