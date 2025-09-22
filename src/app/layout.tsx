import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Conecta Bairro',
  description: 'Marketplace local com vitrine de produtos/serviços e funcionalidades comunitárias.',
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-slate-900 text-white">
        {children}
      </body>
    </html>
  )
}
