// src/redux/SelectedTreatmentSlice.ts
import { createSlice } from '@reduxjs/toolkit';

const selectedTreatmentSlice = createSlice({
  name: 'selectedTreatment',
  initialState: {
    treatment: ''
  },
  reducers: {
    setTreatment: (state, action) => {
      state.treatment = action.payload;
    }
  }
});

export const { setTreatment } = selectedTreatmentSlice.actions;
export default selectedTreatmentSlice.reducer;