import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Auth() {
    const { login } = useContext(AuthContext);
    const [isLogin, setIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const endpoint = isLogin
                ? '/api/auth/login'
                : '/api/auth/register';

            const body = isLogin
                ? { email, password }
                : { name, email, password };

            const res = await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(
                    data.message || 'Something went wrong.'
                );
            }

            if (isLogin) {
                login(data);
                navigate('/');
            } else {
                setIsLogin(true);
                setPassword('');
                setError('');
            }
        } catch (err) {
            setError(
                err.message || 'Unable to connect to the server.'
            );
        } finally {
            setLoading(false);
        }
    };

    const switchMode = (loginMode) => {
        setIsLogin(loginMode);
        setError('');
        setPassword('');
    };

    return (
        <div className="min-h-screen bg-slate-50 px-4 py-8 text-slate-900 transition-colors duration-300 dark:bg-gray-950 dark:text-white sm:px-6 sm:py-12">
            <div className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl dark:border-gray-800 dark:bg-gray-900 lg:grid-cols-2">

                {/* Left banner */}
                <div className="relative isolate flex flex-col justify-between overflow-hidden bg-linear-to-br from-indigo-700 via-blue-700 to-cyan-600 p-8 text-white sm:p-12 lg:p-14">
                    <div className="pointer-events-none absolute -right-16 -top-16 -z-10 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
                    <div className="pointer-events-none absolute -bottom-20 -left-16 -z-10 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl" />

                    <Link to="/" className="inline-flex w-fit items-center gap-3">
                        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-xl font-bold backdrop-blur">
                            N
                        </span>
                        <span className="text-2xl font-extrabold tracking-tight">
                            NexCart.
                        </span>
                    </Link>

                    <div className="relative py-12 lg:py-20">
                        <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold tracking-widest text-blue-50 backdrop-blur">
                            YOUR NEXT FAVORITE FIND
                        </span>

                        <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                            Shopping made
                            <span className="block text-cyan-200">
                                simple.
                            </span>
                        </h1>

                        <p className="mt-5 max-w-md text-base leading-7 text-blue-50">
                            Discover products you'll love, find your
                            favorites, and make every purchase count.
                        </p>

                        <div className="mt-8 space-y-4 text-sm text-blue-50">
                            <p>✓ Great finds at great prices</p>
                            <p>✓ A simple shopping experience</p>
                            <p>✓ Your favorites, all in one place</p>
                        </div>
                    </div>

                    <p className="text-sm text-blue-100">
                        Your next great find is just around the corner.
                    </p>
                </div>

                {/* Right form */}
                <div className="flex items-center justify-center p-6 sm:p-10 lg:p-14">
                    <div className="w-full max-w-md">

                        <div className="mb-8">
                            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-cyan-400">
                                {isLogin ? 'Welcome back' : 'Join NexCart'}
                            </p>

                            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                                {isLogin
                                    ? 'Sign in to your account'
                                    : 'Create your account'}
                            </h2>

                            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-gray-400">
                                {isLogin
                                    ? 'Enter your details to continue shopping.'
                                    : 'Get started and discover something great.'}
                            </p>
                        </div>

                        {/* Mode switch */}
                        <div className="mb-7 grid grid-cols-2 rounded-xl bg-slate-100 p-1 dark:bg-gray-800">
                            <button
                                type="button"
                                onClick={() => switchMode(true)}
                                className={`rounded-lg px-4 py-3 text-sm font-semibold transition ${
                                    isLogin
                                        ? 'bg-white text-blue-700 shadow-sm dark:bg-gray-700 dark:text-cyan-400'
                                        : 'text-slate-500 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white'
                                }`}
                            >
                                Login
                            </button>

                            <button
                                type="button"
                                onClick={() => switchMode(false)}
                                className={`rounded-lg px-4 py-3 text-sm font-semibold transition ${
                                    !isLogin
                                        ? 'bg-white text-blue-700 shadow-sm dark:bg-gray-700 dark:text-cyan-400'
                                        : 'text-slate-500 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white'
                                }`}
                            >
                                Register
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            {!isLogin && (
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="mb-2 block text-sm font-semibold"
                                    >
                                        Full name
                                    </label>

                                    <input
                                        id="name"
                                        type="text"
                                        autoComplete="name"
                                        placeholder="Enter your full name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-gray-700 dark:bg-gray-950 dark:placeholder:text-gray-500 dark:focus:border-cyan-500 dark:focus:ring-cyan-500/10"
                                    />
                                </div>
                            )}

                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-sm font-semibold"
                                >
                                    Email address
                                </label>

                                <input
                                    id="email"
                                    type="email"
                                    autoComplete="email"
                                    placeholder="you@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-gray-700 dark:bg-gray-950 dark:placeholder:text-gray-500 dark:focus:border-cyan-500 dark:focus:ring-cyan-500/10"
                                />
                            </div>

                            <div>
                                <div className="mb-2 flex items-center justify-between gap-3">
                                    <label
                                        htmlFor="password"
                                        className="text-sm font-semibold"
                                    >
                                        Password
                                    </label>

                                    {isLogin && (
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setError(
                                                    'Password reset is not configured yet.'
                                                )
                                            }
                                            className="text-xs font-semibold text-blue-600 hover:text-cyan-600 dark:text-cyan-400"
                                        >
                                            Forgot password?
                                        </button>
                                    )}
                                </div>

                                <div className="relative">
                                    <input
                                        id="password"
                                        type={showPassword ? 'text' : 'password'}
                                        autoComplete={
                                            isLogin
                                                ? 'current-password'
                                                : 'new-password'
                                        }
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        minLength={isLogin ? undefined : 8}
                                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 pr-20 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-gray-700 dark:bg-gray-950 dark:placeholder:text-gray-500 dark:focus:border-cyan-500 dark:focus:ring-cyan-500/10"
                                    />

                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-4 text-xs font-semibold text-slate-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-cyan-400"
                                    >
                                        {showPassword ? 'Hide' : 'Show'}
                                    </button>
                                </div>

                                {!isLogin && (
                                    <p className="mt-2 text-xs text-slate-500 dark:text-gray-400">
                                        Use at least 8 characters.
                                    </p>
                                )}
                            </div>

                            {error && (
                                <div
                                    role="alert"
                                    className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900/60 dark:bg-red-950/30 dark:text-red-300"
                                >
                                    {error}
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={loading}
                                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-indigo-700 via-blue-700 to-cyan-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-700/20 transition hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-500/30 disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {loading
                                    ? 'Please wait...'
                                    : isLogin
                                        ? 'Sign in to NexCart'
                                        : 'Create account'}

                                {!loading && <span aria-hidden="true">→</span>}
                            </button>
                        </form>

                        <p className="mt-7 text-center text-sm text-slate-600 dark:text-gray-400">
                            {isLogin
                                ? "Don't have an account?"
                                : 'Already have an account?'}{' '}

                            <button
                                type="button"
                                onClick={() => switchMode(!isLogin)}
                                className="font-bold text-blue-600 hover:text-cyan-600 dark:text-cyan-400"
                            >
                                {isLogin ? 'Register now' : 'Sign in'}
                            </button>
                        </p>

                        <div className="mt-8 border-t border-slate-200 pt-5 text-center dark:border-gray-800">
                            <Link
                                to="/"
                                className="text-sm font-medium text-slate-500 transition hover:text-blue-600 dark:text-gray-400 dark:hover:text-cyan-400"
                            >
                                ← Back to home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth;
