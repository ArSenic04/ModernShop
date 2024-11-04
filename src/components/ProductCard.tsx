import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200">
          <img
            src={product.image}
            alt={product.name}
            className="h-48 w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
          <div className="mt-1 flex items-center">
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
          </div>
          <p className="mt-2 text-xl font-semibold text-gray-900">${product.price}</p>
          <p className="mt-1 text-sm text-gray-500">
            {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
          </p>
        </div>
      </div>
    </Link>
  );
}