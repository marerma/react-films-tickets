import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CART_RANGE } from "shared/constants";

export interface CartState {
  filmsInCart: { id: string; amount: number }[];
}

const initialState: CartState = {
  filmsInCart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{ id: string }>) => {
      const filmInCart = state.filmsInCart.find(
        (film) => film.id === action.payload.id
      );
      if (filmInCart) {
        filmInCart.amount =
          filmInCart.amount === CART_RANGE.max
            ? CART_RANGE.max
            : (filmInCart.amount += 1);
      } else {
        state.filmsInCart.push({ id: action.payload.id, amount: 1 });
      }
    },
    decrementCart: (state, action: PayloadAction<{ id: string }>) => {
      const filmInCart = state.filmsInCart.find(
        (film) => film.id === action.payload.id
      );
      if (filmInCart && filmInCart.amount > 0) {
        filmInCart.amount -= 1;
      } 
      
      if (filmInCart && filmInCart.amount === 0) {
        state.filmsInCart = state.filmsInCart.filter(
        (film) => film.id !== action.payload.id
      );
    }
    },
    removeFromCart: (state, action: PayloadAction<{ id: string }>) => {
      state.filmsInCart = state.filmsInCart.filter(
        (film) => film.id !== action.payload.id
      );
    },
  },
});

export const { addToCart, removeFromCart, decrementCart } = cartSlice.actions;

export default cartSlice.reducer;
