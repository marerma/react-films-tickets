import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface FilterState {
  title: string;
  genre: string;
  cinema: string;
}

const initialState: FilterState = {
  title: '',
  genre: '',
  cinema: '',
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    addFilter: (state, action: PayloadAction<{ type: string, value: string }>) => {
      const {type, value} = action.payload;
      return type in state? {...state, [type]: value} : state;
    }
  },
});

export const { addFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
