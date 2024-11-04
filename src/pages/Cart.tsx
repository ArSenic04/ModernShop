import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useStore } from '../store/useStore';

export function Cart() {
  const { cart, total, removeFromCart, updateQuantity } = useStore();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

        <div className="bg-white rounded-lg shadow">
          <div className="p-6 space-y-6">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b pb-6 last:border-b-0 last:pb-0">
                <div className="flex items-center flex-1">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-20 w-20 object-cover rounded"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">${item.price}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center border rounded">
                    <button
                      onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                      className="p-2 hover:bg-gray-100"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="px-4">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-2 hover:bg-gray-100"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 px-6 py-4 rounded-b-lg">
            <div className="flex justify-between items-center">
              <span className="text-lg font-medium text-gray-900">Total</span>
              <span className="text-2xl font-bold text-gray-900">${total.toFixed(2)}</span>
            </div>
            <button
              onClick={() => navigate('/checkout')}
              className="mt-4 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}