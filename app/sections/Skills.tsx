'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '../lib/LanguageContext'

export default function Skills() {
  const { t } = useLanguage()
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: ['Core Java', 'PHP', 'C#.NET', 'JSP', 'Servlets', 'SQL', 'XML', 'JSON']
    },
    {
      category: 'Web Technologies',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'AJAX', 'Bootstrap 3']
    },
    {
      category: 'Databases',
      skills: ['MySQL', 'Oracle 10g', 'MS SQL Server', 'MS Access', 'SQLite']
    },
    {
      category: 'Frameworks & Tools',
      skills: ['J2SE', 'J2EE', 'Magento', 'WordPress', 'WPF', 'Crystal Reports']
    },
    {
      category: 'Development Tools',
      skills: ['Eclipse', 'Visual Studio', 'NetBeans', 'MySQL Workbench', 'Toad for MySQL']
    },
    {
      category: 'Servers & OS',
      skills: ['Apache Tomcat', 'LAMP', 'XAMPP', 'CentOS Linux', 'Ubuntu', 'Windows', 'macOS']
    },
    {
      category: 'Methodologies',
      skills: ['Agile Development', 'Waterfall', 'Test Driven Development']
    },
    {
      category: 'E-Commerce & CMS',
      skills: ['Magento 1.9-2.1', 'WordPress 4.5']
    }
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            {t('skills.title')} <span className="gradient-text">{t('skills.titleHighlight')}</span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
            {t('skills.subtitle')}
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
              <h3 className="text-xl font-bold mb-4 gradient-text group-hover:scale-105 transition-transform duration-300">{item.category}</h3>
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
            <div className="text-gray-600 dark:text-gray-400">{t('skills.yearsExp')}</div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
            <div className="text-4xl font-bold gradient-text mb-2">20+</div>
            <div className="text-gray-600 dark:text-gray-400">{t('skills.technologies')}</div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
            <div className="text-4xl font-bold gradient-text mb-2">5+</div>
            <div className="text-gray-600 dark:text-gray-400">{t('skills.majorProjects')}</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
