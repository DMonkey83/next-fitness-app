import { Difficulty, Visibility, WorkoutGoalEnum } from "@/util/enum-types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type WeightEntrySlice = {
  weight_entry_id?: number;
  username: string;
  entry_date: string;
  weight_kg?: number;
  weight_lb?: number;
  notes: string;
  created_at: string;
};

const initialState: WeightEntrySlice[] = [{
  username: '',
  entry_date: '',
  weight_kg: 0,
  weight_lb: 0,
  notes: '',
  created_at: ''
}];

export const userWeightEntry = createSlice({
  name: "userWeightEntry",
  initialState,
  reducers: {
    reset: () => initialState,
    listWeightEntriesSuccess: (state, action: PayloadAction<WeightEntrySlice[]>) => {
      return state = action.payload
    },
    addWeightEntrySuccess: (state, action: PayloadAction<WeightEntrySlice>) => {
      console.log('entry redux', action.payload)
      state.push(action.payload)
      console.log('state', state)
      return state
    }
  },
});

export const {
  listWeightEntriesSuccess,
  addWeightEntrySuccess,
  reset,
} = userWeightEntry.actions;
export default userWeightEntry.reducer;
