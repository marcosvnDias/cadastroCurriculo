import React, { useEffect, useState } from 'react'
import styles from "../css/inputText.module.css"


const InputText = ({text, event, valueInput, setValueInput, flagInput, setFlagInput}) => {
  const [textAlert, setTextAlert] = useState(false);


  function handleChange(e){
    setValueInput(e.target.value)
  }
  
  useEffect(() => {
    if(flagInput === true && valueInput === ""){
      setTextAlert(true)
      setFlagInput(false);
    } else if(flagInput && textAlert){
      setFlagInput(true);
    }

  }, [flagInput])


  return (
    <div className={styles.boxInputText}>
        {setValueInput ? 
          <input type='text' onChange={handleChange} className={styles.inputText} required/>
        :
          <input type='text' onChange={event} className={styles.inputText} required/>
        }
        <span className={styles.text}>{text}</span>
        {textAlert ? 
          <p className={styles.textAlert}>Você deixou o campo em branco</p>
        : null}
    </div>
  )
}

export default InputText