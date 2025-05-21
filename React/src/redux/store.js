import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './LoginSlice';
import appointmentSlice from './ApppointmentSlice';
 const Store = configureStore({
  reducer: {
    login: loginSlice,
    appointments:appointmentSlice
  }
})
export default Store;