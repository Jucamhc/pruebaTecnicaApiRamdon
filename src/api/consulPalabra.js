export const consulPalabra = async () => {
    const result = await fetch('https://catfact.ninja/fact')
    const data = await result.json()
    const { fact } = data
    return fact 
}
