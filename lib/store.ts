import { configureStore } from '@reduxjs/toolkit';

import filterSlice from '@/lib/features/filterSlice';
import projectsSlice from '@/lib/features/projectsSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      filters: filterSlice,
      projects: projectsSlice
    }
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']