import React from "react";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item._id} className="flex justify-between items-center mb-4 border-b pb-2">
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm">Qty: {item.quantity}</p>
                </div>
                <div>
                  <p>${(item.price * item.quantity).toFixed(2)}</p>
                  <button
                    className="text-red-600 text-sm"
                    onClick={() => removeFromCart(item._id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <p className="text-xl font-bold mt-6">Total: ${total.toFixed(2)}</p>
          <button
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            onClick={clearCart}
          >
            Place Order
          </button>
        </>
      )}
    </div>
  );
};

export default Checkout;
