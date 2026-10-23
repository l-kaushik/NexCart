import { Link } from 'react-router-dom'

function About() {
  const values = [
    {
      icon: '✦',
      title: 'Quality Finds',
      description:
        'We focus on bringing together products that offer great value, quality, and everyday usefulness.',
    },
    {
      icon: '♡',
      title: 'Customer First',
      description:
        'Your shopping experience matters. We aim to make discovering and choosing products simple and enjoyable.',
    },
    {
      icon: '⚡',
      title: 'Easy Shopping',
      description:
        'From exploring products to finding your favorites, we keep the experience smooth and straightforward.',
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 text-slate-900 transition-colors duration-300 dark:bg-gray-950 dark:text-white sm:px-6 sm:py-10 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Hero Section */}
        <section className="relative isolate overflow-hidden rounded-3xl bg-linear-to-br from-indigo-700 via-blue-700 to-cyan-600 px-6 py-16 text-white shadow-xl sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          <div className="pointer-events-none absolute -right-16 -top-20 -z-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-1/3 -z-10 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl" />

          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold tracking-widest text-blue-50 backdrop-blur sm:text-sm">
              GET TO KNOW US
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
              Shopping made{' '}
              <span className="text-cyan-200">better.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-blue-50 sm:text-lg">
              Welcome to NexCart, your destination for discovering products
              you'll love. We believe shopping should be simple, enjoyable,
              and full of great finds.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-blue-700 shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-cyan-50 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-white/40"
              >
                Explore NexCart <span aria-hidden="true">→</span>
              </Link>

              <Link
                to="/products"
                className="inline-flex items-center rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
              >
                Browse Products
              </Link>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="grid items-center gap-10 py-14 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-cyan-400">
              Our Story
            </p>

            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              A better way to discover your next favorite thing.
            </h2>

            <p className="mt-6 leading-8 text-slate-600 dark:text-gray-400">
              At NexCart, we believe finding the right product shouldn't
              feel complicated. Our goal is to create a welcoming shopping
              destination where you can explore different products, discover
              new favorites, and shop with confidence.
            </p>

            <p className="mt-4 leading-8 text-slate-600 dark:text-gray-400">
              Whether you're looking for something useful for everyday life
              or simply exploring what's new, NexCart is designed to make
              your journey easier, one discovery at a time.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-indigo-100 via-blue-100 to-cyan-100 p-6 dark:from-indigo-950 dark:via-blue-950 dark:to-cyan-950 sm:p-10">
            <div className="rounded-2xl border border-white/70 bg-white/70 p-7 shadow-xl backdrop-blur dark:border-white/10 dark:bg-gray-900/70 sm:p-10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-indigo-600 to-cyan-500 text-3xl text-white shadow-lg">
                ✦
              </div>

              <p className="text-2xl font-extrabold leading-snug sm:text-3xl">
                Great finds.
                <br />
                Smarter choices.
                <br />
                Happier shopping.
              </p>

              <p className="mt-5 leading-7 text-slate-600 dark:text-gray-400">
                Your next favorite find could be just a click away.
              </p>

              <div className="mt-8 h-1.5 w-24 rounded-full bg-linear-to-r from-indigo-600 to-cyan-500" />
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="rounded-3xl border border-slate-200 bg-white px-6 py-12 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:px-10 sm:py-16 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-cyan-400">
              Our Mission
            </p>

            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Making every shopping journey count.
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600 dark:text-gray-400 sm:text-lg">
              Our mission is to make product discovery easier by creating
              a shopping experience that feels intuitive, accessible, and
              enjoyable. We're here to help you spend less time searching
              and more time finding what you love.
            </p>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-14 sm:py-16 lg:py-24">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-cyan-400">
              What We Believe
            </p>

            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              The values behind NexCart
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-gray-400">
              Everything we do is guided by the goal of making your shopping
              experience a little better.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value, index) => (
              <article
                key={value.title}
                className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900 dark:hover:border-cyan-900 sm:p-8"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-indigo-600 to-cyan-500 text-2xl text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                  {value.icon}
                </div>

                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-cyan-400">
                  0{index + 1}
                </p>

                <h3 className="text-xl font-bold">{value.title}</h3>

                <p className="mt-3 leading-7 text-slate-600 dark:text-gray-400">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Closing CTA */}
        <section className="relative isolate overflow-hidden rounded-3xl bg-linear-to-br from-indigo-700 via-blue-700 to-cyan-600 px-6 py-12 text-center text-white shadow-xl sm:px-10 sm:py-16 lg:px-16">
          <div className="pointer-events-none absolute -right-10 -top-16 -z-10 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 left-10 -z-10 h-56 w-56 rounded-full bg-cyan-300/20 blur-3xl" />

          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Ready to find something you love?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-50">
            Your next great find is waiting. Explore our collection and
            discover what makes NexCart your shopping destination.
          </p>

          <Link
            to="/products"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-blue-700 shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-cyan-50 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-white/40"
          >
            Start Exploring <span aria-hidden="true">→</span>
          </Link>
        </section>

      </div>
    </div>
  )
}

export default About