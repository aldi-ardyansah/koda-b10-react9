import { createSlice } from "@reduxjs/toolkit";

const surveySlice = createSlice({
  name: "survey",
  initialState: [],
  reducers: {
    addSurvey: (state, action) => {
      state.push(action.payload);
    },
    deleteSurvey: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addSurvey, deleteSurvey } = surveySlice.actions;
export default surveySlice.reducer;