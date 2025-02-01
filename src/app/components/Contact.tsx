"use client";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaCheck, FaTimes } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: false, email: false, message: false });
  const [status, setStatus] = useState(""); // "success" or "error"
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false }); // Clear error when user starts typing
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Check for empty fields
    const newErrors = {
      name: !formData.name.trim(),
      email: !formData.email.trim(),
      message: !formData.message.trim(),
    };

    setErrors(newErrors);

    if (newErrors.name || newErrors.email || newErrors.message) {
      setStatus("error");
      setLoading(false);
      return;
    }

    const serviceID = "your_service_id"; // Replace with EmailJS Service ID
    const templateID = "your_template_id"; // Replace with EmailJS Template ID
    const publicKey = "your_public_key"; // Replace with EmailJS Public Key

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    }

    setLoading(false);
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
              {/* Name Input */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-md bg-gray-700 text-white border ${
                    errors.name ? "border-red-500" : "border-gray-600"
                  } focus:outline-none focus:ring-2 focus:ring-emerald-500`}
                  placeholder="Your Name"
                />
                {errors.name && <p className="text-red-400 text-sm mt-1">❌ Name is required.</p>}
              </div>

              {/* Email Input */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-md bg-gray-700 text-white border ${
                    errors.email ? "border-red-500" : "border-gray-600"
                  } focus:outline-none focus:ring-2 focus:ring-emerald-500`}
                  placeholder="Your Email"
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">❌ Email is required.</p>}
              </div>

              {/* Message Input */}
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-md bg-gray-700 text-white border ${
                    errors.message ? "border-red-500" : "border-gray-600"
                  } focus:outline-none focus:ring-2 focus:ring-emerald-500`}
                  placeholder="Your Message"
                  rows={4}
                />
                {errors.message && <p className="text-red-400 text-sm mt-1">❌ Message is required.</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-lg transition relative flex items-center justify-center"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
                {status === "success" && <FaCheck className="ml-2 text-xl text-white" />}
                {status === "error" && <FaTimes className="ml-2 text-xl text-red-400" />}
              </button>

              {/* Success/Error Messages */}
              {status === "success" && (
                <p className="text-green-400 text-sm mt-2 text-center">✅ Your message has been sent!</p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-sm mt-2 text-center">❌ Please fill in all required fields.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
