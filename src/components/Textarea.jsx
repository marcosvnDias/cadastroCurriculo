import React, { useEffect, useState, useContext } from 'react'
import styles from "../css/textarea.module.css"
import { QuestionContext } from '../context/QuestionContext';


const Textarea = ({text, rowsText, valueInput, setValueInput, flagInput, setFlagInput, id, categ}) => {
  const [textAlert, setTextAlert] = useState(false);
  const [date, setDate] = useState("");
  const {categDates} = useContext(QuestionContext);


  function handleChange(e){
    if(categ){
      setDate(e.target.value);

      if(!date){
        setTextAlert(false);
      } 
    } else {
      setValueInput(e.target.value);
      
      if(!valueInput){
        setTextAlert(false);
      }
    }
  }


  useEffect(() => {
    switch(categ){
      case "sobreExp":
        categDates.sobreExp[id - 1] = date;
        break;

    }
    console.log(categDates)
  }, [date])

  
  useEffect(() => { 
    if(categ){
      if(flagInput && !date){
        setTextAlert(true)
        setFlagInput(false);
      } else if(flagInput && textAlert || flagInput){
        setFlagInput(true);
      } 
    } else {
      if(flagInput && !valueInput){
        setTextAlert(true)
        setFlagInput(false);
      }else if(flagInput && valueInput){
        setFlagInput(true);
      } 
    }
  }, [flagInput])


  return (
    <div className={styles.boxTextarea}>
        <p>{text}</p>
          <textarea className={styles.inputTextarea} rows={rowsText} onChange={handleChange}></textarea>


        {textAlert ? 
          <p className={styles.textAlert}>Você deixou o campo em branco</p>
        : null}
    </div>
  )
}

export default Textarea