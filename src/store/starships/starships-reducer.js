import { createSlice } from '@reduxjs/toolkit';

export const starshipsSlice = createSlice({
  name: 'starships',
  initialState: {
    starships: null
  },
  reducers: {
    setStarships: (state, action) => { state.starships = action.payload },
  },
})

export const {
  setStarships
} = starshipsSlice.actions;

export default starshipsSlice.reducer;