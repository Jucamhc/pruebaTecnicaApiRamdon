import { useEffect, useState } from "react"
import { consulPalabra } from "../api/consulPalabra.js"

export function useWorlds() {
    const [palabra, setPalabra] = useState()

    const consultWorld = () => {
        consulPalabra().then(fect => setPalabra(fect))
    }
    useEffect(consultWorld, [])

    return { palabra, consultWorld }
}