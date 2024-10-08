import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
};

const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setPage: (store, actions) => {
      store.page = actions.payload.page;

      return store;
    },
  },
});

export const { setPage } = pageSlice.actions;
export default pageSlice.reducer;
