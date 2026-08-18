"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { motion } from "framer-motion";

export function ContactSection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("success");
      setFormData({ name: "", email: "", organization: "", message: "" });
    } catch (error: any) {
      console.error("Error submitting form:", error);
      setStatus("error");
      const msg = error.message || "Something went wrong. Please try again later.";
      setErrorMessage(msg);
    }
  };

  return (
    <section className="bg-[#F8FAFC] py-16 md:py-24 border-t border-slate-200/60 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center md:text-left"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-[#E0E7FF] text-[#0D278A] text-xs font-bold tracking-[0.2em] uppercase mb-3 shadow-2xs">
            {t("contact.subtitle")}
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 tracking-tight">
            {t("contact.title")}
          </h2>
          <p className="mt-2 text-sm md:text-base text-slate-600 max-w-2xl md:max-w-xl md:text-left mx-auto md:mx-0 leading-relaxed">
            {t("contact.description")}
          </p>
        </motion.div>

        {/* Contact Card: 2 columns */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(13,39,138,0.06)] border border-slate-200/80 p-6 md:p-10 grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)] gap-8 overflow-hidden transform-gpu"
        >
          {/* Left Side: Contact info + reassurance */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-[#111827]">
                {t("contact.leftTitle")}
              </h3>
              <p className="mt-2 text-sm text-[#4B5563]">
                {t("contact.leftDescription")}
              </p>
            </div>

            <div className="space-y-3 text-sm text-[#4B5563]">
              <div>
                <p className="font-semibold text-[#111827]">{t("contact.otherChannels")}</p>
                <p>{t("contact.email")}: <span className="font-medium">contact@primedigital.co</span></p>
                <p>{t("contact.phone")}: <span className="font-medium">02-123-4567</span></p>
              </div>
              <div className="text-xs text-[#6B7280]">
                {t("contact.privacyNote")}
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div>
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Message Sent!</h3>
                <p className="text-gray-600">Thank you for contacting us. We will get back to you shortly.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-[#0D278A] font-medium hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                {status === "error" && (
                  <div className="p-4 bg-red-50 text-red-700 rounded-lg text-sm">
                    {errorMessage}
                  </div>
                )}

                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-[#111827] mb-1">
                    {t("contact.form.name")}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t("contact.form.namePlaceholder")}
                    className="w-full rounded-lg border border-[#E5E7EB] bg-white px-4 py-2.5 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#5A73C3] focus:border-transparent"
                    required
                    disabled={status === "loading"}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-[#111827] mb-1">
                    {t("contact.form.email")}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t("contact.form.emailPlaceholder")}
                    className="w-full rounded-lg border border-[#E5E7EB] bg-white px-4 py-2.5 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#5A73C3] focus:border-transparent"
                    required
                    disabled={status === "loading"}
                  />
                </div>

                {/* Organization (optional) */}
                <div>
                  <label className="block text-sm font-medium text-[#111827] mb-1">
                    {t("contact.form.organization")}
                  </label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder={t("contact.form.organizationPlaceholder")}
                    className="w-full rounded-lg border border-[#E5E7EB] bg-white px-4 py-2.5 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#5A73C3] focus:border-transparent"
                    disabled={status === "loading"}
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-[#111827] mb-1">
                    {t("contact.form.message")}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder={t("contact.form.messagePlaceholder")}
                    className="w-full rounded-lg border border-[#E5E7EB] bg-white px-4 py-2.5 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#5A73C3] focus:border-transparent resize-none"
                    required
                    disabled={status === "loading"}
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="inline-flex items-center justify-center w-full md:w-auto px-6 py-3 rounded-full bg-[#0D278A] text-white text-sm font-semibold shadow-md hover:bg-[#0A1E6A] hover:shadow-lg transition disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      t("contact.form.submit")
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
