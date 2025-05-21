import { createSlice } from "@reduxjs/toolkit";

const AppointmentSlice = createSlice({
  name: "appointment",
  initialState: {
    arrAppointment: []
  },
  reducers: {
    setAppointments(state, action) {
      state.arrAppointment = action.payload; // שמירת הרשימה של התורים
    },
  }
});

export const { setAppointments } = AppointmentSlice.actions; // ייצוא של הפעולה
export default AppointmentSlice.reducer;
