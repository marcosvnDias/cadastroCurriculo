import React, { useEffect, useState } from 'react'
import styles from "../css/pageQuestion2.module.css"
import InputText from './InputText'
import Textarea from './Textarea'
import { Link } from 'react-router-dom'

export const PageQuestion2 = () => {
  const [exps, setExps] = useState(0);
  const [arrayExps, setArrayExps] = useState([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }]);
  const [flag, setFlag] = useState(null);

  useEffect(() => {
    console.log(exps)
  }, [exps])

  function handleChange(e) {
    setExps(e.target.value)
  }

  function createPage() {
    const copyArrayExps = arrayExps.filter((exp) => exp.id <= exps);
    setArrayExps(copyArrayExps);
    setFlag(true);
    console.log(copyArrayExps)
  }



  return (
    <div className={styles.containerPageQuest}>
      {flag === null ?
        <div className={styles.boxPageQuest}>

          <div>
            <h2>Quantas experiências você quer cadastrar?</h2>
            <InputText event={handleChange} />
          </div>

          <div className={styles.boxButtonNext}>
            <button className={styles.buttonNext} onClick={createPage}>Criar</button>
          </div>

        </div>
        : null}


      {flag ? arrayExps.map((experience, index) => (
        <div className={styles.boxPageQuest} key={experience.id + index}>
          <div className={styles.boxInputs1}>
            <InputText text={"Ano de início"}/>
            <InputText text={"Ano de termino"}/>
          </div>

          <div className={styles.boxInputs2}>
            <InputText text={"Profissão"}/>
            <InputText text={"Empresa"}/>
          </div>

          <div className={styles.containerTextarea}>
            <Textarea text={"Sobre a experiência:"} rowsText={4}/>
          </div>
        </div>
      )) : null}

      {flag ?
        <div className={styles.boxPageQuestButton}>
          <div className={styles.boxButtonNext}>
            <Link to={"/pageQuestion3"}>
              <button className={styles.buttonNext}>Próximo</button>
            </Link>
          </div>
        </div>
      : null}

    </div>
  )
}
