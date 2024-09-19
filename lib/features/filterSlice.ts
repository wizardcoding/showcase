import { createSlice } from '@reduxjs/toolkit'

const initialState: filters = {
    filter: []
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
      filterAdded: (state, action) => {
          const filter = action.payload;
          state.filter = [...state.filter, filter];
      },
      filterRemoved: (state, action) => {
        const filter = action.payload;
        state.filter = state.filter.filter(data => data !== filter);
      }
    }
  });

  export const { filterAdded, filterRemoved } =  filterSlice.actions;

  export default filterSlice.reducer;
