import { FAQ_CONTENT } from './mock/faq_content'
import { Question } from 'components'

import styles from './FAQ.module.sass'

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
