import { createSlice } from '@reduxjs/toolkit';

export const starshipsSlice = createSlice({
  name: 'starships',
  initialState: {
    starships: null
  },
  reducers: {
    setStarships: (state, action) => { state.starships = action.payload },
    updateStarship: (state, action) => {
      const { value, fieldName, url } = action.payload
      const updatingItem = state.starships.find(starship => starship.url === url);
      const updatingIndex = state.starships.findIndex(starship => starship.url === url);

      if (updatingIndex < 0) {
        throw new Error(`no such index`);
      }

      updatingItem[fieldName] = value;

      state.starships = [
        ...state.starships.slice(0, updatingIndex),
        updatingItem,
        ...state.starships.slice(updatingIndex + 1),
      ]

    }
  },
})

export const {
  setStarships,
  updateStarship
} = starshipsSlice.actions;

export default starshipsSlice.reducer;