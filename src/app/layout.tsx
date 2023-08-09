import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Poppins } from 'next/font/google'
import Header from './components/header'
import Footer from './components/footer'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'], // Escolha os pesos que desejar
  subsets: ["latin-ext"],
})

export const metadata: Metadata = {
  title: 'Gustavo Boscheto',
  description: 'Arquiteto e Urbanista',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className} suppressHydrationWarning={true}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}