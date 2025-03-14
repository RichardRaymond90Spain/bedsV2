import { Inter } from 'next/font/google'
import './globals.css'
import ThemeRegistry from '@/components/ThemeRegistry'
import LoadingStateWrapper from '@/components/LoadingStateWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Beds & More',
  description: 'Quality sleep solutions for every home',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body 
        className={inter.className}
        suppressHydrationWarning={true}
      >
        <ThemeRegistry>
          <LoadingStateWrapper>
            {children}
          </LoadingStateWrapper>
        </ThemeRegistry>
      </body>
    </html>
  )
} 