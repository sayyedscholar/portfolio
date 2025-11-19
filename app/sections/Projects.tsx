"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../lib/LanguageContext";

export default function Projects() {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Afri Investment",
      platform: "PHP & Flutter Platform",
      teamSize: 2,
      description:
        "Senior Software Developer leading development of comprehensive business management system including eCommerce platform and ZRA (Zambia Revenue Authority) API integration. Developed eStore eCommerce site independently and initiated Flutter-based ERP system with API architecture.",
      demoUrl: null,
      githubUrl: null, // Private repository
      features: [
        "eStore eCommerce Platform (Solo Development)",
        "ZRA API Integration & Implementation",
        "Flutter ERP System (API-Based)",
        "Real-time Business Analytics",
        "Inventory Management System",
        "Sales & Purchase Management",
        "Customer Relationship Management",
        "Financial Reporting & Integration",
        "Multi-platform Support (Web & Mobile)",
        "RESTful API Architecture",
      ],
      technologies: [
        "PHP",
        "MySQL",
        "Flutter",
        "Dart",
        "REST API",
        "JSON",
        "ZRA API",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Bootstrap",
      ],
      role: "Senior Software Developer - Sole eCommerce Development, ZRA API Integration, Flutter ERP Initiation (Team of 2)",
    },
    {
      title: "Fahinds ERP & CRM Solution",
      platform: "PHP Platform",
      teamSize: 6,
      description:
        "Comprehensive enterprise resource planning and customer relationship management system built with PHP, MySQL, and modern web technologies. Handles complete business operations from lead management to payroll processing.",
      demoUrl: "https://fahinds.com",
      githubUrl: null, // Private repository
      features: [
        "Dashboard & Analytics",
        "Accounts & Payroll Management",
        "Lead & Customer Management",
        "Sales & Purchase Management",
        "Inventory & Document Management",
        "Wages Protection System",
        "Website Content Management",
        "Service Report & AMC Management",
        "Label & Cheque Printing Systems",
        "Retail & Pharma POS Services",
        "Student Management",
        "Employee Attendance Management",
      ],
      technologies: [
        "PHP 5.6",
        "MySQL",
        "JSON",
        "AJAX",
        "jQuery",
        "Bootstrap 3",
        "JavaScript",
        "HTML5",
        "CSS3",
      ],
      role: "Software Developer - Requirement Gathering, Designing, and Coding",
    },
    {
      title: "Fahinds ERP & CRM Solution",
      platform: "Java Platform",
      teamSize: 5,
      description:
        "Java-based enterprise solution for business management using JSP, Servlets, and MySQL. Features robust architecture with comprehensive reporting and document management capabilities.",
      demoUrl: "https://fahinds.net",
      githubUrl: null, // Private repository
      features: [
        "Accounts Management",
        "Payroll Management",
        "Lead Management",
        "Sales & Purchases",
        "Document Management",
        "Website Content Management",
        "Inventory Control",
        "Comprehensive Reports",
        "Service Report & AMC Management",
      ],
      technologies: [
        "JSP",
        "Servlet",
        "HTML5",
        "MySQL 5.5",
        "JSON",
        "AJAX",
        "jQuery",
        "JavaScript",
        "CSS3",
        "Bootstrap",
      ],
      role: "Software Developer - Full project lifecycle",
    },
    {
      title: "Fahinds Car Mall Management",
      platform: ".NET Platform (Desktop)",
      teamSize: 3,
      description:
        "Desktop application with cloud support for car dealership management built with C# and WPF. Features automatic cloud synchronization, comprehensive reporting with Crystal Reports, and multi-database support.",
      demoUrl: null,
      githubUrl: null, // Private repository
      features: [
        "Customer Management",
        "Old Car Sales Records",
        "New Car Sales Record",
        "Car Service History",
        "Car AMC Management",
        "Car Insurance Management",
        "Comprehensive Reports",
        "Automatic Cloud Synchronization",
      ],
      technologies: [
        "C#",
        "WPF",
        "MS ACCESS 2010",
        "SQLite",
        "Crystal Reports",
      ],
      role: "Software Developer - Team Management, Module Integration, Deployment & Maintenance",
    },
    {
      title: "Bansuri Utsav Online Ticketing System",
      platform: "PHP Platform",
      teamSize: 3,
      description:
        "Online ticket booking platform for resellers with real-time quota management and automated accounting. Built with PHP, MySQL, and Bootstrap for responsive design.",
      demoUrl: null,
      githubUrl: null, // Private repository
      features: [
        "Online Ticket Booking",
        "Reseller Dashboard",
        "Reseller Ticket Quota Management",
        "Reseller Accounts Management",
        "Detailed Reports",
      ],
      technologies: [
        "PHP 5.6",
        "MySQL",
        "JSON",
        "AJAX",
        "jQuery",
        "Bootstrap 3",
        "JavaScript",
        "HTML5",
        "CSS3",
      ],
      role: "Software Developer - Requirement Gathering, Designing, and Coding",
    },
    {
      title: "Accounting Software",
      platform: "Java Platform",
      teamSize: 3,
      description:
        "Comprehensive accounting management system with payroll processing and financial reporting. Built with JSP, Servlets, and MySQL with AJAX for dynamic updates.",
      demoUrl: null,
      githubUrl: null, // Private repository
      features: [
        "Accounts Management",
        "Payroll Management",
        "Document Management",
        "Financial Reports",
      ],
      technologies: [
        "JSP",
        "Servlet",
        "HTML5",
        "MySQL 5.6",
        "JSON",
        "AJAX",
        "jQuery",
        "JavaScript",
        "CSS3",
      ],
      role: "Software Developer - Full development cycle",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            {t("projects.title")}{" "}
            <span className="gradient-text">
              {t("projects.titleHighlight")}
            </span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
            {t("projects.subtitle")}
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden"
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                        {project.platform}
                      </span>
                      <span className="px-3 py-1 bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 rounded-full text-sm font-medium">
                        {t("projects.teamOf")} {project.teamSize}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg text-sm font-medium hover:shadow-md transition-all"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          {t("projects.liveDemo")}
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:shadow-md transition-all"
                        >
                          <Code2 className="w-3.5 h-3.5" />
                          {t("projects.github")}
                        </a>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      setSelectedProject(
                        selectedProject === index ? null : index,
                      )
                    }
                    className="px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg font-medium hover:shadow-lg transition-all flex items-center gap-2"
                  >
                    <Code2 className="w-4 h-4" />
                    {selectedProject === index
                      ? t("projects.hideDetails")
                      : t("projects.viewDetails")}
                  </button>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                {selectedProject === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-6"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold mb-3 text-primary-600 dark:text-primary-400">
                          {t("projects.keyFeatures")}
                        </h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-gray-600 dark:text-gray-300"
                            >
                              <span className="text-primary-500 mt-1">▸</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-3 text-primary-600 dark:text-primary-400">
                          {t("projects.technologiesUsed")}
                        </h4>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <h4 className="font-bold mb-2 text-primary-600 dark:text-primary-400">
                          {t("projects.myRole")}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          {project.role}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
