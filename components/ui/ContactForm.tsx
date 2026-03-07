"use client";

import { useState, FormEvent } from "react";

const serviceTypes = [
  "Storm Damage Inspection",
  "Roof Replacement",
  "Roof Repair",
  "Commercial Roofing",
  "General Inquiry",
];

interface FormState {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  serviceType: string;
  message: string;
}

const initialState: FormState = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  address: "",
  serviceType: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError(null);
  };

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePhone = (phone: string) =>
    /^[\d\s\-().+]{7,20}$/.test(phone);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    // Client-side validation
    if (!form.firstName.trim()) { setError("First name is required."); return; }
    if (!form.phone.trim()) { setError("Phone number is required."); return; }
    if (!validatePhone(form.phone)) { setError("Please enter a valid phone number."); return; }
    if (!form.email.trim()) { setError("Email address is required."); return; }
    if (!validateEmail(form.email)) { setError("Please enter a valid email address."); return; }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${form.firstName} ${form.lastName}`.trim(),
          phone: form.phone,
          email: form.email,
          address: form.address,
          message: form.serviceType
            ? `Service: ${form.serviceType}\n\n${form.message}`
            : form.message,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Submission failed.");
      }

      setSuccess(true);
      setForm(initialState);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please call us directly.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-card rounded-2xl p-8 text-center">
        <div className="w-12 h-0.5 bg-gold mx-auto mb-6" />
        <h3 className="font-display text-2xl font-bold text-ivory mb-3">
          Thank You, {form.firstName || "there"}.
        </h3>
        <p className="text-ivory/60 leading-relaxed">
          We&apos;ve received your request and will reach out within 1 business day.
          For urgent matters, call us directly at{" "}
          <a href="tel:+15120000000" className="text-gold font-semibold">
            (512) 000-0000
          </a>
          .
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full bg-iron border border-iron-mid text-ivory placeholder:text-ivory/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold/60 transition-colors";
  const labelClass = "block text-ivory/60 text-xs font-semibold uppercase tracking-wider mb-2";

  return (
    <form onSubmit={handleSubmit} noValidate className="bg-card rounded-2xl p-8 space-y-5">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className={labelClass}>
            First Name <span className="text-gold">*</span>
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            autoComplete="given-name"
            value={form.firstName}
            onChange={handleChange}
            className={inputClass}
            placeholder="John"
            required
          />
        </div>
        <div>
          <label htmlFor="lastName" className={labelClass}>Last Name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            autoComplete="family-name"
            value={form.lastName}
            onChange={handleChange}
            className={inputClass}
            placeholder="Smith"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className={labelClass}>
          Phone <span className="text-gold">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={form.phone}
          onChange={handleChange}
          className={inputClass}
          placeholder="(512) 000-0000"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email <span className="text-gold">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={handleChange}
          className={inputClass}
          placeholder="john@example.com"
          required
        />
      </div>

      <div>
        <label htmlFor="address" className={labelClass}>Property Address</label>
        <input
          id="address"
          name="address"
          type="text"
          autoComplete="street-address"
          value={form.address}
          onChange={handleChange}
          className={inputClass}
          placeholder="123 Main St, Cedar Park, TX"
        />
      </div>

      <div>
        <label htmlFor="serviceType" className={labelClass}>Service Needed</label>
        <select
          id="serviceType"
          name="serviceType"
          value={form.serviceType}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">Select a service...</option>
          {serviceTypes.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>Message</label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          className={inputClass}
          placeholder="Tell us about your roof situation..."
        />
      </div>

      {error && (
        <p role="alert" className="text-red-400 text-sm bg-red-400/10 rounded-lg px-4 py-3">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-gold text-iron font-bold py-4 rounded-full text-base hover:bg-gold-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Sending..." : "Send Request"}
      </button>

      <p className="text-ivory/30 text-xs text-center">
        Or call us directly: <a href="tel:+15120000000" className="text-gold/60 hover:text-gold transition-colors">(512) 000-0000</a>
      </p>
    </form>
  );
}
