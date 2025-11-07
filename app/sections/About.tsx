'use client'

import { motion } from 'framer-motion'
import { Code2, Database, Globe, Laptop } from 'lucide-react'
import { useLanguage } from '../lib/LanguageContext'

export default function About() {
  const { t } = useLanguage()
  
  const highlights = [
    {
      icon: Code2,
      title: t('about.highlights.fullStack.title'),
      description: t('about.highlights.fullStack.desc')
    },
    {
      icon: Database,
      title: t('about.highlights.database.title'),
      description: t('about.highlights.database.desc')
    },
    {
      icon: Globe,
      title: t('about.highlights.web.title'),
      description: t('about.highlights.web.desc')
    },
    {
      icon: Laptop,
      title: t('about.highlights.enterprise.title'),
      description: t('about.highlights.enterprise.desc')
    }
  ]
  
  const coreQualities = [
    t('about.quality1'),
    t('about.quality2'),
    t('about.quality3'),
    t('about.quality4'),
    t('about.quality5')
  ]

  return (
    <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            {t('about.title')} <span className="gradient-text">{t('about.titleHighlight')}</span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-4">{t('about.myJourney')}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {t('about.description1')}
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {t('about.description2')}
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              {t('about.description3')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <item.icon className="w-10 h-10 text-primary-500 mb-3" />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl p-8 text-white text-center"
        >
          <h2 className="text-2xl font-bold mb-4">{t('about.coreQualities')}</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {coreQualities.map((quality) => (
              <span
                key={quality}
                className="px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full font-medium"
              >
                {quality}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
