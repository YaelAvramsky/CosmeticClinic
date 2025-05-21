import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchClient } from '../../api';
import { setAppointments } from '../redux/ApppointmentSlice';


const SelectDate=()=>{
     const dispatch=useDispatch();
     const navigate=useNavigate();

      const [value, setValue] = React.useState(dayjs('2025-04-17'));
    
      return (
        <div className="container">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker']}>
            <DatePicker
              label="Select Date"
              value={value}
              onChange={async(newValue) => {
              setValue(newValue);
              const formattedDate = newValue.format('YYYY-MM-DD');
              const result=await fetchClient(`http://localhost:5223/api/Appointment/available-appointments?date=${encodeURIComponent(formattedDate)}&treatmentType=Laser Hair Removal`);
              dispatch(setAppointments(result));
              navigate('/appointments');

            }}
              format="DD/MM/YYYY" 
            />
          </DemoContainer>
        </LocalizationProvider>
        </div>
      );
    }
  
export default SelectDate;
