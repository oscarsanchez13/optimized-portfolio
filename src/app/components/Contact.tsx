"use client";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaCheck, FaTimes } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(""); // "success" or "error"
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setLoading(false);
      return;
    }

    // Simulating API call - Replace with EmailJS or Formspree integration
    setTimeout(() => {
      setStatus("success");
      setLoading(false);
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <section id="contact" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl font-bold text-center mb-10">Let's Connect!</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left Side: Social Links */}
          <div className="flex flex-col items-center md:items-start">
            <p className="text-lg text-gray-300 mb-4">
              Feel free to reach out! Whether you have a question or just want to say hi, I'll do my best to get back to you.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="bg-emerald-600 hover:bg-emerald-500 p-3 rounded-full transition">
                <FaLinkedin size={24} />
              </a>
              <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition">
                <FaGithub size={24} />
              </a>
              <a href="mailto:your.email@example.com" className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition">
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Your Name"
                />
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Your Email"
                />
              </div>
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Your Message"
                  rows={4}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-lg transition relative flex items-center justify-center"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
                {status === "success" && <FaCheck className="ml-2 text-xl text-white" />}
                {status === "error" && <FaTimes className="ml-2 text-xl text-red-400" />}
              </button>

              {status === "success" && (
                <p className="text-green-400 text-sm mt-2 text-center">✅ Your message has been sent!</p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-sm mt-2 text-center">❌ Please fill in all fields before submitting.</p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
