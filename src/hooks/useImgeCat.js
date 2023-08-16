import { useEffect, useState } from "react"
const URL_IMAGEN = 'https://cataas.com/cat/says/'

export const useImgeCat = ({ palabra }) => {
  const [tresPalabra, setTresPalabra] = useState()

  console.log(palabra);

  useEffect(() => {
    if(!palabra) return

    console.log(palabra)

    const palabras = palabra.split(' ')
    const tresPrimerasPalabras = palabras.slice(0, 3).join('%20')
    console.log(tresPrimerasPalabras)
    setTresPalabra(URL_IMAGEN + tresPrimerasPalabras)

  }, [palabra])

  return { tresPalabra }

}