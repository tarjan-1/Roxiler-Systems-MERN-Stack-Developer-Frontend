import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch: (store, actions) => {
      store.search = actions.payload.search;

      return store;
    },
  },
});

export const { setSearch } = searchSlice.actions;
export default searchSlice.reducer;
