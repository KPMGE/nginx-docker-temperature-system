const express = require("express");

const app = express()

const getPreciptationChance = () => {
  return Math.random() * 100
}

const getPreciptation = (temperature) => {
  isCold = temperature < 0

  if (isCold) {
    return {
      "preciptationType": "snow",
      "preciptationChange": getPreciptationChance()
    }
  }
  return {
    "preciptationType": "storm",
    "preciptationChange": getPreciptationChance()
  }
}

app.get('/preciptation/:temperature', (request, response) => {
  const temperature = Number(request.params.temperature)
  return response.status(200).json(getPreciptation(temperature))
})

const port = 3334
app.listen(port, console.log(`Server listening on port ${port}...`))
