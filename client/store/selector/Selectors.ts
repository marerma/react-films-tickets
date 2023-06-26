import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store/store'

const selectFilmsInCart = (state: RootState) => state.cart.filmsInCart;

const selectFilmId = (state: RootState, id: string) => id;

const selectFilmInCartById = createSelector([selectFilmsInCart, selectFilmId], (filmsInCart, id) => {
  return filmsInCart.find((film) => film.id === id)?.amount || 0
})

const selectActiveFilters = (state: RootState) => state.filter;

const selectTotalCartAmount = (state: RootState) =>
  state.cart.filmsInCart.reduce((acc, el) => {
    return acc + el.amount
  }, 0);

const IsActiveFilter = (state: RootState) =>
  !Object.values(state.filter).every((item) => item.length === 0);



export { selectFilmsInCart, selectTotalCartAmount, IsActiveFilter, selectActiveFilters, selectFilmInCartById }
