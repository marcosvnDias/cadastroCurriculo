import React, { createContext, useState } from 'react'

export const QuestionContext = createContext();

const QuestionContextProvider = ({ children }) => {
  const [curriculo, setCurriculo] = useState({});
  const [categDates, setCategDates] = useState({inicio: [], fim: [], profissao: [], empresa: [], sobreExp: []});

  return(
    <QuestionContext.Provider value={{curriculo, setCurriculo, categDates, setCategDates}}>
      {children}
    </QuestionContext.Provider>
  )
}

export default QuestionContextProvider