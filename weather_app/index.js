const express = require('express')
const Datastore = require('nedb')
const fetch = require('node-fetch')
require('dotenv').config()

const app = express()

app.listen(3000, () => console.log('listening to port 3000'))
app.use(express.static('public'))
app.use(express.json({ limit: '1mb' }))

const database = new Datastore('database.db')
database.loadDatabase()

app.post('/api', (request, response) => {
    const data = request.body
    const timestamp = Date.now()
    data.timestamp = timestamp
    database.insert(data)
    response.json(data)
})

app.get('/api', (request, response) => {
    database.find({}, (err, data) => {
        if (err) {
            response.end()
            return
        }
        response.json(data)
    })
})

app.get('/weather/:latlong', async (request, response) => {
    const latlong = request.params.latlong.split(',')
    console.log(request.params)
    const lat = latlong[0]
    const long = latlong[1]
    const api_key = process.env.API_KEY
    const weather_url = `https://api.darksky.net/forecast/${api_key}/${lat},${long}/?units=si`
    const weather_response = await fetch(weather_url)
    const weather_data = await weather_response.json()

    const data = {
        weather: weather_data
    }

    response.json(data)
})