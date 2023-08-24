import cartReducer, { InitialStateType, CartActions } from './cart.reducer';

describe('Testing Cart', () => {
  it('should add item to the cart', () => {
    const initialState: InitialStateType = {
      items: [],
      totalPrice: 0,
      totalQuantity: 0,
    };
    const action: CartActions = {
      type: 'ADD_TO_CART',
      payload: {
        item: { product: 'shirt', price: 300, id: 'hel12', quantity: 1 },
      },
    };
    const data = cartReducer(initialState, action);

    expect(data).toEqual({
      items: [{ product: 'shirt', price: 300, id: 'hel12', quantity: 1 }],
      totalPrice: 300,
      totalQuantity: 1,
    });
  });
  it('should remove item from the cart', () => {
    const initialState: InitialStateType = {
      items: [{ product: 'shirt', price: 300, id: 'hel12', quantity: 1 }],
      totalPrice: 300,
      totalQuantity: 1,
    };
    const action: CartActions = {
      type: 'REMOVE_FROM_CART',
      payload: {
        item: { product: 'shirt', price: 300, id: 'hel12', quantity: 1 },
      },
    };
    const data = cartReducer(initialState, action);
    expect(data).toEqual({
      items: [],
      totalPrice: 0,
      totalQuantity: 0,
    });
  });
  it('should increase single item quantity', () => {
    const initialState: InitialStateType = {
      items: [{ product: 'shirt', price: 300, id: 'hel12', quantity: 1 }],
      totalPrice: 300,
      totalQuantity: 1,
    };
    const action: CartActions = {
      type: 'INCREMENT_QUANTITY',
      payload: {
        item: { product: 'shirt', price: 300, id: 'hel12', quantity: 1 },
      },
    };

    const data = cartReducer(initialState, action);
    expect(data).toEqual({
      items: [{ product: 'shirt', price: 300, id: 'hel12', quantity: 2 }],
      totalPrice: 600,
      totalQuantity: 1,
    });
  });
});
