// import { useDispatch, useSelector } from "react-redux";

// const AllAppointments=()=>{
//     const dispatch=useDispatch();
//     const arrAppointmet=useSelector((state)=>state.apppointments.arrAppointmet)
// return(
//     <>

//     </>
// )
// }
// export default AllAppointments
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const AllAppointments = () => {
    const dispatch = useDispatch();
    const arrAppointments = useSelector((state) => state.appointments.arrAppointment);

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Hour</TableCell>
                        <TableCell>Day</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Duration</TableCell>
                        <TableCell>Treatment Type</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {arrAppointments.length &&
                    arrAppointments.map((appointment, index) => (
                        <TableRow key={index}>
                            <TableCell>{appointment.date}</TableCell>
                            <TableCell>{appointment.hour}</TableCell>
                            <TableCell>{appointment.day}</TableCell>
                            <TableCell>{appointment.name}</TableCell>
                            <TableCell>{appointment.duration}</TableCell>
                            <TableCell>{appointment.treatmentType}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default AllAppointments;
