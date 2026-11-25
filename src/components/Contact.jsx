import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCheck,
  FaCopy,
  FaGithub,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  { name: "GitHub", icon: <FaGithub />, url: "#" },
  { name: "X", icon: <FaXTwitter />, url: "#" },
  { name: "Instagram", icon: <FaInstagram />, url: "#" },
  { name: "Discord", icon: <FaDiscord />, url: "#" },
];

const Contact = () => {
  const emailAddress = "ams341.almaghrabi@gmail.com"; // استبدله بإيميلك الفعلي

  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | submitting | success

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");

    // محاكاة إرسال الرسالة (تقدر تربطها لاحقاً بـ EmailJS أو Web3Forms)
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    }, 900);
  };

  return (
    <section
      id="contact"
      className="py-24 scroll-mt-24 px-6 max-w-6xl mx-auto text-white"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get In <span className="text-[#10b981]">Touch</span>
        </h2>
        <p className="text-zinc-400 max-w-xl mx-auto text-sm md:text-base">
          Have a project in mind, a freelance opportunity, or just want to say
          hi? Drop a message and I will get back to you soon.
        </p>
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
        {/* Left Column: Contact Info & Socials */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="lg:col-span-2 bg-[#121212] border border-zinc-800/80 rounded-2xl p-7 flex flex-col justify-between space-y-8"
        >
          <div>
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
              Available for Freelance & Projects
            </div>

            <h3 className="text-2xl font-bold mb-3">
              Let’s build something <span className="text-[#10b981]">great</span>.
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Whether you need a modern landing page, a full React web app, or
              clean UI implementation, feel free to reach out directly.
            </p>
          </div>

          {/* Direct Contact Cards */}
          <div className="space-y-4">
            {/* Email Card with Copy Button */}
            <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-[#10b981]/10 border border-[#10b981]/30 flex items-center justify-center text-[#10b981] shrink-0">
                  <FaEnvelope />
                </div>
                <div className="truncate">
                  <p className="text-xs text-zinc-400">Email Me</p>
                  <p className="text-sm font-medium text-white truncate">
                    {emailAddress}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                title="Copy email"
                className="px-3 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-medium text-zinc-200 flex items-center gap-1.5 transition-colors shrink-0 cursor-pointer"
              >
                {copied ? (
                  <>
                    <FaCheck className="text-[#10b981]" />
                    <span className="text-[#10b981]">Copied</span>
                  </>
                ) : (
                  <>
                    <FaCopy />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Location Card */}
            <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-[#10b981]/10 border border-[#10b981]/30 flex items-center justify-center text-[#10b981] shrink-0">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p className="text-xs text-zinc-400">Location</p>
                <p className="text-sm font-medium text-white">
                  Saudi Arabia • Remote Worldwide
                </p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="pt-4 border-t border-zinc-800/80">
            <p className="text-xs text-zinc-400 mb-3">Connect with me</p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-[#10b981] hover:border-[#10b981]/50 hover:-translate-y-0.5 transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="lg:col-span-3 bg-[#121212] border border-zinc-800/80 rounded-2xl p-7 space-y-5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-medium text-zinc-400 mb-2"
              >
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#10b981] transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-medium text-zinc-400 mb-2"
              >
                Your Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#10b981] transition-colors"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-xs font-medium text-zinc-400 mb-2"
            >
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              value={formData.subject}
              onChange={handleChange}
              placeholder="Frontend Project / Freelance Inquiry"
              className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#10b981] transition-colors"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-xs font-medium text-zinc-400 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me a bit about your project, timeline, and goals..."
              className="w-full px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#10b981] transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full py-3.5 rounded-xl bg-[#10b981] text-black font-semibold text-sm flex items-center justify-center gap-2 hover:bg-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.3)] transition-all cursor-pointer disabled:opacity-60"
          >
            {status === "submitting" ? (
              "Sending Message..."
            ) : status === "success" ? (
              <>
                <FaCheck /> Message Sent Successfully!
              </>
            ) : (
              <>
                <FaPaperPlane /> Send Message
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;