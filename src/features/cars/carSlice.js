import { createSlice } from "@reduxjs/toolkit";


const carSlice = createSlice({
  name: 'car',
  initialState: {
    cars : ['Model S', 'Model X', 'Model 3', 'Model Y']
  },
  reducers: {}
})

// export const selected = state => state.car.cars;

export default carSlice.reducer