import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./features/itemsSlice";
import monthReducer from "./features/monthSlice";
import searchReducer from "./features/searchSlice";
import pageReducer from "./features/pageSlice";
import statisticsReducer from "./features/statisticsSlice";

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    month: monthReducer,
    search: searchReducer,
    page: pageReducer,
    statistics: statisticsReducer,
  },
});
