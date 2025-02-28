import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage
}

const persistedReducer = persistReducer(persistConfig, userReducer)

export const store = configureStore({
    reducer:{
        user: persistedReducer
    },
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
})

export const persistor = persistStore(store);