import { createSlice } from "@reduxjs/toolkit";

const AppointmentSlice=createSlice({
name:"appointment",
// initialState:{
//     Date:'',
//     Hour:'',
//     Day:'',
//     Name:'',
//     Duration:0,
//     TreatmentType:''
// },
// reducers:{
//     setDate(state,action){
//         state.Date=action.payload;
//     },
//     setHour(state,action){
//         state.Hour=action.payload;
//     },
//     setDay(state,action){
//         state.Day=action.payload;
//     },
//     setName(state, action) {
//         state.name = action.payload;
//       },
//     setDuration(state,action){
//         state.Duration=action.payload;
//     },
//     setTreatmentType(state,action){
//         state.TreatmentType=action.payload;
//     }
// },
// extraReducers:(builder)=>{
//     builder
//     .addCase()
// }
initialState:{
    arrAppointment:[]
},
reducers:{

}
})

export default AppointmentSlice.reducer;