import React from 'react'
import styles from "../css/textarea.module.css"

function Textarea({text, rowsText, setText}) {
  function handleChange(e){
    setText(e.target.value)
  }
  return (
    <div className={styles.boxTextarea}>
        <p>{text}</p>
        <textarea className={styles.inputTextarea} rows={rowsText} onChange={handleChange}></textarea>
    </div>
  )
}

export default Textarea