import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  statistics: "",
};

const statisticsSlice = createSlice({
  name: "statistics",
  initialState,
  reducers: {
    setStatisticsData: (store, actions) => {
      store.statistics = actions.payload.statistics;

      return store;
    },
  },
});

export const { setStatisticsData } = statisticsSlice.actions;
export default statisticsSlice.reducer;
