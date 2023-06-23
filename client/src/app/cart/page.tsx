import { Metadata } from 'next'
import { CartContent } from 'components'

export const metadata: Metadata = {
  title: 'Tickets',
  description: 'Tickets Cinema',
}

export default function Cart() {
  return <CartContent />
}
