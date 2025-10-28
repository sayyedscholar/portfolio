import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './components/ThemeProvider'
import { LanguageProvider } from './lib/LanguageContext'
import Header from './components/Header'
import Footer from './components/Footer'
import ClientLayout from './components/ClientLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Amaanullah Sayyed | Software Developer',
  description: 'Portfolio of Amaanullah Sayyed - Experienced Software Developer specializing in Full Stack Development with Java, PHP, and .NET',
  keywords: 'Software Developer, Full Stack Developer, Java Developer, PHP Developer, Web Developer, Mumbai, Dubai',
  authors: [{ name: 'Amaanullah Sayyed' }],
  openGraph: {
    title: 'Amaanullah Sayyed | Software Developer',
    description: 'Experienced Software Developer with expertise in Java, PHP, C#, and modern web technologies',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <LanguageProvider>
            <ClientLayout>
              <Header />
              <main className="min-h-screen">
                {children}
              </main>
              <Footer />
            </ClientLayout>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
