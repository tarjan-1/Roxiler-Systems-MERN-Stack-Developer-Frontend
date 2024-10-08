import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  rawDataOfItems: [],
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setItems: (store, actions) => {
      store.items = actions.payload.items;

      return store;
    },

    setRawDataOfItems: (store, actions) => {
      store.rawDataOfItems = actions.payload.rawDataOfItems;

      return store;
    },

    getRawDataOfItems: (store, actions) => {
      return store.rawDataOfItems;
    },
  },
});

export const { setItems, setRawDataOfItems } = itemsSlice.actions;
export default itemsSlice.reducer;
