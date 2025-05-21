// import React, { useState } from 'react';
// import backgroundImage from '../assets/clinic.jpg';
// import './LoginPage.css'
// import {
//   Box,
//   Button,
//   TextField,
//   Typography,
//   Paper,
//   Avatar,
//   Grid,
// } from '@mui/material';
// import SpaIcon from '@mui/icons-material/Spa';

// const backgroundImageUrl = backgroundImage;

// const themeColors = {
//   card: '#FFFFFFDD', // semi-transparent
//   primary: '#B76BA3',
//   text: '#4A4A4A',
// };

// export default function LoginPage() {
//   const [name, setName] = useState('');
//   const [idNumber, setIdNumber] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!name || idNumber.length !== 9) {
//       alert('Please enter your full name and a valid ID number (9 digits).');
//       return;
//     }
//     alert(`Welcome ${name}`);
//   };

//   return (
// // {/* <Box
// //   sx={{
// //     height: '100vh', // Set height to 100vh
// //     width: '358%',
// //     backgroundImage: `url(${backgroundImageUrl})`,
// //     backgroundSize: 'cover',
// //     backgroundRepeat: 'no-repeat',
// //     backgroundPosition: 'center',
// //     display: 'flex',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     px: 2,
// //   }}
// // > */}
// <Box
//   sx={{
//     height: '100vh',
//     width: '358%',
//     backgroundImage: `url(${backgroundImageUrl})`,
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
//     backgroundPosition: 'center',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     px: 2,
//     '&::before': {
//       content: '""',
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       right: 0,
//       bottom: 0,
//       backgroundColor: 'rgba(255, 255, 255, 0.5)', // שקיפות של 50%
//       zIndex: 1,
//     },
//   }}
// >
//       <Paper
//         elevation={10}
//         sx={{
//           p: 5,
//           borderRadius: 4,
//           width: '100%',
//           maxWidth: 400,
//           textAlign: 'center',
//           backdropFilter: 'blur(8px)',
//           backgroundColor: themeColors.card,
//         }}
//       >
//         <Avatar
//           sx={{
//             bgcolor: themeColors.primary,
//             width: 60,
//             height: 60,
//             mb: 2,
//             mx: 'auto',
//           }}
//         >
//           <SpaIcon fontSize="large" />
//         </Avatar>
//         <Typography variant="h5" fontWeight="bold" color={themeColors.text} gutterBottom>
//           Clinic Login
//         </Typography>
//         <Typography variant="body2" color="text.secondary" mb={3}>
//           Welcome to your personal treatment
//         </Typography>
//         <form onSubmit={handleSubmit}>
//           <TextField
//             label="Full Name"
//             fullWidth
//             variant="outlined"
//             margin="normal"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <TextField
//             label="ID Number"
//             fullWidth
//             variant="outlined"
//             margin="normal"
//             value={idNumber}
//             onChange={(e) =>
//               setIdNumber(e.target.value.replace(/\D/g, '').slice(0, 9))
//             }
//             inputProps={{ maxLength: 9 }}
//           />
//           <Button
//             type="submit"
//             fullWidth
//             sx={{
//               mt: 3,
//               py: 1.2,
//               fontWeight: 'bold',
//               background: themeColors.primary,
//               color: 'white',
//               borderRadius: 3,
//               '&:hover': {
//                 background: '#9C4D86',
//               },
//             }}
//           >
//             Log In
//           </Button>
//         </form>
//       </Paper>
//     </Box>
//   );
// }
// import React, { useState } from 'react';
// import backgroundImage from '../assets/clinic.jpg';
// import './LoginPage.css';
// import {
//   Box,
//   Button,
//   TextField,
//   Typography,
//   Paper,
//   Avatar,
// } from '@mui/material';
// import SpaIcon from '@mui/icons-material/Spa';
// import { fetchClient } from '../../api';

// const ChecksWhetherThePersonIsAClient =async(name,id)=>{
//   const res=await fetchClient(`http://localhost:5223/api/Client/check-client?name=${encodeURIComponent(name)}&id=${encodeURIComponent(id)}`)
//   console.log(res);
// }
// export default function LoginPage() {
//   const [name, setName] = useState('');
//   const [idNumber, setIdNumber] = useState('');

  

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!name || idNumber.length !== 9) {
//       alert('Please enter your full name and a valid ID number (9 digits).');
//       return;
//     }
//     //alert(`Welcome ${name}`);
//     ChecksWhetherThePersonIsAClient(name,idNumber);
//   };

//   return (
//     <Box className="container">
//       <Paper elevation={10} className="paper">
//         <Avatar className="avatar">
//           <SpaIcon fontSize="large" />
//         </Avatar>
//         <Typography variant="h5" fontWeight="bold" color="#4A4A4A" gutterBottom>
//           Clinic Login
//         </Typography>
//         <Typography variant="body2" color="text.secondary" mb={3}>
//           Welcome to your personal treatment
//         </Typography>
//         <form onSubmit={handleSubmit}>
//           <TextField
//             label="Full Name"
//             fullWidth
//             variant="outlined"
//             margin="normal"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <TextField
//             label="ID Number"
//             fullWidth
//             variant="outlined"
//             margin="normal"
//             value={idNumber}
//             onChange={(e) =>
//               setIdNumber(e.target.value.replace(/\D/g, '').slice(0, 9))
//             }
//             inputProps={{ maxLength: 9 }}
//           />
//           <Button
//             type="submit"
//             fullWidth
//             className="button"
//           >
//             Log In
//           </Button>
//         </form>
//       </Paper>
//     </Box>
//   );
// }
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

const ChecksWhetherThePersonIsAClient = async (name, id) => {
  const res = await fetchClient(`http://localhost:5223/api/Client/check-client?name=${encodeURIComponent(name)}&id=${encodeURIComponent(id)}`);
  console.log(res);
}

export default function LoginPage() {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.login.name);
  const idNumber = useSelector((state) => state.login.id);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || idNumber.length !== 9) {
      alert('Please enter your full name and a valid ID number (9 digits).');
      return;
    }
    ChecksWhetherThePersonIsAClient(name, idNumber);
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
