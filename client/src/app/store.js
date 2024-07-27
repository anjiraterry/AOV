// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer';
import { cryptoApi } from '../services/cryptoApi';
import { cryptoNewsApi } from '../services/cryptoNewsApi';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('kycFormState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Could not load state', err);
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('kycFormState', serializedState);
  } catch (err) {
    console.error('Could not save state', err);
  }
};

const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadState(),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    cryptoApi.middleware,
    cryptoNewsApi.middleware
  ),
});

store.subscribe(() => {
  saveState(store.getState());  // Save only the kycform state
});

export default store;
