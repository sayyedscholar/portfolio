"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Code2,
  Database,
  Smartphone,
  Layers,
  Coffee,
  Server,
  FileCode,
  Globe,
  Box,
  Terminal,
  Palette,
  GitBranch,
} from "lucide-react";

export default function Loading() {
  const [progress, setProgress] = useState(0);
  const [currentTech, setCurrentTech] = useState(0);
  const [typedCode, setTypedCode] = useState("");
  const [codeIndex, setCodeIndex] = useState(0);

  // Programming languages and technologies to cycle through
  const technologies = [
    { name: "PHP", icon: Code2, color: "text-blue-600" },
    { name: "Java", icon: Coffee, color: "text-red-600" },
    { name: "JavaScript", icon: FileCode, color: "text-yellow-600" },
    { name: "React", icon: Layers, color: "text-cyan-500" },
    { name: "Flutter", icon: Smartphone, color: "text-cyan-600" },
    { name: "Node.js", icon: Server, color: "text-green-600" },
    { name: "MySQL", icon: Database, color: "text-blue-700" },
    { name: "Git", icon: GitBranch, color: "text-orange-600" },
  ];

  // Code snippets to type out
  const codeSnippets = [
    "Loading portfolio...",
    "Initializing components...",
    "Fetching projects...",
    "Rendering skills...",
    "Compiling experience...",
    "Building awesome...",
    "Almost ready...",
  ];

  const currentCode = codeSnippets[codeIndex] || codeSnippets[0];

  // Progress bar animation
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
          return 100;
        }
        const diff = Math.random() * 15;
        return Math.min(oldProgress + diff, 100);
      });
    }, 300);

    return () => {
      clearInterval(timer);
    };
  }, []);

  // Cycle through technologies
  useEffect(() => {
    const techTimer = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % technologies.length);
    }, 800);

    return () => clearInterval(techTimer);
  }, [technologies.length]);

  // Typing effect for code
  useEffect(() => {
    if (typedCode.length < currentCode.length) {
      const typeTimer = setTimeout(() => {
        setTypedCode(currentCode.slice(0, typedCode.length + 1));
      }, 50);
      return () => clearTimeout(typeTimer);
    } else {
      // Move to next code snippet after a delay
      const nextTimer = setTimeout(() => {
        setTypedCode("");
        setCodeIndex((prev) => (prev + 1) % codeSnippets.length);
      }, 1500);
      return () => clearTimeout(nextTimer);
    }
  }, [typedCode, currentCode, codeSnippets.length]);

  const CurrentIcon = technologies[currentTech].icon;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, pointerEvents: "none" }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      {/* Floating background code symbols */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5 dark:opacity-10">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-20 left-20 text-6xl font-mono text-primary-600 dark:text-primary-400"
        >
          {"</>"}
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-32 right-32 text-5xl font-mono text-accent-600 dark:text-accent-400"
        >
          {"{}"}
        </motion.div>
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute bottom-20 left-40 text-4xl font-mono text-primary-500 dark:text-primary-300"
        >
          {"[]"}
        </motion.div>
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 4.5, repeat: Infinity }}
          className="absolute bottom-32 right-20 text-5xl font-mono text-accent-500 dark:text-accent-300"
        >
          {"()"}
        </motion.div>
      </div>

      <div className="relative text-center z-10">
        {/* Animated Tech Icon */}
        <motion.div
          key={currentTech}
          initial={{ scale: 0.5, opacity: 0, rotateY: -180 }}
          animate={{ scale: 1, opacity: 1, rotateY: 0 }}
          exit={{ scale: 0.5, opacity: 0, rotateY: 180 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            {/* Outer rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)",
                opacity: 0.3,
              }}
            >
              <div className="absolute inset-0 blur-xl"></div>
            </motion.div>

            {/* Icon container */}
            <div className="relative w-32 h-32 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-2xl border-4 border-primary-500/30">
              <CurrentIcon
                className={`w-16 h-16 ${technologies[currentTech].color}`}
                strokeWidth={2}
              />
            </div>

            {/* Orbiting particles */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 2 + i * 0.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0"
              >
                <div
                  className="absolute w-2 h-2 bg-primary-500 rounded-full shadow-lg"
                  style={{
                    top: `${50 + 45 * Math.cos((i * Math.PI) / 2)}%`,
                    left: `${50 + 45 * Math.sin((i * Math.PI) / 2)}%`,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technology name with fade animation */}
        <AnimatePresence mode="wait">
          <motion.h2
            key={currentTech}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`text-3xl font-bold mb-6 ${technologies[currentTech].color}`}
          >
            {technologies[currentTech].name}
          </motion.h2>
        </AnimatePresence>

        {/* Typing code effect */}
        <div className="mb-8 min-h-[40px]">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-inner">
            <Terminal className="w-4 h-4 text-green-500 flex-shrink-0" />
            <code className="font-mono text-sm text-gray-700 dark:text-gray-300">
              {typedCode}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-2 h-4 ml-1 bg-primary-500"
              />
            </code>
          </div>
        </div>

        {/* Technology icons grid */}
        <div className="mb-8 flex justify-center gap-4 flex-wrap max-w-md mx-auto">
          {technologies.map((tech, index) => {
            const TechIcon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: index === currentTech ? 1 : 0.3,
                  scale: index === currentTech ? 1.2 : 0.8,
                }}
                transition={{ duration: 0.3 }}
                className={`p-2 rounded-lg bg-white dark:bg-gray-800 shadow-md ${
                  index === currentTech ? "ring-2 ring-primary-500" : ""
                }`}
              >
                <TechIcon className={`w-6 h-6 ${tech.color}`} strokeWidth={2} />
              </motion.div>
            );
          })}
        </div>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="w-80 mx-auto"
        >
          <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
              className="h-full bg-gradient-to-r from-primary-500 via-accent-500 to-primary-600 rounded-full relative"
            >
              {/* Shimmer effect */}
              <motion.div
                animate={{ x: ["-100%", "200%"] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent"
              />
            </motion.div>
          </div>

          {/* Percentage */}
          <div className="flex justify-between mt-3 text-sm">
            <span className="text-gray-600 dark:text-gray-400 font-mono">
              {Math.round(progress)}%
            </span>
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-primary-600 dark:text-primary-400 font-semibold"
            >
              Loading...
            </motion.span>
          </div>
        </motion.div>

        {/* Fun developer message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-xs text-gray-500 dark:text-gray-400 font-mono"
        >
          // Building awesome portfolio with{" "}
          <span className="text-red-500">❤️</span> and{" "}
          <span className="text-yellow-600">☕</span>
        </motion.p>
      </div>

      {/* Animated corner brackets */}
      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute top-8 left-8 text-4xl font-mono text-primary-600 dark:text-primary-400"
      >
        {"⌜"}
      </motion.div>
      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        className="absolute top-8 right-8 text-4xl font-mono text-primary-600 dark:text-primary-400"
      >
        {"⌝"}
      </motion.div>
      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        className="absolute bottom-8 left-8 text-4xl font-mono text-primary-600 dark:text-primary-400"
      >
        {"⌞"}
      </motion.div>
      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
        className="absolute bottom-8 right-8 text-4xl font-mono text-primary-600 dark:text-primary-400"
      >
        {"⌟"}
      </motion.div>
    </motion.div>
  );
}
