import React, { useState } from 'react'
import "./css/index.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import Cards from './components/Cards/Cards'
import Logo from './image/breakingbad_logo.png'

const App = () => {

  const [nome, setNome] = useState('')

  const [isShown, setIsShown] = useState(false);

  // Nome do usuario 
  const userName = e => {
    setNome(value)
    e.preventDefault()    

    if(value.trim().length === 0){
      alert('Digite um nome para continuar!')
    } 
    else{
      setIsShown(true)
    }
  }

  const [value, setValue] = useState('')

  // Captura do Input 
  const handleChange = e => {
    setValue(e.target.value);
  }

  return (
  <>

    <div className='container text-center'>

      <header className='header'>
        <div className='show-name'>
          {isShown ? <h6>Bem vindo, {nome}</h6> : <h6>Bem vindo</h6>}
          
        </div>
        <img src={Logo} alt='breaking bad logo'/>
      </header>

      {!isShown && (
      
        <div className='write-name'>
          <input type="text" onChange={handleChange} placeholder='Digite seu nome'/>
          <button type='button' onClick={userName}>Ver Cartas</button>
        </div>
        
      )}
        
      {isShown && ( <Cards /> )}
      
    </div>

  </>
  )
}
 
export default App;
