import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  month: 3,
};

const monthSlice = createSlice({
  name: "month",
  initialState,
  reducers: {
    setMonth: (store, actions) => {
      store.month = actions.payload.month;

      return store;
    },
  },
});

export const { setMonth } = monthSlice.actions;
export default monthSlice.reducer;
