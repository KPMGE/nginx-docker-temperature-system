const express = require("express");
const cors = require('cors')

const app = express()
app.use(cors({
  origin: '*'
}))

const MAX_TEMPERATURE = 40
const MIN_TEMPERATURE = -20

const getRandomTemperature = () => {
  return Math.random() * (MAX_TEMPERATURE - MIN_TEMPERATURE) + MIN_TEMPERATURE
}

app.get('/temperature', (request, response) => {
  return response.status(200).json({
    temperature: getRandomTemperature()
  })
})

const port = 3333
app.listen(port, () => console.log(`Server running at port ${port}...`))
