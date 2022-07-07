const reducer = (state, action) => {
  const { type, payload } = action;

  const tempCart = state.cart
    .map((cartItem) => {
      if (cartItem.id === payload?.id) {
        if (payload.type === "inc") {
          return { ...cartItem, amount: cartItem.amount + 1 };
        }
        if (payload.type === "dec") {
          return { ...cartItem, amount: cartItem.amount - 1 };
        }
      }
      return cartItem;
    })
    .filter(({ amount }) => amount !== 0);

  let { total, amount } = state.cart.reduce(
    (cartTotal, cartItem) => {
      const { price, amount } = cartItem;
      const itemTotal = price * amount;
      cartTotal.total += itemTotal;
      cartTotal.amount += amount;
      return cartTotal;
    },
    { total: 0, amount: 0 }
  );

  total = parseFloat(total.toFixed(2));

  const STATE = {
    CLEAR_CART: { ...state, cart: [] },
    REMOVE: {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== payload),
    },
    GET_TOTALS: { ...state, total, amount },
    LOADING: { ...state, lading: true },
    DISPLAY_ITEMS: { ...state, cart: payload, lading: false },
    TOGGLE: { ...state, cart: tempCart },
  };

  if (!STATE[type]) {
    throw new Error("no matching action type");
  }
  return STATE[type];
};

export default reducer;
