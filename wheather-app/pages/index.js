import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [temperature, setTemperature] = useState(0)
  const [preciptationType, setPreciptationType] = useState("")
  const [probability, setProbability] = useState(-1)

  const fetchWheather = async () => {
    try {
      const response = await fetch('temperature-service/temperature')
      const responseJson = await response.json()
      const temperature = responseJson.temperature
      setTemperature(temperature)

      response = await fetch(`preciptation-service/preciptation/${temperature}`)
      responseJson = await response.json()
      const type = responseJson.type
      const probability = responseJson.probability
      setPreciptationType(type)
      setProbability(probability)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchWheather()
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Wheather app</title>
        <meta name="description" content="Wheather app" />
      </Head>

      <main className={styles.main}>
        <h1>Wheather app</h1>
        <h4>The temperature now is: {temperature.toPrecision(4)}&deg;</h4>
        <h4>Probably today is gonna: {preciptationType}</h4>
        <h4>With a probability of: {probability.toPrecision(4)} &#37;</h4>
      </main>
    </div>
  )
}
