import React, { useEffect, useRef, useState } from 'react'
import styles from "../css/pageQuestion1.module.css"

import Textarea from './Textarea'
import { Link } from 'react-router-dom'
import InputText from './InputText'

export const PageQuestion1 = () => {
  const [name, setName] = useState("");
  const [profission, setProfission] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [linkedin, setlinkedin] = useState("");
  const [aboutYou, setAboutYou] = useState("");
  const [flagInput, setFlagInput] = useState(false);

  function verification() {
    setFlagInput(true)
  }

  return (
    <div className={styles.containerPageQuest}>
      <div className={styles.boxPageQuest}>
        <div className={styles.boxInputs1}>
          <InputText text={"Nome"} valueInput={name} setValueInput={setName} flagInput={flagInput} setFlagInput={setFlagInput} />

          <InputText text={"Profissão"} valueInput={profission} setValueInput={setProfission}
            flagInput={flagInput} setFlagInput={setFlagInput} />
        </div>

        <div className={styles.boxInputs2}>
          <InputText text={"Email"} valueInput={email} setValueInput={setEmail} flagInput={flagInput} setFlagInput={setFlagInput} />

          <InputText text={"Telefone"} valueInput={tel} setValueInput={setTel} flagInput={flagInput} setFlagInput={setFlagInput}
          />
          <InputText text={"LinkedIn"} valueInput={linkedin} setValueInput={setlinkedin} flagInput={flagInput} setFlagInput={setFlagInput} />
        </div>


        <div className={styles.containerTextarea}>
          <Textarea text={"Sobre você:"} rowsText={4} valueInput={aboutYou} setValueInput={setAboutYou} flagInput={flagInput} setFlagInput={setFlagInput} />
        </div>

        <div className={styles.boxButtonNext}>
          {flagInput === false ?
            <button className={styles.buttonNext} onClick={verification}>Próximo</button>
            :
            <Link to={"/pageQuestion2"}>
              <button className={styles.buttonNext}>Próximo</button>
            </Link>
          }
        </div>


      </div>
    </div>
  )
}
