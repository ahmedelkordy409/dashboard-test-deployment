import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'test deployment - Dashboard',
  description: 'AI-Generated Analytics Dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
