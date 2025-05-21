
// import React from 'react';
// import { useDispatch, useSelector } from "react-redux";
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
// import './AllAppointments.css';

// const AllAppointments = () => {
//    // const dispatch = useDispatch();
//     const arrAppointments = useSelector((state) => state.appointments.arrAppointment);

//     return (
//         <TableContainer component={Paper}>
//             <Table>  
//                 <TableHead>
//                     <TableRow>
//                         <TableCell>Date</TableCell>
//                         <TableCell>Hour</TableCell>
//                         <TableCell>Day</TableCell>
//                         <TableCell>Name</TableCell>
//                         <TableCell>Duration</TableCell>
//                         <TableCell>Treatment Type</TableCell>
//                     </TableRow>
//                 </TableHead>
//                 <TableBody>
//                     {arrAppointments.length &&
//                     arrAppointments.map((appointment, index) => (
//                         <TableRow key={index}>
//                             <TableCell>{appointment.date}</TableCell>
//                             <TableCell>{appointment.hour}</TableCell>
//                             <TableCell>{appointment.day}</TableCell>
//                             <TableCell>{appointment.name}</TableCell>
//                             <TableCell>{appointment.duration}</TableCell>
//                             <TableCell>{appointment.treatmentType}</TableCell>
//                         </TableRow>
//                     ))}
//                 </TableBody>
//             </Table>
//         </TableContainer>
//     );
// };

// export default AllAppointments;


import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
import './AllAppointments.css'
import { useNavigate } from 'react-router-dom';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

  const AllAppointments = () => {
    const navigate=useNavigate();
       
        const arrAppointments = useSelector((state) => state.appointments.arrAppointment);

        return (
            <>
            <div id='table' style={{height:'600px',overflow:'auto',width:'100vh'}}>
            <TableContainer component={Paper} >
              <Table sx={{ minWidth: '100%'}} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Date</StyledTableCell>
                    <StyledTableCell align="right">Hour</StyledTableCell>
                    <StyledTableCell align="right">Day</StyledTableCell>
                    <StyledTableCell align="right">Name</StyledTableCell>
                    <StyledTableCell align="right">Duration</StyledTableCell>
                    <StyledTableCell align="right">Treatment Type</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {arrAppointments.length > 0 &&
                   arrAppointments.map((appointment, index)  => (
                    <StyledTableRow key={index}>
                      <StyledTableCell component="th" scope="row">
                        {appointment.date}
                      </StyledTableCell>
                      <StyledTableCell align="right">{appointment.hour}</StyledTableCell>
                      <StyledTableCell align="right">{appointment.day}</StyledTableCell>
                      <StyledTableCell align="right">{appointment.name}</StyledTableCell>
                      <StyledTableCell align="right">{appointment.duration}</StyledTableCell>
                      <StyledTableCell align="right">{appointment.treatmentType}</StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            </div>

            <button onClick={()=>navigate('/newAppointment')}>Another Date</button>
            
            </>
          );
  }
    
export default AllAppointments;

