//import { useEffect, useState } from 'react'
import './App.css'
import { useImgeCat } from './hooks/useImgeCat'
import { useWorlds } from './hooks/useWorlds.js'

function App() {
  const { palabra, consultWorld } = useWorlds()
  const { tresPalabra } = useImgeCat({ palabra })

  const handleClick = async () => {
    console.log(palabra)
    consultWorld()
  }

  return (
    <>
      <button onClick={handleClick}>llamar</button>
      <div style={{ display: 'flex' }}>
        <img
          style={{ width: '300px', height: '300px' }}
          src={`${tresPalabra}`}
          alt=""
        />
        <h1>{palabra && <p>{palabra}</p>}</h1>
      </div>
    </>
  )
}

export default App
