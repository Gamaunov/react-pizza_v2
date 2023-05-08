import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import filter from './filter/filterSlice';
import cart from './cart/cartSlice';
import pizza from './pizza/pizzasSlice';

export const store = configureStore({
  reducer: {
    filter,
    cart,
    pizza,
  },
});


export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();