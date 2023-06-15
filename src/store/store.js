import { configureStore } from '@reduxjs/toolkit';
import createDebounce from 'redux-debounced';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import rootReducer from './slices/rootReducer';

// Applying Middlewares
const middleware = [createDebounce()];

// Creating persistent Store
const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Creating Store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

// Presting state
const persistor = persistStore(store);

export { store, persistor };
