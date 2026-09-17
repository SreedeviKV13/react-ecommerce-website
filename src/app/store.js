import { configureStore } from '@reduxjs/toolkit';

import cartReducer from '../features/cartSlice';
import wishlistReducer from '../features/wishlistSlice';
import orderReducer from '../features/orderSlice';

const store = configureStore({
  reducer: {

    cart: cartReducer,

    wishlist: wishlistReducer,

    orders: orderReducer

  }
});

export default store;