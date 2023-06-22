'use client'

import { Roboto } from 'next/font/google'
import { Provider } from 'react-redux'
import { Header } from 'components'
import { Footer } from 'components'
import { store } from 'store/store'
import './globals.sass'

const roboto = Roboto({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '700'],
  variable: '--roboto-mono',
})

export const metadata = {
  title: 'БилетоПоиск',
  description: 'Приложение для поиска билетов в кинотеатрах',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <Provider store={store}>
        <body className={roboto.className}>
          <Header />
          <main className="main">{children}</main>
          <Footer />
          <div id="portal" />
        </body>
      </Provider>
    </html>
  )
}
