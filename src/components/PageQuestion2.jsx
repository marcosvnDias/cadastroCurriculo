import React, { useEffect, useState, useContext } from 'react'
import styles from "../css/pageQuestion2.module.css"
import InputText from './InputText'
import Textarea from './Textarea'
import { Link } from 'react-router-dom'
import { QuestionContext } from '../context/QuestionContext';

export const PageQuestion2 = () => {
  const [exps, setExps] = useState(0);
  const [arrayExps, setArrayExps] = useState([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 },
  { id: 6 }, { id: 7 }]);
  const [flag, setFlag] = useState(null);
  const [flagInput, setFlagInput] = useState(false);

  function verification() {
    setFlagInput(true)
  }

  function createPage() {
    if (!exps) {
      alert("O campo está vázio");
      return;
    }

    if (isNaN(exps)) {
      alert("O que você digitou não é um número");
      return;
    }

    if (exps > 7) {
      alert("Você alcançou o número máximo de experiências");
      return;
    }

    const copyArrayExps = arrayExps.filter((exp) => exp.id <= exps);
    setArrayExps(copyArrayExps);
    setFlag(true);
  }



  return (
    <div className={styles.containerPageQuest}>
      {flag === null ?
        <div className={styles.boxPageQuest}>

          <div className={styles.boxFirstQuest}>
            <div>
              <h2 className={styles.text}>Quantas formações você quer cadastrar?</h2>
              <InputText valueInput={exps} setValueInput={setExps} />
            </div>

            <div className={styles.boxButtonNext}>
              <button className={styles.buttonNext} onClick={createPage}>Criar</button>
            </div>
          </div>
          
        </div>
      : null}


      {flag ? arrayExps.map((experience, index) => (
        <div className={styles.boxPageQuest} key={experience.id + index}>
          <div className={styles.boxInputs1}>
            <InputText 
              text={"Ano de início"}
              flagInput={flagInput}
              setFlagInput={setFlagInput}
              id={experience.id} 
              categ={"inicio"} 
            />

            <InputText 
              text={"Ano de termino"}
              flagInput={flagInput}
              setFlagInput={setFlagInput}
              id={experience.id} categ={"fim"} 
            />
          </div>

          <div className={styles.boxInputs2}>
            <InputText 
              text={"Profissão"}
              flagInput={flagInput}
              setFlagInput={setFlagInput}
              id={experience.id} categ={"profissao"} 
            />

            <InputText 
              text={"Empresa"}
              flagInput={flagInput}
              setFlagInput={setFlagInput}
              id={experience.id} categ={"empresa"} 
            />
          </div>

          <div className={styles.containerTextarea}>
            <Textarea 
              text={"Sobre a experiência:"} 
              rowsText={4}
              flagInput={flagInput}
              setFlagInput={setFlagInput} 
              id={experience.id} 
              categ={"sobreExp"} 
            />

          </div>
        </div>
      )) : null}

      {flag ?
        <div className={styles.boxPageQuestButton}>
          <div className={styles.boxButtonNext}>
            {!flagInput ?
              <button className={styles.buttonNext} onClick={verification}>Registrar</button>
              :
              <Link to={"/pageQuestion3"}>
                <button className={styles.buttonNext}>Próximo</button>
              </Link>
            }
          </div>
        </div>
        : null}

    </div>
  )
}
