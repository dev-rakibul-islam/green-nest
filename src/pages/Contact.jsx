import React, { useState } from "react";
import GlassCard from "../components/GlassCard";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 2500);
  };

  return (
    <div className="relative mx-auto w-11/12 max-w-7xl px-4 py-10 mt-10">
      <div className="pointer-events-none absolute -top-24 -left-10 size-72 rounded-full bg-emerald-400/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -right-10 size-80 rounded-full bg-teal-400/20 blur-3xl" />

      <div className="mb-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-[#007C56] tracking-tight">
          Contact
        </h1>
        <p className="text-sm opacity-80 mt-1">
          We usually reply within 1 business day.
        </p>
      </div>

      <GlassCard className="p-6 md:p-8">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div>
            <label className="label pb-1">
              <span className="label-text">Name</span>
            </label>
            <input
              className="input w-full bg-white/10 border-white/20 backdrop-blur-md"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="label pb-1">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              className="input w-full bg-white/10 border-white/20 backdrop-blur-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </div>
          <div className="md:col-span-2">
            <label className="label pb-1">
              <span className="label-text">Message</span>
            </label>
            <textarea
              rows={4}
              className="textarea w-full bg-white/10 border-white/20 backdrop-blur-md"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="How can we help?"
            />
          </div>
          <div className="md:col-span-2 flex items-center justify-between">
            <p className="text-xs opacity-70">
              Or email us at support@greennest.example
            </p>
            <button className="btn bg-[#007C56] text-white">Send</button>
          </div>
        </form>
        {sent && (
          <div className="alert alert-success/80 mt-4">
            Thanks! Your message has been sent. We will reach out shortly.
          </div>
        )}
      </GlassCard>
    </div>
  );
};

export default Contact;
