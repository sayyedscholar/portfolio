"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, ExternalLink } from "lucide-react";
import { useLanguage } from "../lib/LanguageContext";

interface TimelineItem {
  year: string;
  icon: any;
  title: string;
  organization: string;
  description: string;
  website?: string;
  altWebsite?: string;
  ecomSite?: string;
  highlights: string[];
}

export default function Journey() {
  const { t } = useLanguage();
  const timeline: TimelineItem[] = [
    {
      year: "2022 - Present",
      icon: Briefcase,
      title: "Software Developer",
      organization: "Afri ERP Investment Zambia Limited",
      description:
        "Leading development of enterprise solutions for African markets",
      website: "https://afrierp.com",
      ecomSite: "https://shop.afrierp.com",
      highlights: [
        "Built and deployed afrierp.com main website from scratch",
        "Developed shop.afrierp.com e-commerce platform",
        "Created ZRA Smart Invoice API integration - Zambia Revenue Authority government e-invoicing system",
        "Designed and implemented complete ERP solution for inventory, sales, and accounting management",
        "Developed real-time tax compliance and reporting features for Zambian market",
      ],
    },
    {
      year: "2017 - 2022",
      icon: Briefcase,
      title: "Software Developer",
      organization: "Fahinds Solutions",
      description: "Full-stack development of enterprise management systems",
      website: "https://fahinds.com",
      altWebsite: "https://fahinds.net",
      highlights: [
        "Built and launched fahinds.com and fahinds.net websites",
        "Developed comprehensive ERP & CRM solutions for multiple platforms (PHP & Java)",
        "Created complete car dealership management system with inventory tracking",
        "Built payroll and HR management modules with employee attendance system",
        "Designed and implemented custom reporting and analytics dashboards",
      ],
    },
    {
      year: "2013 - 2017",
      icon: Briefcase,
      title: "Software Developer",
      organization: "Tetrainfotech LLC - Dubai, UAE",
      description:
        "Working with Associated Partner Asma Technology Pvt Ltd - Mumbai",
      website: "https://tetrainfotech.com",
      highlights: [
        "Built and deployed tetrainfotech.com corporate website",
        "Developed enterprise web applications for UAE and Indian markets",
        "Collaborated with international teams across Dubai and Mumbai",
        "Created complex business management solutions from scratch",
        "Led full project lifecycle from requirements gathering to deployment",
      ],
    },
    {
      year: "2013",
      icon: Award,
      title: "Web Component Developer Certification",
      organization: "NIIT",
      description: "JSP and Servlets - 6 Month Course",
      highlights: [],
    },
    {
      year: "2012",
      icon: GraduationCap,
      title: "Bachelor's Degree in Information Technology",
      organization: "Mumbai University",
      description: "Completed undergraduate degree in IT",
      highlights: [],
    },
  ];

  return (
    <section id="journey" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            {t("journey.title")}{" "}
            <span className="gradient-text">{t("journey.titleHighlight")}</span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
            {t("journey.subtitle")}
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-accent-500"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex items-start gap-8"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 w-16 h-16 bg-white dark:bg-gray-900 rounded-full border-4 border-primary-500 flex items-center justify-center z-10 flex-shrink-0">
                  <item.icon className="w-8 h-8 text-primary-500" />
                </div>

                {/* Content Card */}
                <div className="w-full ml-24">
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                    <span className="inline-block px-4 py-1 bg-gradient-to-r from-primary-500 to-accent-500 text-white text-sm font-semibold rounded-full mb-3">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                      {item.organization}
                    </p>

                    {/* Website Links */}
                    {item.website && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        <a
                          href={item.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 transition-colors"
                        >
                          <ExternalLink className="w-3 h-3" />
                          <span>Website</span>
                        </a>
                        {item.altWebsite && (
                          <a
                            href={item.altWebsite}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 transition-colors"
                          >
                            <ExternalLink className="w-3 h-3" />
                            <span>Alt Site</span>
                          </a>
                        )}
                        {item.ecomSite && (
                          <a
                            href={item.ecomSite}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm text-accent-500 hover:text-accent-600 dark:text-accent-400 dark:hover:text-accent-300 transition-colors"
                          >
                            <ExternalLink className="w-3 h-3" />
                            <span>E-commerce</span>
                          </a>
                        )}
                      </div>
                    )}

                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      {item.description}
                    </p>
                    {item.highlights && item.highlights.length > 0 && (
                      <div className="mt-4">
                        <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                          Key Achievements
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                          {item.highlights.map((highlight, i) => {
                            const isZRA =
                              highlight.includes("ZRA Smart Invoice");
                            return (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-primary-500 mt-1 flex-shrink-0">
                                  •
                                </span>
                                <span className="flex-1">
                                  {highlight}
                                  {isZRA && (
                                    <span className="ml-2 inline-block px-2 py-0.5 text-xs font-semibold bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded">
                                      Gov Integration
                                    </span>
                                  )}
                                </span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
