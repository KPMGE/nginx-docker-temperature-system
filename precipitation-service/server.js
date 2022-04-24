const express = require("express");
const cors = require('cors')

const app = express()

app.use(cors({
  origin: '*'
}))

const getPreciptationChance = () => {
  return Math.random() * 100
}

const getPreciptation = (temperature) => {
  isCold = temperature < 0

  if (isCold) {
    return {
      "type": "snow",
      "probability": getPreciptationChance()
    }
  }
  return {
    "type": "storm",
    "probability": getPreciptationChance()
  }
}

app.get('/precipitation/:temperature', (request, response) => {
  const temperature = Number(request.params.temperature)
  return response.status(200).json(getPreciptation(temperature))
})

const port = 3334
app.listen(port, console.log(`Server listening on port ${port}...`))
