import React, { useState, useEffect } from 'react'
import './cards.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios'


const Cards = () => {

  const [items, setItems] = useState([]) 
  
  // Conexão com a API 
  useEffect(() => {

    const fetchItens = async () =>{
      
      let rand = Math.floor(Math.random() * 62) 
      
      const result = await axios(`https://www.breakingbadapi.com/api/characters?limit=5&offset=${rand}`)

      const addNewCharacters = await axios(`https://www.breakingbadapi.com/api/character/random`)
    
      setItems(result.data)

      setNewItems(addNewCharacters.data)
      
    }

    fetchItens()

  }, [])  

  // Adicionar nova carta  
  const [newItems, setNewItems] = useState([]) 

  const addImg = () =>{
    return newItems.map((newitem) => newitem.img)
  }
  const addName = () =>{
    return newItems.map((newitem) => newitem.name)
  }
  const addStatus = () =>{
    return newItems.map((newitem) => newitem.status)
  }  

  const [buttonCount, setButtonCount] = useState(3)

  // Onclick 
  const AddNewCharacters = e =>{
    
    setItems(current => [...current, {img: addImg(), name: addName(), status: addStatus()}])
    
    // Contagem botão
    setButtonCount(buttonCount - 1)

    if(buttonCount === 1){
      e.currentTarget.disabled = true
      e.currentTarget.style.background = "red"
    }

  }  

  return (
    <>  
      <div className='cards'>  
        <Container>
          <Row className="justify-content-md-center">

            {items.map((item, index) =>
              <Col md={3} key={index}> 
                <div className='cards-img'>
                  <img src={item.img} alt=''/>
                </div>
                <h5>{item.name}</h5>
                <p>Descrição - {item.status}</p>
                <p>Pontos - {Math.floor(Math.random() * 11)}</p>
              </Col>
            )}
            
          </Row>

          <button type='button' onClick={AddNewCharacters}>Adicionar cartas ({buttonCount})</button>
        </Container>
      </div>
    </>
  )
}

export default Cards