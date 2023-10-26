import { Raleway, Open_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header/page'
import Footer from '@/components/Footer/page'

const raleway = Raleway({ subsets: ['latin'] })
const open_Sans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
})
export const font_text = open_Sans.className;

export const metadata = {
  title: 'CELLADOR Builders',
  description: 'Real estate acquisition, development and management firm',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  )
}
