// src/context/CartContext.tsx
import { createContext, useContext, useReducer, ReactNode } from 'react';
import { CartItem, FoodItem } from '@/types';

interface CartState {
  items: CartItem[];
  totalAmount: number;
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: FoodItem }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'CLEAR_CART' };

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
} | undefined>(undefined);

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(
        item => item.foodItem.id === action.payload.id
      );

      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.foodItem.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          totalAmount: state.totalAmount + action.payload.price,
        };
      }

      return {
        ...state,
        items: [...state.items, { foodItem: action.payload, quantity: 1 }],
        totalAmount: state.totalAmount + action.payload.price,
      };
    }

    case 'REMOVE_ITEM': {
      const existingItem = state.items.find(
        item => item.foodItem.id === action.payload
      );

      if (existingItem) {
        if (existingItem.quantity === 1) {
          return {
            ...state,
            items: state.items.filter(
              item => item.foodItem.id !== action.payload
            ),
            totalAmount: state.totalAmount - existingItem.foodItem.price,
          };
        }

        return {
          ...state,
          items: state.items.map(item =>
            item.foodItem.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
          totalAmount: state.totalAmount - existingItem.foodItem.price,
        };
      }

      return state;
    }

    case 'CLEAR_CART':
      return {
        items: [],
        totalAmount: 0,
      };

    default:
      return state;
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    totalAmount: 0,
  });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}