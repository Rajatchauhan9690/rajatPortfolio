import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .send(
        "service_sgsn3wv", // e.g., "service_xxx"
        "template_m8aenlq", // e.g., "template_yyy"
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "mkWglAHtHUA9SC5se",
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
          setSending(false);
        },
        (err) => {
          console.error(err);
          alert("Failed to send message. Try again later.");
          setSending(false);
        },
      );
  };

  return (
    <section id="contact" className="max-w-5xl mx-auto py-10 px-4">
      <motion.h2
        className="text-4xl font-bold text-green-500 text-center mb-12"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto flex flex-col gap-6 bg-black shadow-lg rounded-xl p-8"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="border border-gray-700 rounded-lg px-4 py-3 bg-black text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="border border-gray-700 rounded-lg px-4 py-3 bg-black text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="border border-gray-700 rounded-lg px-4 py-3 bg-black text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <motion.button
          type="submit"
          disabled={sending}
          className="bg-green-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-transform transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {sending ? "Sending..." : "Send Message"}
        </motion.button>
      </motion.form>
    </section>
  );
};

export default Contact;
