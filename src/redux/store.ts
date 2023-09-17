import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import availableWorkoutReducer from "./features/workoutSlice";
import weightEntryReducer from "./features/userWeightEntrySlice";

export const store = configureStore({
  reducer: {
    availableWorkout: availableWorkoutReducer,
    userWeightEntry: weightEntryReducer,
    user: userReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

