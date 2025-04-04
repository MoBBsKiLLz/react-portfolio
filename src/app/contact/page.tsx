"use client"; // Ensure it's here for client-side component

import React, { useState } from "react";
import Image from "next/image";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false); // State to track submission

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true); // Start submitting
    try {
      const response = await emailjs.send(
        "service_0l49da7", // Replace with your EmailJS service ID
        "template_bp4jmam", // Replace with your EmailJS template ID
        formData,
        "GJZzGWmSz2nd_dcAu" // Replace with your EmailJS user ID
      );
      setStatus("Thank you for reaching out! I will get back to you soon.");
      setFormData({ name: "", email: "", message: "" }); // Clear form after submission
    } catch (error) {
      setStatus("Sorry, there was an issue submitting your message.");
    } finally {
      setIsSubmitting(false); // Stop submitting
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <main>
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-lg">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <button
                type="submit"
                className={`px-4 py-2 rounded-md ${
                    isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-black dark:bg-white dark:text-black text-white border border-black hover:bg-white hover:text-black hover:border-black dark:hover:bg-black dark:hover:text-white dark:hover:border-white"
                } transition-colors duration-300 ease-in-out`}
                disabled={isSubmitting} // Disable button while submitting
                >
                {isSubmitting ? "Submitting..." : "Send Message"}
            </button>
          </form>

          {status && <p className="mt-4 text-center text-lg">{status}</p>}
        </section>
      </main>
      <footer className="flex flex-col items-center justify-center gap-4 mt-8 p-6">
        <p className="text-lg">
          Interested in working with me or want to get in touch? Visit my{" "}
          <a href="/contact" className="underline hover:text-indigo-400">Contact page</a>!
        </p>
        <div className="flex gap-6 mt-4">
          <a
            href="https://www.linkedin.com/in/miguelzepeda1989/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          >
            <Image aria-hidden className="dark:invert" src="images/linkedin.svg" alt="LinkedIn icon" width={16} height={16} />
            LinkedIn
          </a>
          <a
            href="https://github.com/MoBBsKiLLz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          >
            <Image aria-hidden className="dark:invert" src="images/github.svg" alt="GitHub icon" width={16} height={16} />
            GitHub
          </a>
          <a
            href="mailto:m.zepeda.dev@gmail.com"
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          >
            <Image aria-hidden className="dark:invert" src="images/gmail.svg" alt="Email icon" width={16} height={16} />
            Email
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
