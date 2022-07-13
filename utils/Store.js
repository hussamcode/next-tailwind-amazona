import { createContext, useReducer } from 'react';

export const Store = createContext();

const initialState = {
  cart: { items: [] },
};
function reducer(state, action) {
  switch (action.type) {
    case 'CART_ADD_ITEM': {
      const newItem = action.payload;
      const existItem = state.cart.items.find((items) => {
        return items.slug === newItem.slug;
      });

      const items = existItem
        ? state.cart.items.map((item) => {
            return item.name === newItem.name ? newItem : item;
          })
        : [...state.cart.items, newItem];

      return { ...state, cart: { ...state.cart, items } };
    }
    default:
      return state;
  }
}
export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const vale = { state, dispatch };
  return <Store.Provider value={vale}>{children} </Store.Provider>;
}
