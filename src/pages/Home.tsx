import React from 'react';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';

export function Home() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-16 bg-white rounded-lg shadow-sm mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to ModernShop</h1>
          <p className="text-xl text-gray-600">Discover amazing products at great prices</p>
        </div>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}