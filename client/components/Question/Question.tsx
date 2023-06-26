'use client'
import { useState } from 'react'
import styles from './Question.module.sass'

const Question = ({ question, description }: QuestionData) => {
  const [isOpen, setIsOpen] = useState(false)

  const openTextHandler = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles.question}>
      <div className={styles.question__wrapper} onClick={openTextHandler}>
        <p className={styles.question__title}>{question}</p>
        {isOpen && <p className={styles.question__answer}>{description}</p>}
      </div>
      <div
        className={isOpen ? styles.question__icon_open : styles.question__icon}
        onClick={openTextHandler}
      />
    </div>
  )
}

export default Question
