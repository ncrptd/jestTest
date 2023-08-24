type ItemType = {
  product: string;
  price: number;
  id: string;
  quantity: number;
};
export interface InitialStateType {
  items: ItemType[];
  totalPrice: number;
  totalQuantity: number;
}

export type AddToCartAction = {
  type: 'ADD_TO_CART';
  payload: { item: ItemType };
};

type RemoveFromCartAction = {
  type: 'REMOVE_FROM_CART';
  payload: { item: ItemType };
};

type IncrementItemQuantity = {
  type: 'INCREMENT_QUANTITY';
  payload: { item: ItemType };
};
export type CartActions =
  | AddToCartAction
  | RemoveFromCartAction
  | IncrementItemQuantity;

const initialState: InitialStateType = {
  items: [],
  totalPrice: 0,
  totalQuantity: 0,
};

function cartReducer(
  state: InitialStateType = initialState,
  action: CartActions
) {
  switch (action.type) {
    case 'ADD_TO_CART': {
      return {
        ...state,
        items: [...state.items, action.payload.item],
        totalPrice: state.totalPrice + action.payload.item.price,
        totalQuantity: state.totalQuantity + 1,
      };
    }
    case 'REMOVE_FROM_CART': {
      const itemToBeRemoved = action.payload.item;
      const updatedItems = state.items.filter(
        (item) => item.id !== itemToBeRemoved.id
      );

      return {
        ...state,
        items: updatedItems,
        totalPrice: state.totalPrice - itemToBeRemoved.price,
        totalQuantity: state.totalQuantity - 1,
      };
    }
    case 'INCREMENT_QUANTITY': {
      const targetItem = action.payload.item;
      const items = state.items.map((item) => {
        if (item.id === targetItem.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      return {
        ...state,
        items,
        totalPrice: state.totalPrice + targetItem.price,
      };
    }
    default: {
      break;
    }
  }
}

export default cartReducer;
