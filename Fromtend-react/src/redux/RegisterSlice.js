import { createSlice } from "@reduxjs/toolkit";

const RegisterSlice = createSlice({
   name: "Register",
   initialState: {
      id: '',
      FirstName: '',
      LastName: '',
      PhonNumber: '',
      Email: '',
      City: ''
   },
   reducers: {
      SetId(state, action) {
         state.id = action.payload;
      },
      SetFirstName(state, action) {
         state.FirstName = action.payload;
      },
      SetLastName(state, action) { // תיקון כאן
         state.LastName = action.payload; // שים לב שזה LastName
      },
      SetPhonNumber(state, action) {
         state.PhonNumber = action.payload;
      },
      SetEmail(state, action) {
         state.Email = action.payload;
      },
      SetCity(state, action) {
         state.City = action.payload;
      }
   }
});

export const { SetId, SetFirstName, SetLastName, SetPhonNumber, SetEmail, SetCity } = RegisterSlice.actions;
export default RegisterSlice.reducer;
