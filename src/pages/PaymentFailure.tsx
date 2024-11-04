import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { XCircle } from 'lucide-react';

export function PaymentFailure() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <XCircle className="mx-auto h-16 w-16 text-red-500" />
        <h1 className="mt-6 text-3xl font-bold text-gray-900">Payment Failed</h1>
        <p className="mt-4 text-lg text-gray-600">
          We couldn't process your payment. Please try again.
        </p>
        <div className="mt-8 space-x-4">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Try Again
          </button>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}