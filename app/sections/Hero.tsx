"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Instagram,
  Facebook,
  Code2,
  Database,
  Smartphone,
  Layers,
  Coffee,
  Server,
  FileCode,
  Globe,
  Box,
  Cpu,
  Layout,
  Terminal,
  Cloud,
  Palette,
  GitBranch,
  PackageOpen,
  Braces,
  FileJson,
  FileText,
  Monitor,
} from "lucide-react";
import { useLanguage } from "../lib/LanguageContext";
import Image from "next/image";

export default function Hero() {
  const { t } = useLanguage();

  // Technologies and languages to display in background with icons
  const technologies = [
    {
      name: "PHP",
      position: "top-20 left-[10%]",
      size: "text-3xl",
      delay: 0,
      color: "text-blue-600 dark:text-blue-400",
      icon: Code2,
    },
    {
      name: "Java",
      position: "top-32 right-[15%]",
      size: "text-3xl",
      delay: 0.5,
      color: "text-red-600 dark:text-red-400",
      icon: Coffee,
    },
    {
      name: "JavaScript",
      position: "top-[45%] left-[8%]",
      size: "text-2xl",
      delay: 1,
      color: "text-yellow-600 dark:text-yellow-400",
      icon: FileCode,
    },
    {
      name: "MySQL",
      position: "bottom-32 right-[12%]",
      size: "text-3xl",
      delay: 1.5,
      color: "text-blue-700 dark:text-blue-500",
      icon: Database,
    },
    {
      name: "Flutter",
      position: "top-40 left-[20%]",
      size: "text-2xl",
      delay: 2,
      color: "text-cyan-600 dark:text-cyan-400",
      icon: Smartphone,
    },
    {
      name: "React",
      position: "bottom-40 left-[18%]",
      size: "text-2xl",
      delay: 2.5,
      color: "text-cyan-500 dark:text-cyan-300",
      icon: Layers,
    },
    {
      name: "TypeScript",
      position: "top-[35%] right-[10%]",
      size: "text-2xl",
      delay: 3,
      color: "text-blue-600 dark:text-blue-400",
      icon: FileCode,
    },
    {
      name: "Node.js",
      position: "bottom-[25%] left-[15%]",
      size: "text-2xl",
      delay: 3.5,
      color: "text-green-600 dark:text-green-400",
      icon: Server,
    },
    {
      name: "MongoDB",
      position: "top-[55%] right-[8%]",
      size: "text-2xl",
      delay: 4,
      color: "text-green-700 dark:text-green-500",
      icon: Database,
    },
    {
      name: "C#",
      position: "bottom-[35%] right-[20%]",
      size: "text-3xl",
      delay: 4.5,
      color: "text-purple-600 dark:text-purple-400",
      icon: Code2,
    },
    {
      name: ".NET",
      position: "top-[25%] left-[12%]",
      size: "text-2xl",
      delay: 5,
      color: "text-purple-700 dark:text-purple-500",
      icon: Box,
    },
    {
      name: "Bootstrap",
      position: "bottom-[45%] right-[15%]",
      size: "text-xl",
      delay: 5.5,
      color: "text-purple-600 dark:text-purple-400",
      icon: Layout,
    },
    {
      name: "Tailwind",
      position: "top-[60%] left-[10%]",
      size: "text-xl",
      delay: 6,
      color: "text-teal-600 dark:text-teal-400",
      icon: Palette,
    },
    {
      name: "Git",
      position: "bottom-28 left-[25%]",
      size: "text-2xl",
      delay: 6.5,
      color: "text-orange-600 dark:text-orange-400",
      icon: GitBranch,
    },
    {
      name: "REST API",
      position: "top-[70%] right-[18%]",
      size: "text-xl",
      delay: 7,
      color: "text-indigo-600 dark:text-indigo-400",
      icon: Globe,
    },
    {
      name: "SQL",
      position: "top-28 right-[25%]",
      size: "text-2xl",
      delay: 7.5,
      color: "text-blue-800 dark:text-blue-600",
      icon: Database,
    },
    {
      name: "HTML5",
      position: "bottom-[55%] left-[8%]",
      size: "text-2xl",
      delay: 8,
      color: "text-orange-600 dark:text-orange-400",
      icon: FileCode,
    },
    {
      name: "CSS3",
      position: "top-[50%] right-[22%]",
      size: "text-2xl",
      delay: 8.5,
      color: "text-blue-500 dark:text-blue-300",
      icon: Palette,
    },
    {
      name: "jQuery",
      position: "bottom-[20%] right-[8%]",
      size: "text-xl",
      delay: 9,
      color: "text-blue-600 dark:text-blue-400",
      icon: Code2,
    },
    {
      name: "AJAX",
      position: "top-[65%] left-[22%]",
      size: "text-xl",
      delay: 9.5,
      color: "text-red-500 dark:text-red-300",
      icon: Server,
    },
    {
      name: "JSON",
      position: "bottom-36 right-[28%]",
      size: "text-xl",
      delay: 10,
      color: "text-gray-700 dark:text-gray-400",
      icon: FileJson,
    },
    {
      name: "XML",
      position: "top-36 left-[28%]",
      size: "text-xl",
      delay: 10.5,
      color: "text-orange-500 dark:text-orange-300",
      icon: FileText,
    },
    {
      name: "Docker",
      position: "bottom-[60%] right-[25%]",
      size: "text-2xl",
      delay: 11,
      color: "text-blue-600 dark:text-blue-400",
      icon: Box,
    },
    {
      name: "Linux",
      position: "top-[40%] left-[25%]",
      size: "text-xl",
      delay: 11.5,
      color: "text-yellow-700 dark:text-yellow-500",
      icon: Terminal,
    },
    {
      name: "VS Code",
      position: "bottom-[50%] left-[20%]",
      size: "text-xl",
      delay: 12,
      color: "text-blue-500 dark:text-blue-300",
      icon: Monitor,
    },
  ];

  const codeSymbols = [
    {
      symbol: "{}",
      position: "top-24 left-[5%]",
      size: "text-6xl",
      rotation: "rotate-12",
    },
    {
      symbol: "</>",
      position: "bottom-32 right-[5%]",
      size: "text-5xl",
      rotation: "-rotate-12",
    },
    {
      symbol: "[]",
      position: "top-1/2 left-[3%]",
      size: "text-4xl",
      rotation: "rotate-45",
    },
    {
      symbol: "()...",
      position: "top-1/3 right-[4%]",
      size: "text-5xl",
      rotation: "-rotate-6",
    },
    {
      symbol: "=>",
      position: "bottom-1/4 left-[6%]",
      size: "text-3xl",
      rotation: "rotate-0",
    },
    {
      symbol: "{ }",
      position: "top-[20%] right-[30%]",
      size: "text-4xl",
      rotation: "-rotate-45",
    },
    {
      symbol: "< >",
      position: "bottom-[30%] left-[30%]",
      size: "text-4xl",
      rotation: "rotate-12",
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden"
    >
      {/* Animated Gradient Blobs Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300 dark:bg-primary-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-accent-300 dark:bg-accent-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary-400 dark:bg-primary-500 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating Technologies Background - FIXED POSITION TO COVER WHOLE PAGE */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        {/* Code Symbols */}
        {codeSymbols.map((item, index) => (
          <motion.div
            key={`symbol-${index}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.08, 0.15, 0.08],
              scale: [0.8, 1, 0.8],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: index * 0.5,
              ease: "easeInOut",
            }}
            className={`absolute ${item.position} ${item.size} ${item.rotation} font-mono text-primary-600 dark:text-primary-400 font-bold`}
          >
            {item.symbol}
          </motion.div>
        ))}

        {/* Technologies and Languages with Icons */}
        {technologies.map((tech, index) => {
          const IconComponent = tech.icon;
          return (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
                y: [0, -15, 0],
                x: [0, Math.sin(index) * 10, 0],
              }}
              transition={{
                duration: 6 + (index % 3),
                repeat: Infinity,
                delay: tech.delay * 0.3,
                ease: "easeInOut",
              }}
              className={`absolute ${tech.position} flex flex-col items-center gap-2`}
              style={{
                textShadow: "0 2px 10px rgba(0,0,0,0.2)",
              }}
            >
              <IconComponent
                className={`${tech.size === "text-3xl" ? "w-8 h-8" : tech.size === "text-2xl" ? "w-6 h-6" : "w-5 h-5"} ${tech.color}`}
                strokeWidth={2.5}
              />
              <span className={`${tech.size} font-bold ${tech.color}`}>
                {tech.name}
              </span>
            </motion.div>
          );
        })}

        {/* Additional decorative elements */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-[15%] right-[35%] w-16 h-16 border-2 border-primary-300 dark:border-primary-600 opacity-30 rounded-lg"
        />
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-[20%] left-[35%] w-20 h-20 border-2 border-accent-300 dark:border-accent-600 opacity-30 rounded-full"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[55%] left-[40%] w-32 h-32 border border-primary-400 dark:border-primary-500 rounded-full"
        />
      </div>

      <div className="container mx-auto">
        <div className="text-center relative z-10">
          {/* Profile Picture with Enhanced Styling */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="mb-8 flex justify-center"
          >
            <div className="relative group">
              {/* Outer rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -inset-4 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)",
                }}
              >
                <div className="absolute inset-0 blur-xl opacity-50"></div>
              </motion.div>

              {/* Animated gradient border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

              {/* Profile image container */}
              <div className="relative w-40 h-40 md:w-48 md:h-48 aspect-square">
                <Image
                  src="/profile.jpg"
                  alt="Amaanullah Sayyed - Software Developer specializing in Full Stack Development"
                  width={192}
                  height={192}
                  priority
                  className="w-full h-full rounded-full object-cover border-4 border-white dark:border-gray-900 shadow-2xl group-hover:scale-105 transition-transform duration-300"
                />
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500/20 to-accent-500/20 group-hover:from-primary-500/40 group-hover:to-accent-500/40 transition-all duration-300"></div>
              </div>

              {/* Floating particles around image */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute w-2 h-2 bg-primary-500 dark:bg-primary-400 rounded-full"
                  style={{
                    top: `${50 + 45 * Math.cos((i * Math.PI) / 4)}%`,
                    left: `${50 + 45 * Math.sin((i * Math.PI) / 4)}%`,
                  }}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              {t("hero.greeting")}{" "}
              <span className="gradient-text">{t("hero.name")}</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4">
              {t("hero.title")}
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              {t("hero.description")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all"
            >
              {t("hero.getInTouch")}
            </a>
            <a
              href="#projects"
              className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-semibold border-2 border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 hover:scale-105 transition-all"
            >
              {t("hero.viewProjects")}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap gap-4 justify-center mb-16"
          >
            <a
              href="mailto:sayyedscholar@gmail.com"
              className="p-3 bg-white dark:bg-gray-800 rounded-full hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all hover:scale-110 shadow-md"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </a>
            <a
              href="https://github.com/sayyedscholar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all hover:scale-110 shadow-md"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </a>
            <a
              href="https://in.linkedin.com/in/amaanullah-sayyed-aa320ab0"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all hover:scale-110 shadow-md"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </a>
            <a
              href="https://instagram.com/amaanullah.sayyed"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all hover:scale-110 shadow-md"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </a>
            <a
              href="https://www.facebook.com/share/14Mmvte9vDA/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all hover:scale-110 shadow-md"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="animate-bounce"
          >
            <a
              href="#about"
              title="Scroll to About section"
              aria-label="Scroll to About section"
            >
              <ArrowDown className="w-8 h-8 mx-auto text-gray-400 dark:text-gray-600" />
            </a>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
