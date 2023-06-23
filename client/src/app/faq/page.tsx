import { Metadata } from 'next'
import { Question } from 'components'
import { FAQ_CONTENT } from './mock/faq_content'

import styles from './FAQ.module.sass'

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about the service',
}

export default function FAQ() {
  return (
    <section className={styles.faq__section}>
      <h2 className={styles.faq__title}>Вопросы-ответы</h2>
      {FAQ_CONTENT.map(({ question, description }) => (
        <Question
          key={question}
          question={question}
          description={description}
        />
      ))}
    </section>
  )
}
