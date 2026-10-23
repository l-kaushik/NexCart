import { Link } from 'react-router-dom'

function ReturnPolicy() {
  const sections = [
    {
      id: 'overview',
      title: '1. Return Policy Overview',
      content:
        'At NexCart, we aim to provide a smooth and satisfying shopping experience. We encourage customers to review product descriptions, specifications, sizes, and other details carefully before placing an order.',
    },
    {
      id: 'eligibility',
      title: '2. Return Eligibility',
      content:
        'When returns are available, eligibility may depend on the product category, condition of the item, packaging, proof of purchase, and the applicable return window. Products must meet the conditions communicated in the applicable product and order policies.',
    },
    {
      id: 'conditions',
      title: '3. Return Conditions',
      content:
        'Where a return is permitted, products may need to be unused, undamaged, and returned with their original packaging, accessories, tags, and invoice. Certain products may be excluded from returns because of their nature, hygiene requirements, or applicable legal restrictions.',
    },
    {
      id: 'refunds',
      title: '4. Refunds',
      content:
        'Refund eligibility, processing time, and refund method depend on the order circumstances and the applicable policy. Where a refund is approved, we will communicate the expected processing steps. Refunds are not guaranteed for orders that are not eligible under the applicable terms.',
    },
    {
      id: 'damaged',
      title: '5. Damaged, Defective, or Incorrect Items',
      content:
        'If you receive a damaged, defective, or incorrect item, contact our support team as soon as possible with your order details and clear photographs, where appropriate. We will review the issue and explain the available resolution in accordance with applicable law and our policies.',
    },
    {
      id: 'cancellations',
      title: '6. Order Cancellations',
      content:
        'Order cancellation availability may depend on the order status and whether the item has already been processed or dispatched. Please contact our support team promptly if you need assistance with an order.',
    },
    {
      id: 'changes',
      title: '7. Policy Updates',
      content:
        'NexCart may update this policy when business requirements or applicable regulations change. Updates will be published on this page. Any policy change will remain subject to applicable consumer protection laws and rights.',
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 text-slate-900 transition-colors duration-300 dark:bg-gray-950 dark:text-white sm:px-6 sm:py-10 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Hero */}
        <section className="relative isolate overflow-hidden rounded-3xl bg-linear-to-br from-indigo-700 via-blue-700 to-cyan-600 px-6 py-14 text-white shadow-xl sm:px-10 sm:py-20 lg:px-16">
          <div className="pointer-events-none absolute -right-16 -top-20 -z-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 left-1/3 -z-10 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl" />

          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold tracking-widest text-blue-50 backdrop-blur sm:text-sm">
              CUSTOMER INFORMATION
            </span>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-7xl">
              Return <span className="text-cyan-200">Policy.</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-blue-50 sm:text-lg">
              Please review our return guidelines and important updates
              before requesting a return for your NexCart order.
            </p>
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-8 sm:py-10">
          <div
            role="alert"
            className="rounded-2xl border border-amber-300 bg-amber-50 p-6 dark:border-amber-700/70 dark:bg-amber-950/30 sm:p-8"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-2xl dark:bg-amber-900/60">
                ⚠️
              </div>

              <div>
                <p className="text-lg font-extrabold text-amber-900 dark:text-amber-300 sm:text-xl">
                  Important Notice: Returns Are Currently Closed
                </p>

                <p className="mt-3 leading-8 text-amber-900 dark:text-amber-200">
                  Due to the exceptionally high volume of customer returns
                  during festival and seasonal periods, our return service
                  is currently closed. We apologize for the inconvenience
                  and appreciate your patience and understanding while we
                  manage the increased demand.
                </p>

                <p className="mt-3 leading-7 text-amber-800 dark:text-amber-300">
                  Please check this page for updates regarding the
                  resumption of our return service. For damaged, defective,
                  incorrect products, or other order-related concerns,
                  please contact our support team for assistance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Policy Content */}
        <section className="grid gap-6 lg:grid-cols-[260px_1fr] lg:gap-10">

          {/* Navigation */}
          <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900 lg:sticky lg:top-8">
            <h2 className="text-lg font-bold">On this page</h2>

            <nav className="mt-4 space-y-3">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="block text-sm leading-6 text-slate-600 transition hover:text-blue-600 dark:text-gray-400 dark:hover:text-cyan-400"
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </aside>

          {/* Sections */}
          <div className="space-y-5">
            {sections.map((section) => (
              <article
                key={section.id}
                id={section.id}
                className="scroll-mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:p-8"
              >
                <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
                  {section.title}
                </h2>

                <p className="mt-4 leading-8 text-slate-600 dark:text-gray-400">
                  {section.content}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Support CTA */}
        <section className="mt-12 rounded-3xl bg-linear-to-br from-indigo-700 via-blue-700 to-cyan-600 px-6 py-12 text-center text-white shadow-xl sm:mt-16 sm:px-10 sm:py-16">
          <h2 className="text-2xl font-extrabold sm:text-4xl">
            Need help with an order?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-50">
            Our team can help you with damaged products, incorrect items,
            and other order-related questions.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-blue-700 shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-cyan-50 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-white/40"
            >
              Contact Support <span aria-hidden="true">→</span>
            </Link>

            <Link
              to="/"
              className="inline-flex items-center rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
            >
              Back to Home
            </Link>
          </div>
        </section>

      </div>
    </div>
  )
}

export default ReturnPolicy