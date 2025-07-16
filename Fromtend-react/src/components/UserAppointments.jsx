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
import { useNavigate } from 'react-router-dom';
import { fetchAppointmentDelete } from '../../api';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#e89cae',
    color: 'rgba(255, 255, 255, 0.87)',
    fontWeight: 'bold',
    fontSize: 16,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
    color: '#7a3e3e',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#fce4ec',
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const UserAppointments = () => {
  const navigate = useNavigate();
  const arrAppointments = useSelector((state) => state.appointments.arrAppointment);

  const handleNewButtonClick = () => {
    navigate('/TreatmentType');
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 24 }}>
        <TableContainer component={Paper} style={{ width: '95%', maxHeight: '700px', backgroundColor: '#f8e1e7' }}>
          <Table sx={{ minWidth: '100%' }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Date</StyledTableCell>
                <StyledTableCell align="right">Hour</StyledTableCell>
                <StyledTableCell align="right">Day</StyledTableCell>
                <StyledTableCell align="right">Name</StyledTableCell>
                <StyledTableCell align="right">Duration</StyledTableCell>
                <StyledTableCell align="right">Treatment Type</StyledTableCell>
                <StyledTableCell align="right">Cancel</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {arrAppointments.length > 0 &&
                arrAppointments.map((appointment, index) => (
                  <StyledTableRow key={index}>
                    <StyledTableCell component="th" scope="row">{appointment.date}</StyledTableCell>
                    <StyledTableCell align="right">{appointment.hour}</StyledTableCell>
                    <StyledTableCell align="right">{appointment.day}</StyledTableCell>
                    <StyledTableCell align="right">{appointment.name}</StyledTableCell>
                    <StyledTableCell align="right">{appointment.duration}</StyledTableCell>
                    <StyledTableCell align="right">{appointment.treatmentType}</StyledTableCell>
                    <StyledTableCell align="right">
                      <button
                        onClick={async () => await fetchAppointmentDelete(`http://localhost:5223/api/Appointment`, appointment)}
                        style={{
                          padding: '8px 16px',
                          backgroundColor: '#f48fb1',
                          color: 'white',
                          border: 'none',
                          borderRadius: '4px',
                          fontSize: '1em',
                          cursor: 'pointer',
                        }}
                      >
                        Cancel
                      </button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 12 }}>
        <button
          onClick={handleNewButtonClick}
          style={{
            padding: '14px 36px',
            borderRadius: '8px',
            background: '#f7cac9',
            color: 'rgba(255, 255, 255, 0.87)',
            fontWeight: 600,
            fontSize: '1.1em',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          New appointment
        </button>
      </div>
    </>
  );
};

export default UserAppointments;