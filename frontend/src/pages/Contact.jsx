
import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setStatus('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Connect your backend API here to send the message.
    setStatus(
      'Your form is ready, but message delivery has not been configured yet.'
    );
  };

  const contactItems = [
    {
      icon: '✉',
      title: 'Email Us',
      description: 'Have a question? Send us an email.',
      detail: 'support@nexcart.com',
      href: 'mailto:support@nexcart.com',
    },
    {
      icon: '◷',
      title: 'Support Hours',
      description: 'We are here to help with your orders.',
      detail: 'Monday – Friday, 9 AM – 6 PM',
      href: null,
    },
    {
      icon: '?',
      title: 'Need Help?',
      description: 'Questions about your shopping experience?',
      detail: 'We would love to hear from you.',
      href: null,
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 text-slate-900 transition-colors duration-300 dark:bg-gray-950 dark:text-white sm:px-6 sm:py-10 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Hero */}
        <section className="relative isolate overflow-hidden rounded-3xl bg-linear-to-br from-indigo-700 via-blue-700 to-cyan-600 px-6 py-14 text-white shadow-xl sm:px-10 sm:py-20 lg:px-16">
          <div className="pointer-events-none absolute -right-16 -top-20 -z-10 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-24 left-1/3 -z-10 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl" />

          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold tracking-widest text-blue-50 backdrop-blur sm:text-sm">
              WE ARE HERE FOR YOU
            </span>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Let's Talk About{' '}
              <span className="text-cyan-200">Your Experience.</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-blue-50 sm:text-lg sm:leading-8">
              Questions about an order? Need help finding something?
              Whatever is on your mind, we would love to hear from you.
            </p>

            <a
              href="#contact-form"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-blue-700 shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-cyan-50 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-white/40 sm:text-base"
            >
              Get in Touch
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>

        {/* Contact information */}
        <section className="py-12 sm:py-16">
          <div className="mb-8">
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-cyan-400">
              We'd Love to Hear From You
            </p>

            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              How Can We Help?
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 dark:text-gray-400 sm:text-base">
              Choose the best way to reach us, or send us a message using
              the form below.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {contactItems.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-cyan-900"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-indigo-600 to-cyan-500 text-xl font-bold text-white shadow-md">
                  {item.icon}
                </div>

                <h3 className="mt-5 text-lg font-bold">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-gray-400">
                  {item.description}
                </p>

                {item.href ? (
                  <a
                    href={item.href}
                    className="mt-4 inline-block text-sm font-bold text-blue-600 transition hover:text-cyan-600 dark:text-cyan-400 dark:hover:text-cyan-300"
                  >
                    {item.detail} →
                  </a>
                ) : (
                  <p className="mt-4 text-sm font-bold text-blue-600 dark:text-cyan-400">
                    {item.detail}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Contact form */}
        <section
          id="contact-form"
          className="grid grid-cols-1 gap-8 pb-12 lg:grid-cols-5 lg:gap-12 lg:pb-20"
        >
          {/* Form introduction */}
          <div className="relative isolate overflow-hidden rounded-3xl bg-linear-to-br from-indigo-700 via-blue-700 to-cyan-600 p-7 text-white shadow-xl sm:p-10 lg:col-span-2">
            <div className="pointer-events-none absolute -bottom-16 -right-16 -z-10 h-56 w-56 rounded-full bg-white/10 blur-2xl" />

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-200">
              Contact NexCart
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
              Drop Us a Message.
            </h2>

            <p className="mt-5 text-sm leading-7 text-blue-50 sm:text-base">
              Fill out the form and tell us how we can help. Whether it is
              a product question, an order issue, or feedback, your message
              matters to us.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/15">
                  ✓
                </span>
                <div>
                  <p className="font-semibold">We're listening</p>
                  <p className="mt-1 text-sm text-blue-100">
                    Your feedback helps us improve.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/15">
                  ↗
                </span>
                <div>
                  <p className="font-semibold">Here to assist</p>
                  <p className="mt-1 text-sm text-blue-100">
                    Let us know what you need help with.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 border-t border-white/20 pt-6">
              <p className="text-sm text-blue-100">
                Thank you for being part of
              </p>
              <p className="mt-1 text-2xl font-extrabold">
                NexCart<span className="text-cyan-200">.</span>
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:p-10 lg:col-span-3">
            <div className="mb-8">
              <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                Send a Message
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-gray-400">
                All fields are required. We'll use your details to respond
                to your inquiry.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    maxLength={100}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-gray-700 dark:bg-gray-950 dark:placeholder:text-gray-500 dark:focus:border-cyan-500 dark:focus:ring-cyan-500/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    maxLength={254}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-gray-700 dark:bg-gray-950 dark:placeholder:text-gray-500 dark:focus:border-cyan-500 dark:focus:ring-cyan-500/10"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-semibold"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-gray-700 dark:bg-gray-950 dark:focus:border-cyan-500 dark:focus:ring-cyan-500/10"
                >
                  <option value="" disabled>
                    Select a subject
                  </option>
                  <option value="Order Inquiry">Order Inquiry</option>
                  <option value="Product Question">Product Question</option>
                  <option value="Payment Issue">Payment Issue</option>
                  <option value="Return or Refund">Return or Refund</option>
                  <option value="Website Feedback">Website Feedback</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Tell us how we can help..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  minLength={10}
                  maxLength={3000}
                  className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-6 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-gray-700 dark:bg-gray-950 dark:placeholder:text-gray-500 dark:focus:border-cyan-500 dark:focus:ring-cyan-500/10"
                />
                <p className="mt-2 text-right text-xs text-slate-500 dark:text-gray-400">
                  {formData.message.length}/3000 characters
                </p>
              </div>

              {status && (
                <p
                  role="status"
                  className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-800 dark:border-amber-900/60 dark:bg-amber-950/30 dark:text-amber-300"
                >
                  {status}
                </p>
              )}

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-indigo-600 to-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-0.5 hover:from-indigo-700 hover:to-cyan-600 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-500/30 sm:w-auto"
              >
                Send Message
                <span aria-hidden="true">→</span>
              </button>

              <p className="text-xs leading-5 text-slate-500 dark:text-gray-400">
                This demo form does not send or store your message yet.
              </p>
            </form>
          </div>
        </section>

      </div>
    </main>
  );
}

export default Contact;