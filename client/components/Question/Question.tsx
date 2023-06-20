"use client"
import { useState } from "react";
import styles from './Question.module.sass';

export const Question = ({question, description}: QuestionData) => {
  const [isOpen, setIsOpen] = useState(true);

  const openTextHandler = () => {
    setIsOpen(!isOpen)
  };

  return (
    <div className={styles.question}>
      <div className={styles.question__wrapper}>
        <p className={styles.question__title}>{question}</p>
        {isOpen && <p className={styles.question__answer}>{description}</p>}
      </div>
      <div className={isOpen ? styles.question__icon : styles.question__icon_open} onClick={openTextHandler}/>
    </div>
  )
}