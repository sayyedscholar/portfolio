"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../lib/LanguageContext";

export default function Skills() {
  const { t } = useLanguage();
  const skillCategories = [
    {
      category: "Backend Development",
      skills: [
        "Java (J2SE, J2EE)",
        "PHP",
        "C#.NET",
        "JSP & Servlets",
        "RESTful APIs",
        "Node.js",
      ],
    },
    {
      category: "Frontend Development",
      skills: [
        "JavaScript",
        "HTML5",
        "CSS3",
        "jQuery",
        "AJAX",
        "Bootstrap",
        "React",
        "Next.js",
        "Tailwind CSS",
      ],
    },
    {
      category: "Database & Data",
      skills: [
        "MySQL",
        "MS SQL Server",
        "Oracle",
        "SQLite",
        "MS Access",
        "Database Design",
        "Query Optimization",
      ],
    },
    {
      category: "AI & Machine Learning",
      skills: [
        "Claude (Anthropic)",
        "ChatGPT (OpenAI)",
        "AI-Assisted Development",
        "Prompt Engineering",
        "LLM Integration",
      ],
    },
    {
      category: "Frameworks & CMS",
      skills: ["Magento", "WordPress", "WPF", "Crystal Reports", "JSON/XML"],
    },
    {
      category: "Development Tools & IDEs",
      skills: [
        "VS Code",
        "Visual Studio",
        "Windsurf",
        "Zed",
        "Eclipse",
        "NetBeans",
        "GitHub",
        "Git",
      ],
    },
    {
      category: "DevOps & Deployment",
      skills: [
        "Apache Tomcat",
        "LAMP Stack",
        "XAMPP",
        "Linux (CentOS, Ubuntu)",
        "Windows Server",
        "Docker",
        "CI/CD",
      ],
    },
    {
      category: "Software Methodologies",
      skills: [
        "Agile/Scrum",
        "Waterfall",
        "Test Driven Development",
        "Version Control",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 px-4 bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm relative overflow-hidden"
    >
      {/* Cool Developer Background */}
      <div className="absolute inset-0 -z-10 opacity-10 dark:opacity-5">
        <div className="absolute top-10 left-10 text-6xl font-mono text-primary-500 rotate-12">
          {"<code>"}
        </div>
        <div className="absolute top-32 right-20 text-5xl font-mono text-accent-500 -rotate-12">
          {"{ }"}
        </div>
        <div className="absolute bottom-40 left-1/4 text-7xl font-mono text-primary-600">
          {"</>"}
        </div>
        <div className="absolute top-1/3 right-10 text-4xl font-mono text-accent-600 rotate-45">
          {"( )"}
        </div>
        <div className="absolute bottom-20 right-1/3 text-6xl font-mono text-primary-400 -rotate-6">
          {"[ ]"}
        </div>
        <div className="absolute top-1/2 left-16 text-5xl font-mono text-accent-400 rotate-12">
          {"</ >"}
        </div>
        <div className="absolute bottom-32 left-1/2 text-4xl font-mono text-primary-500">
          {"=>"}
        </div>
        <div className="absolute top-20 right-1/3 text-3xl font-mono text-accent-500 -rotate-12">
          {"/* */"}
        </div>

        {/* Binary code pattern */}
        <div className="absolute top-0 left-0 w-full h-full font-mono text-xs text-gray-400 dark:text-gray-600 leading-loose">
          <div className="absolute top-5 left-5">
            01001000 01100101 01101100 01101100 01101111
          </div>
          <div className="absolute top-16 right-10">
            11000101 10101010 11110000 10010101
          </div>
          <div className="absolute bottom-10 left-20">
            01000011 01101111 01100100 01100101
          </div>
          <div className="absolute bottom-24 right-32">
            10101010 11001100 01010101 11110000
          </div>
        </div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(99, 102, 241, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.05) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            {t("skills.title")}{" "}
            <span className="gradient-text">{t("skills.titleHighlight")}</span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
            {t("skills.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] group"
            >
              <h3 className="text-xl font-bold mb-4 gradient-text group-hover:scale-105 transition-transform duration-300">
                {item.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium border border-primary-200 dark:border-primary-700 hover:scale-110 hover:shadow-md transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
            <div className="text-4xl font-bold gradient-text mb-2">10+</div>
            <div className="text-gray-600 dark:text-gray-400">
              {t("skills.yearsExp")}
            </div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
            <div className="text-4xl font-bold gradient-text mb-2">20+</div>
            <div className="text-gray-600 dark:text-gray-400">
              {t("skills.technologies")}
            </div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
            <div className="text-4xl font-bold gradient-text mb-2">5+</div>
            <div className="text-gray-600 dark:text-gray-400">
              {t("skills.majorProjects")}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
