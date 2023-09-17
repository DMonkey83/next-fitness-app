import { Difficulty, Visibility, WorkoutGoalEnum } from "@/util/enum-types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AvailableWokroutSlice = {
  plan_id?: number;
  plan_name: string;
  description: string;
  goal: WorkoutGoalEnum;
  difficulty: Difficulty;
  is_public: Visibility
  created_at: string;
  updated_at: string;
  creator_username: string;
};

const initialState: AvailableWokroutSlice[] = [{
  plan_name: '',
  description: '',
  goal: WorkoutGoalEnum.Custom,
  difficulty: Difficulty.Beginner,
  is_public: Visibility.Public,
  created_at: '',
  updated_at: '',
  creator_username: '',
}];

export const availableWorkout = createSlice({
  name: "availableWorkout",
  initialState,
  reducers: {
    reset: () => initialState,
    availableWorkoutsSuccess: (state, action: PayloadAction<AvailableWokroutSlice[]>) => {
      return state = [
        ...state
      ]
    },
    addWorkoutSuccess: (state, action: PayloadAction<AvailableWokroutSlice>) => {
      return state = [...state, action.payload]
    }
  },
});

export const {
  availableWorkoutsSuccess,
  addWorkoutSuccess,
  reset,
} = availableWorkout.actions;
export default availableWorkout.reducer;
