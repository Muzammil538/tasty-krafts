// src/components/Cart.tsx
import { useCart } from '@/context/CartContext';

export const Cart = () => {
  const { state, dispatch } = useCart();

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
      
      {state.items.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-4">
            {state.items.map((item) => (
              <div key={item.foodItem.id} className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">{item.foodItem.name}</h3>
                  <p className="text-sm text-gray-500">
                    ${item.foodItem.price} x {item.quantity}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => dispatch({ 
                      type: 'REMOVE_ITEM', 
                      payload: item.foodItem.id 
                    })}
                    className="text-red-600"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => dispatch({ 
                      type: 'ADD_ITEM', 
                      payload: item.foodItem 
                    })}
                    className="text-green-600"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 pt-4 border-t">
            <div className="flex justify-between font-semibold">
              <span>Total:</span>
              <span>${state.totalAmount.toFixed(2)}</span>
            </div>
          </div>
          
          <button
            onClick={() => dispatch({ type: 'CLEAR_CART' })}
            className="mt-4 w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-700 transition-colors"
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
};