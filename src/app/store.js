import { configureStore } from "@reduxjs/toolkit";
import carSlice from "../features/cars/carSlice";




export const store = configureStore({
  reducer: {
    car: carSlice
  }
})