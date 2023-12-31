import React, { useState } from 'react'
import styles from "../css/pageQuestion2.module.css"
import InputText from './InputText'
import { Link } from 'react-router-dom'

export const PageQuestion4 = () => {
  const [exps, setExps] = useState(0);
  const [arrayExps, setArrayExps] = useState([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }, { id: 11 }, { id: 12 }, { id: 13 }]);
  const [flag, setFlag] = useState(null);
  const [flagInput, setFlagInput] = useState(false);

  function verification() {
    setFlagInput(true)
  }

  function createPage() {
    if (exps === "" || exps === 0) {
      alert("O campo está vázio");
      return;
    }

    if (isNaN(exps)) {
      alert("O que vocẽ digitou não é um número");
      return;
    }

    if (exps > 7) {
      alert("Vocẽ alcançou o número máximo de skills");
      return;
    }

    const copyArrayExps = arrayExps.filter((exp) => exp.id <= exps);
    setArrayExps(copyArrayExps);
    setFlag(true);
    console.log(copyArrayExps)
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

          <div className={styles.boxInputs2}>
            <InputText
              text={"Skill"}
              flagInput={flagInput}
              setFlagInput={setFlagInput}
              id={experience.id}
              categ={"skill"}
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
              <Link to={"/pageQuestion4"}>
                <button className={styles.buttonNext}>Próximo</button>
              </Link>
            }
          </div>
        </div>
      : null}

    </div>
  )
}
