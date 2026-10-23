import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard.jsx'

function Home() {
    const [ products, setProducts ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState("");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch('/api/products/');
                const data = await res.json();
                setProducts(data.slice(0, 4)); // featured porducts
            } catch (e) {
                console.error(e);
                setError(e.message || "Unable to load products.");
            } finally{
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 text-slate-900 transition-colors duration-300 dark:bg-gray-950 dark:text-white sm:px-6 sm:py-10 lg:px-10">
    <div className="mx-auto max-w-7xl">
        {/* Hero Banner */}
        <section className="relative isolate overflow-hidden rounded-3xl bg-linear-to-br from-indigo-700 via-blue-700 to-cyan-600 px-6 py-14 text-white shadow-xl sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        {/* Decorative circles */}
        <div className="pointer-events-none absolute -right-16 -top-20 -z-10 h-64 w-64 rounded-full bg-white/10 blur-2xl sm:h-80 sm:w-80" />
        <div className="pointer-events-none absolute -bottom-24 left-1/3 -z-10 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl" />

        <div className="max-w-2xl">
            <span className="mb-5 inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold tracking-widest text-blue-50 backdrop-blur sm:text-sm">
            YOUR NEXT FAVORITE FIND
            </span>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
            Welcome to <span className="text-cyan-200">NexCart.</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-blue-50 sm:mt-6 sm:text-lg sm:leading-8">
            Discover products you'll love, at prices you'll appreciate.
            Shop smarter, find your favorites, and make every purchase count.
            </p>

            <a
            href="#featured-products"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-blue-700 shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-cyan-50 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-white/40 sm:text-base"
            >
            Explore Products
            <span aria-hidden="true">→</span>
            </a>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-blue-100 sm:mt-12">
            <span>✓ Great finds</span>
            <span>✓ Easy shopping</span>
            <span>✓ Made for you</span>
            </div>
        </div>
        </section>

        {/* Featured Products */}
        <section id="featured-products" className="scroll-mt-8 py-12 sm:py-16 lg:py-20">
        <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-cyan-400">
                Handpicked for you
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Featured Products
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 dark:text-gray-400 sm:text-base">
                Explore our selection of products worth adding to your cart.
            </p>
            </div>

            {!loading && !error && products.length > 0 && (
            <span className="text-sm font-medium text-slate-500 dark:text-gray-400">
                {products.length} products to explore
            </span>
            )}
        </div>

        {loading ? (
            <div
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            aria-label="Loading products"
            >
            {Array.from({ length: 4 }).map((_, index) => (
                <div
                key={index}
                className="animate-pulse overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900"
                >
                <div className="h-48 rounded-xl bg-slate-200 dark:bg-gray-800 sm:h-56" />
                <div className="mt-5 h-5 w-3/4 rounded bg-slate-200 dark:bg-gray-800" />
                <div className="mt-3 h-4 w-1/3 rounded bg-slate-200 dark:bg-gray-800" />
                <div className="mt-5 h-10 rounded-lg bg-slate-200 dark:bg-gray-800" />
                </div>
            ))}
            </div>
        ) : error ? (
            <div
            role="alert"
            className="rounded-2xl border border-red-200 bg-red-50 px-5 py-10 text-center dark:border-red-900/60 dark:bg-red-950/30"
            >
            <p className="text-lg font-bold text-red-700 dark:text-red-400">
                Oops! Something went wrong.
            </p>
            <p className="mt-2 text-sm text-red-600 dark:text-red-300">
                {error}
            </p>
            </div>
        ) : products.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-300 px-5 py-14 text-center dark:border-gray-700">
            <p className="text-xl font-bold">No products yet</p>
            <p className="mt-2 text-sm text-slate-600 dark:text-gray-400">
                Check back soon for exciting new finds.
            </p>
            </div>
        ) : (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
                <ProductCard key={product._id} product={product} />
            ))}
            </div>
        )}
        </section>
    </div>
    </div>
  )
}

export default Home