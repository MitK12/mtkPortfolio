import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaTelegram,
  FaFacebook,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showNotification = (
    message: string,
    type: "success" | "error" = "success"
  ) => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 5000); // hide after 5s
  };

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        showNotification("✅ Message sent successfully!", "success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        showNotification(`❌ Failed: ${data.error || "Try again."}`, "error");
      }
    } catch (error) {
      console.error(error);
      showNotification("⚠️ Network error. Check your connection.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-16 px-4 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
            Have a project in mind or just want to chat? I'd love to hear from
            you!
          </p>
        </section>

        {/* Notification */}
        {notification && (
          <div
            className={`mb-6 p-4 rounded-lg ${
              notification.type === "success"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {notification.message}
          </div>
        )}

        {/* Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter Full Name"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter Your Email"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Hello. I would love to hear from you..."
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition-colors"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Info / Socials */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-4">
              {/* Phone */}
              <div className="flex items-center space-x-2">
                <FaPhone className="text-green-600 text-2xl" />
                <span className="text-2xl">+251 918-405-268</span>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-2">
                <FaEnvelope className="text-blue-600 text-2xl" />
                <a
                  href="mailto:kassawmitiku@gmail.com"
                  className="text-blue-600 hover:underline text-2xl"
                >
                  kassawmitiku@gmail.com
                </a>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
            <div className="flex space-x-4 text-2xl">
              <a
                href="https://github.com/MitK12"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="h-14 w-14 text-[#d8eb08] " />
              </a>
              <a
                href="https://linkedin.com/in/mitiku-kassaw-21m16"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="h-14 w-14 text-[#0076B5]" />
              </a>
              <a
                href="https://twitter.com/mitiku_kas"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="h-14 w-14 text-[#1DA1F2] " />
              </a>
              <a
                href="https://facebook.com/Mitiku.Ethiopic"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="h-14 w-14 text-[#1877F2]" />
              </a>
              <a
                href="https://t.me/MKETHIO"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegram className="h-14 w-14 text-[#1697d7]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
