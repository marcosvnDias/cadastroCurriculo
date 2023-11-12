import React from 'react'
import styles from "../css/inputText.module.css"

function InputText({text, event}) {
  return (
    <div className={styles.boxInputText}>
        <input type='text' onChange={event} className={styles.inputText} required/>
        <span className={styles.text}>{text}</span>
    </div>
  )
}

export default InputText