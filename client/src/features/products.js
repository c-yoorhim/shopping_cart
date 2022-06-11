import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];

// first arg is the action.type name
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async function () {
    const { data } = await axios.get('/api/products');
    return data;
  }
);

export const addProduct = createAsyncThunk(
  'products/addProduct',
  async ({ productName, productPrice, productQuantity, callback }) => {
    const { newProduct } = await axios.post('/api/products', {
      title: productName,
      price: productPrice,
      quantity: productQuantity,
    });

    if (callback) {
      callback();
    }
    return newProduct;
  }
);

// slices the store to only get products part of state
// TODO: test product reducers
const productSlice = createSlice({
  name: 'products',
  initialState,
  // regular actions w/o side effects
  // RDT creates action.type = 'products/addProduct' under the hood
  reducers: {},
  // actions w/ side effects go inside extraReducers
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => action.payload);

    builder.addCase(addProduct.fulfilled, (state, action) =>
      state.push(action.payload)
    );
  },
});

