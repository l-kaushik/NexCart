import { Link } from 'react-router-dom'

function Disclaimer() {
  const sections = [
    {
      title: '1. General Information',
      content:
        'The information provided on NexCart is for general informational and shopping purposes only. While we strive to keep product descriptions, prices, images, and other details accurate and up to date, errors or omissions may occasionally occur.',
    },
    {
      title: '2. Product Information',
      content:
        'Product descriptions, specifications, images, availability, and other details are provided for informational purposes. Actual products may differ slightly in appearance, color, packaging, or specifications. Please review the product details carefully before making a purchase.',
    },
    {
      title: '3. Pricing and Availability',
      content:
        'Prices, discounts, and product availability may change without prior notice. We make reasonable efforts to display accurate information, but we cannot guarantee that all listings are always current or error-free.',
    },
    {
      title: '4. No Professional Advice',
      content:
        'Content published on NexCart should not be considered professional, medical, financial, legal, or other specialized advice. You should consult a qualified professional when appropriate.',
    },
    {
      title: '5. Third-Party Services and Links',
      content:
        'NexCart may contain links to third-party websites, payment providers, or other services. We do not control external websites and are not responsible for their content, availability, privacy practices, or policies. Please review their terms before using those services.',
    },
    {
      title: '6. Limitation of Liability',
      content:
        'To the extent permitted by applicable law, NexCart shall not be liable for losses arising from reliance on website information, temporary service interruptions, inaccuracies, or third-party services. Nothing in this disclaimer excludes liability that cannot legally be excluded.',
    },
    {
      title: '7. Changes to This Disclaimer',
      content:
        'We may update this disclaimer from time to time to reflect changes to our website, services, or applicable requirements. Any updated version will be published on this page.',
    },
    {
      title: '8. Contact Us',
      content:
        'If you have questions about this disclaimer or information published on NexCart, please contact us through our designated support or contact page.',
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
              TRANSPARENCY & TRUST
            </span>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-7xl">
              Website{' '}
              <span className="text-cyan-200">Disclaimer.</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-blue-50 sm:text-lg">
              Important information about using NexCart, product listings,
              pricing, and the content available on our website.
            </p>

            <p className="mt-6 text-sm text-blue-100">
              Last updated: October 22, 2026
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-10 sm:py-14">
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-900/60 dark:bg-blue-950/30 sm:p-8">
            <h2 className="text-xl font-bold text-blue-800 dark:text-blue-300">
              Please read this disclaimer carefully
            </h2>

            <p className="mt-3 leading-8 text-slate-700 dark:text-gray-300">
              By accessing or using NexCart, you acknowledge that you have
              read and understood this disclaimer. It explains the general
              limitations associated with the information and services
              available through our website. This disclaimer should be read
              alongside our applicable Terms and Conditions and Privacy Policy.
            </p>
          </div>
        </section>

        {/* Disclaimer Sections */}
        <section className="grid gap-6 lg:grid-cols-[260px_1fr] lg:gap-10">

          {/* Sidebar */}
          <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900 lg:sticky lg:top-8">
            <h2 className="text-lg font-bold">On this page</h2>

            <nav className="mt-4 space-y-3">
              {sections.map((section, index) => (
                <a
                  key={section.title}
                  href={`#disclaimer-${index + 1}`}
                  className="block text-sm leading-6 text-slate-600 transition hover:text-blue-600 dark:text-gray-400 dark:hover:text-cyan-400"
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </aside>

          {/* Content */}
          <div className="space-y-5">
            {sections.map((section, index) => (
              <article
                key={section.title}
                id={`disclaimer-${index + 1}`}
                className="scroll-mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-colors dark:border-gray-800 dark:bg-gray-900 sm:p-8"
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

        {/* Bottom CTA */}
        <section className="mt-12 rounded-3xl bg-linear-to-br from-indigo-700 via-blue-700 to-cyan-600 px-6 py-10 text-center text-white shadow-xl sm:mt-16 sm:px-10 sm:py-14">
          <h2 className="text-2xl font-extrabold sm:text-3xl">
            Have questions?
          </h2>

          <p className="mx-auto mt-3 max-w-xl leading-7 text-blue-50">
            We're here to help clarify our policies and provide more
            information about your shopping experience.
          </p>

          <Link
            to="/"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-blue-700 shadow-lg transition hover:-translate-y-1 hover:bg-cyan-50 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-white/40"
          >
            Back to Home <span aria-hidden="true">→</span>
          </Link>
        </section>

      </div>
    </div>
  )
}

export default Disclaimer