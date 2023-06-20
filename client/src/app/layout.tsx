import './globals.sass'
import { Roboto,  } from 'next/font/google'
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';

const roboto = Roboto ({
  subsets: ['cyrillic'],
  weight: [ '400', '700'],
  variable: '--roboto-mono'
});

export const metadata = {
  title: 'БилетоПоиск',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">  
      <body className={roboto.className}>
        <Header />
        <main className='main'>
         {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}