import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './LoginSlice';
import appointmentSlice from './ApppointmentSlice';
import Register from './RegisterSlice'
import TreatmentsSlice from './TreatmentsSlice';
 const Store = configureStore({
  reducer: {
    login: loginSlice,
    appointments:appointmentSlice,
    register:Register,
    treatments:TreatmentsSlice
  }
})
export default Store;