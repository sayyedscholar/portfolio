'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Loading from './Loading'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Minimum loading time for smooth experience
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000) // 2 seconds minimum

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loading key="loading" />}
      </AnimatePresence>
      
      <div className={loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
        {children}
      </div>
    </>
  )
}
