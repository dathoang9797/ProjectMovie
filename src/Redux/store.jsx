import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import logger from 'redux-logger';
import LoadingReducer from '@Redux/Reducers/LoadingSlice';

import SearchReducer from '@Redux/Reducers/SearchSlice';

export const rootReducer = combineReducers({
  LoadingReducer,
  SearchReducer,
});

const middlewaresConfig = process.env.NODE_ENV !== 'production' ? [logger] : [];

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middlewaresConfig),
  devTools: process.env.NODE_ENV !== 'production',
});
