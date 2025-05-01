import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await emailjs.sendForm(
        'service_75z0iem', // Replace with your EmailJS service ID
        'template_jsin5lp', // Replace with your EmailJS template ID
        form.current,
        'WuDFtMQStUH9WsfPv' // Replace with your EmailJS public key
      );

      form.current.reset();
      setSent(true);
      setTimeout(() => setSent(false), 5000);
    } catch (err) {
      setError('Failed to send message. Please try again later.');
      console.error('Email sending error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-gradient-to-b from-[#e6f4f4] to-white py-16 px-4" id="contact">
      <div className="max-w-[800px] mx-auto bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#208486] text-center mb-6">
          Contact Us
        </h2>
        <p className="text-gray-600 text-center mb-8 max-w-lg mx-auto">
          Have questions or feedback? We'd love to hear from you!
        </p>

        {sent && (
          <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg text-center">
            Your message has been sent successfully! We'll get back to you soon.
          </div>
        )}

        {error && (
          <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg text-center">
            {error}
          </div>
        )}

        <form ref={form} onSubmit={handleSubmit} className="grid gap-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
              Name *
            </label>
            <input
              id="name"
              type="text"
              name="user_name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#208486] transition-all"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
              Email *
            </label>
            <input
              id="email"
              type="email"
              name="user_email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#208486] transition-all"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#208486] transition-all"
              placeholder="Your message here..."
            ></textarea>
          </div>

          <input 
            type="hidden" 
            name="to_email" 
            value="thuanlephuc152@gmail.com" 
          />

          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className={`bg-[#208486] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#186b6b] transition duration-300 shadow-md w-full sm:w-auto ${
                loading ? 'opacity-75 cursor-not-allowed' : ''
              }`}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                'Send Message'
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;