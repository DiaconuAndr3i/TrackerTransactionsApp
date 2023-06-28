import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import newTransactionReducer from "./newTransaction.slice";
import { quotesSlice } from "./quotes.service";


export const store = configureStore({
    reducer: {newTransactionReducer, [quotesSlice.reducerPath]:quotesSlice.reducer},
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    }).concat(quotesSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;