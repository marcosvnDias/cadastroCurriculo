import React from 'react'
import styles from "../css/pageQuestion1.module.css"
import InputText from './InputText'
import Textarea from './Textarea'
import { Link } from 'react-router-dom'

export const PageQuestion1 = () => {
  return (
    <div className={styles.containerPageQuest}>
      <div className={styles.boxPageQuest}>
        <div className={styles.boxInputs1}>
          <InputText text={"Nome"}/>
          <InputText text={"Profissão"}/>
        </div>

        <div className={styles.boxInputs2}>
          <InputText text={"Email"}/>
          <InputText text={"Telefone"}/>
          <InputText text={"LinkedIn"}/>
        </div>

        
        {/* <InputText text={"Nome"} />
        <InputText text={"Email"} />

        <InputText text={"Telefone"} />
        <InputText text={"LinkedIn"} /> */}

        <div className={styles.containerTextarea}>
          <Textarea text={"Sobre você:"} rowsText={4}/>
        </div>

        <div className={styles.boxButtonNext}>
          <Link to={"/pageQuestion2"}>
            <button className={styles.buttonNext}>Próximo</button>
          </Link>
        </div>


      </div>
    </div>
  )
}
