import { createSlice } from "@reduxjs/toolkit";

const surveySlice = createSlice({
  name: "survey",
  initialState: JSON.parse(localStorage.getItem("surveyData")) || [],
  reducers: {
    addSurvey: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("surveyData", JSON.stringify(state));
    },
    deleteSurvey: (state, action) => {
      const updatedData = state.filter((item) => item.id !== action.payload);
      localStorage.setItem("surveyData", JSON.stringify(updatedData));
      return updatedData;
    },
  },
});

export const { addSurvey, deleteSurvey } = surveySlice.actions;
export default surveySlice.reducer;