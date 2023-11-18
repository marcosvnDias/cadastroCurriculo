import React, { useEffect, useState, useContext } from 'react'
import styles from "../css/inputText.module.css"
import { QuestionContext } from '../context/QuestionContext';


const InputText = ({text, valueInput, setValueInput, flagInput, setFlagInput, id, categ}) => {
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
      case "inicio":
        categDates.inicio[id - 1] = date;
        break;
      case "fim":
        categDates.fim[id - 1] = date;
        break;
      case "profissao":
        categDates.profissao[id - 1] = date;
        break;
      case "empresa":
        categDates.empresa[id - 1] = date;
        break;
      case "inicioCurso":
        categDates.inicioCurso[id - 1] = date;
        break;
      case "fimCurso":
        categDates.fimCurso[id - 1] = date;
        break;
      case "nomeCurso":
        categDates.nomeCurso[id - 1] = date;
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
    <div className={styles.boxInputText}>
        <input type='text' onChange={handleChange} className={styles.inputText} required/>
        <span className={styles.text}>{text}</span>

        {textAlert ? 
          <p className={styles.textAlert}>Você deixou o campo em branco</p>
        : null}
    </div>
  )
}

export default InputText