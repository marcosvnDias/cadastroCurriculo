import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
  const [firtAccess, setFirtAccess] = useState(true);
  return (
    <>
    <div className='container'>
      <div className='boxFirtAccess'>
        <div className='boxTitle'>
          {firtAccess === true ? <h1 className="title">Crie seu  primeiro currículo conosco</h1>: null}
        </div>

        <div className='boxButton'>
          <Link to={"/pageQuestion1"}>
            <button className="buttonCreate">Criar</button>
          </Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
