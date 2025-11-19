"use client";

import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Instagram,
  Facebook,
} from "lucide-react";
import { useLanguage } from "../lib/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Mail, href: "mailto:sayyedscholar@gmail.com", label: "Email" },
    { icon: Phone, href: "tel:+919503240195", label: "Phone" },
    { icon: Github, href: "https://github.com/sayyedscholar", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://in.linkedin.com/in/amaanullah-sayyed-aa320ab0",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/amaanullah.sayyed",
      label: "Instagram",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/share/14Mmvte9vDA/",
      label: "Facebook",
    },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Amaanullah Sayyed
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {t("footer.description")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-2">
              {[
                { key: "home", label: t("nav.home") },
                { key: "about", label: t("nav.about") },
                { key: "projects", label: t("nav.projects") },
                { key: "contact", label: t("nav.contact") },
              ].map((link) => (
                <li key={link.key}>
                  <a
                    href={`#${link.key}`}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">
              {t("footer.connect")}
            </h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-white dark:bg-gray-800 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-primary-500 transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-600 dark:text-gray-400">
          <p>
            &copy; {currentYear} Amaanullah Sayyed. {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
