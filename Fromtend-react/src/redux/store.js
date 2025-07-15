import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './LoginSlice';
import appointmentSlice from './ApppointmentSlice';
import Register from './RegisterSlice'
 const Store = configureStore({
  reducer: {
    login: loginSlice,
    appointments:appointmentSlice,
    register:Register
  }
})
export default Store;