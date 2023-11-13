import React, { createContext, useState } from 'react'

export const QuestionContext = createContext();

const QuestionContextProvider = ({ children }) => {
  const [curriculo, setCurriculo] = useState({});


  return(
    <QuestionContext.Provider value={{curriculo, setCurriculo}}>
      {children}
    </QuestionContext.Provider>
  )
}

export default QuestionContextProvider