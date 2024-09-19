import { createSlice } from '@reduxjs/toolkit';
import skills from '@/constants/skills';

const initialState = {
  projects: skills
};

const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
      projectData: (state, action) => {
        const { payload } = action;
        if(payload.length > 1) {
            console.log('grid', payload)
            const newState = payload.map((filter: string) => [...initialState.projects.filter(project => project.techs.includes(filter))]);
            console.log('newState: ', newState)
            state.projects = [...newState.flat()];
          } else {
            state.projects = [...initialState.projects];
          }
      }
    }
  });

  export const { projectData } =  projectsSlice.actions;

  export default projectsSlice.reducer;
