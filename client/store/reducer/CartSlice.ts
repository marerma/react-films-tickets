import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
  filmsInCart: { id: string; amount: number }[];
}

const initialState: CartState = {
  filmsInCart: [],
};

const AMOUNT = {
  max: 30,
  min: 0,
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
          filmInCart.amount === AMOUNT.max
            ? AMOUNT.max
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
