"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#F5F7FA] py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mb-8 text-center md:text-left">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#5A73C3] uppercase">
            {t("contact.subtitle")}
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#111827] mt-1">
            {t("contact.title")}
          </h2>
          <p className="mt-2 text-sm text-[#4B5563] max-w-2xl md:max-w-xl md:text-left mx-auto md:mx-0">
            {t("contact.description")}
          </p>
        </div>

        {/* Contact Card: 2 columns */}
        <div className="bg-white rounded-2xl shadow-[0_18px_40px_rgba(15,23,42,0.08)] border border-[#E5E7EB] p-6 md:p-8 grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)] gap-8">
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
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                alert(t("contact.formSubmitAlert"));
              }}
            >
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-[#111827] mb-1">
                  {t("contact.form.name")}
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder={t("contact.form.namePlaceholder")}
                  className="w-full rounded-lg border border-[#E5E7EB] bg-white px-4 py-2.5 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#5A73C3] focus:border-transparent"
                  required
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
                  placeholder={t("contact.form.emailPlaceholder")}
                  className="w-full rounded-lg border border-[#E5E7EB] bg-white px-4 py-2.5 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#5A73C3] focus:border-transparent"
                  required
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
                  placeholder={t("contact.form.organizationPlaceholder")}
                  className="w-full rounded-lg border border-[#E5E7EB] bg-white px-4 py-2.5 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#5A73C3] focus:border-transparent"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-[#111827] mb-1">
                  {t("contact.form.message")}
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder={t("contact.form.messagePlaceholder")}
                  className="w-full rounded-lg border border-[#E5E7EB] bg-white px-4 py-2.5 text-sm text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#5A73C3] focus:border-transparent resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full md:w-auto px-6 py-3 rounded-full bg-[#0D278A] text-white text-sm font-semibold shadow-md hover:bg-[#0A1E6A] hover:shadow-lg transition"
                >
                  {t("contact.form.submit")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
