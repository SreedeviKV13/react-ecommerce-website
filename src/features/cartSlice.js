import { createSlice } from '@reduxjs/toolkit';

const savedCart = localStorage.getItem("cart");

const initialState = {
  items: savedCart ? JSON.parse(savedCart) : []
};

const cartSlice = createSlice({

  name: 'cart',

  initialState,

  reducers: {

    // Add product
    addToCart: (state, action) => {

      const product = action.payload;

      const existingProduct = state.items.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {

        existingProduct.quantity += 1;

      } else {

        state.items.push({
          ...product,
          quantity: 1
        });

      }
    },


    // Remove product
    removeFromCart: (state, action) => {

      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );

    },


    // Increase quantity
    increaseQuantity: (state, action) => {

      const product = state.items.find(
        (item) => item.id === action.payload
      );

      if (product) {
        product.quantity += 1;
      }

    },


    // Decrease quantity
    decreaseQuantity: (state, action) => {

      const product = state.items.find(
        (item) => item.id === action.payload
      );

      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }

    },


    // Clear cart
    clearCart: (state) => {

      state.items = [];

    }

  }

});


export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart
} = cartSlice.actions;


export default cartSlice.reducer;