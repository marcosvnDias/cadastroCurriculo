import React from 'react'
import styles from "../css/textarea.module.css"

function Textarea({text, rowsText}) {
  return (
    <div className={styles.boxTextarea}>
        <p>{text}</p>
        <textarea className={styles.inputTextarea} rows={rowsText}></textarea>
    </div>
  )
}

export default Textarea