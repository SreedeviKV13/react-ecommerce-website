import { createSlice } from '@reduxjs/toolkit';

const savedOrders = localStorage.getItem('orders');

const initialState = {
  orders: savedOrders
    ? JSON.parse(savedOrders)
    : []
};

const orderSlice = createSlice({
  name: 'orders',

  initialState,

  reducers: {

    // Add a new order
    addOrder: (state, action) => {
      state.orders.push(action.payload);
    },

    // Clear all orders
    clearOrders: (state) => {
      state.orders = [];
    }

  }
});

export const {
  addOrder,
  clearOrders
} = orderSlice.actions;

export default orderSlice.reducer;