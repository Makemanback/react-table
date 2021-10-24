import { createSlice } from '@reduxjs/toolkit';

export const starshipsSlice = createSlice({
  name: 'starships',
  initialState: {
    starships: null,
    cargo_capacity: [],
    cost_in_credits: [],
    max_atmosphering_speed: [],
    name: [],
  },
  reducers: {
    setStarships: (state, action) => { state.starships = action.payload },
    setItemsList: (state, action) => {
      const { listName, list } = action.payload
      state[listName] = list
    },
    updateItem: (state, action) => {
      const { value, listName, url } = action.payload

      const updatingItem = state[listName]
        .find(listItem => listItem.url === url);

      const updatingIndex = state[listName]
        .findIndex(listItem => listItem.url === url);

      if (updatingIndex < 0) {
        throw new Error(`no such index`);
      }

      updatingItem.value = value;

      state[listName] = [
        ...state[listName].slice(0, updatingIndex),
        updatingItem,
        ...state[listName].slice(updatingIndex + 1),
      ]
    },
  },
})

export const {
  setStarships,
  setItemsList,
  updateItem
} = starshipsSlice.actions;

export default starshipsSlice.reducer;