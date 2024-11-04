import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export function PaymentSuccess() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
        <h1 className="mt-6 text-3xl font-bold text-gray-900">Payment Successful!</h1>
        <p className="mt-4 text-lg text-gray-600">
          Thank you for your purchase. Your order has been confirmed.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}