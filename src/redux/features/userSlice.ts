import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type UserSlice = {
  username: string;
  email: string;
  full_name?: string;
  age?: number;
  gender: 'male' | 'femail',
  height_cm?: number;
  height_ft_in?: string;
  preferred_unit: 'lb' | 'kg',

};

const initialState: UserSlice = {
  username: "",
  email: "",
  full_name: "",
  age: 0,
  gender: "male",
  height_cm: 0,
  height_ft_in: "",
  preferred_unit: "kg",
};

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: () => initialState,
    userSuccess: (state, action: PayloadAction<UserSlice>) => {
      return state = {
        ...state,
        username: action.payload.username,
        email: action.payload.email
      }
    },
    userProfileSuccess: (state, action: PayloadAction<UserSlice>) => {
      console.log('action', action.payload)
      return state = {
        ...state,
        full_name: action.payload?.full_name || '',
        username: action.payload?.username || '',
        age: action.payload?.age || initialState.age,
        gender: action.payload?.gender || initialState.gender,
        height_cm: action.payload?.height_cm || initialState.height_cm,
        height_ft_in: action.payload?.height_ft_in,
        preferred_unit: action.payload?.preferred_unit,
      }
    }
  },
});

export const {
  userSuccess,
  userProfileSuccess,
  reset,
} = user.actions;
export default user.reducer;
