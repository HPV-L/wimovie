import './globals.css'
import { Figtree } from 'next/font/google'
import Header from '@/component/Header'
import Providers from './Providers'
import Banner from '@/component/Banner'

const font = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'Wimovie | Home',
  description: 'Enjoy watching all your favorite movies with Wimovie',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
      <Providers>
      <Header/>
      <Banner/>
        {children}
      </Providers>

        </body>
    </html>
  )
}