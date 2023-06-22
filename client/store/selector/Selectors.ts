import { RootState } from "store/store";

const FilmsInCartSelector = (state: RootState) => state.cart.filmsInCart;
const TotalAmount = (state: RootState) =>
  state.cart.filmsInCart.reduce((acc, el) => {
    return acc + el.amount;
  }, 0);
const IsActiveFilter = (state: RootState) => !Object.values(state.filter).every((item) => item.length === 0 );
const ActiveFilters = (state: RootState) => state.filter;

export { FilmsInCartSelector, TotalAmount, IsActiveFilter, ActiveFilters };
