import Footer from '@/components/Footer/Footer'
import './globals.css'
import { Inter } from 'next/font/google'
// import Container from '@/components/Container/Container'
import Navbar from '@/components/Navbar/Navbar'
import Toaster from '@/components/Toaster/Toaster'
import Provider from '@/providers'

const inter = Inter({ subsets: ['latin'] })
// import Toaster from "@/components/Toaster";
export const metadata = {
  title: 'Jihad Blogs',
  description: 'Share Your Programming Knowledge',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" className='translate-all'>
      <body className={inter.className}>

        <Provider>
          <div className='flex min-h-screen flex-col justify-between'>
            <div>
              <Navbar></Navbar>
              <main className='bg-blue-gray-50/75'>{children}</main>
            </div>
            <Footer></Footer>

          </div>
        </Provider>
        <Toaster></Toaster>
      </body>
    </html>
  )
}
