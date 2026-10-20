import React from 'react'
import { Link } from 'react-router-dom'
function ProductCard({ product }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-900">
      {/* Product Image */}
      <Link
        to={`/product/${product._id}`}
        className="relative block overflow-hidden bg-slate-100 dark:bg-gray-800"
      >
        <img
          src={product.imageUrl}
          alt={product.name}
          loading="lazy"
          className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-56"
        />

        <span className="absolute left-3 top-3 rounded-full border border-white/50 bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur dark:border-gray-700 dark:bg-gray-900/90 dark:text-gray-200">
          Featured
        </span>
      </Link>

      {/* Product Info */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="line-clamp-2 min-h-14 text-base font-bold leading-6 text-slate-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-cyan-400 sm:text-lg">
          {product.name}
        </h3>

        <div className="mt-3 flex items-center justify-between gap-3">
          <p className="text-xl font-extrabold tracking-tight text-blue-700 dark:text-cyan-400">
            ${Number(product.price).toFixed(2)}
          </p>

          <span className="text-xs font-medium text-slate-500 dark:text-gray-400">
            Great find
          </span>
        </div>

        <div className="mt-auto pt-5">
          <Link
            to={`/product/${product._id}`}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            View Details
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
