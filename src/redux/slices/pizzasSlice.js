import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk(
  'pizza/fetchPizzasStatus',
  async (params) => {
    const { sortBy, order, category, search, currentPage } = params;
    const { data } =
      await axios.get(` https://643f9012b9e6d064bef86a77.mockapi.io/items?page=
        ${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`);
    return data;
  },
);

const LOADING = 'LOADING';
const SUCCESS = 'SUCCESS';
const ERROR = 'ERROR';

const initialState = {
  items: [],
  status: LOADING,
};

const pizzasSlice = createSlice({
  name: 'pizza',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state) => {
        state.status = LOADING;
        state.items = [];
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.status = SUCCESS;
        state.items = action.payload;
      })
      .addCase(fetchPizzas.rejected, (state) => {
        state.status = ERROR;
        state.items = [];
      });
  },
});

export default pizzasSlice.reducer;
