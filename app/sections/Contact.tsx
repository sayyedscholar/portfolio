"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useLanguage } from "../lib/LanguageContext";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const { t } = useLanguage();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      // Check if EmailJS credentials are configured
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        // Fallback: Log to console if EmailJS is not configured
        console.log("EmailJS not configured. Form data:", data);
        setSubmitMessage(
          "⚠️ Email service not configured. Please set up EmailJS credentials in .env.local",
        );
        setIsSubmitting(false);
        reset();
        return;
      }

      // Send email using EmailJS
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
          to_name: "Amaanullah Sayyed",
        },
        publicKey,
      );

      if (result.status === 200) {
        setSubmitMessage(t("contact.form.successMessage"));
        reset();
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitMessage(
        "❌ Failed to send message. Please try again or contact directly via email.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: t("contact.email"),
      value: "sayyedscholar@gmail.com",
      href: "mailto:sayyedscholar@gmail.com",
    },
    {
      icon: Phone,
      label: t("contact.phone"),
      value: "+91 9503240195",
      href: "tel:+919503240195",
    },
    {
      icon: MapPin,
      label: t("contact.location"),
      value: t("contact.locationValue"),
      href: null,
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            {t("contact.title")}{" "}
            <span className="gradient-text">{t("contact.titleHighlight")}</span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">
              {t("contact.information")}
            </h3>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-lg font-medium text-gray-900 dark:text-white hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-lg font-medium text-gray-900 dark:text-white">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl text-white">
              <h4 className="text-xl font-bold mb-3">
                {t("contact.createAmazing")}
              </h4>
              <p className="text-white/90">{t("contact.createDesc")}</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {t("contact.form.name")}
                </label>
                <input
                  id="name"
                  type="text"
                  {...register("name", {
                    required: `${t("contact.form.name")} ${t("contact.form.required")}`,
                  })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">
                    {String(errors.name.message)}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {t("contact.form.email")}
                </label>
                <input
                  id="email"
                  type="email"
                  {...register("email", {
                    required: `${t("contact.form.email")} ${t("contact.form.required")}`,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: t("contact.form.invalidEmail"),
                    },
                  })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">
                    {String(errors.email.message)}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                >
                  {t("contact.form.subject")}
                </label>
                <input
                  id="subject"
                  type="text"
                  {...register("subject", {
                    required: `${t("contact.form.subject")} ${t("contact.form.required")}`,
                  })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  placeholder="Project Discussion"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500">
                    {String(errors.subject.message)}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {t("contact.form.message")}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register("message", {
                    required: `${t("contact.form.message")} ${t("contact.form.required")}`,
                  })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">
                    {String(errors.message.message)}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin">⏳</span>
                    {t("contact.form.sending")}
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    {t("contact.form.send")}
                  </>
                )}
              </button>

              {submitMessage && (
                <div
                  className={`p-4 rounded-lg border ${
                    submitMessage.includes("❌") || submitMessage.includes("⚠️")
                      ? "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-700 dark:text-red-300"
                      : "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-700 dark:text-green-300"
                  }`}
                >
                  {submitMessage}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
