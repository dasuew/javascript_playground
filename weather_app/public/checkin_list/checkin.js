getData()

async function getData() {
    const response = await fetch('/api')
    const data = await response.json()
    for (item of data) {
        const container = document.createElement('div')
        container.className = 'container'
        const root = document.createElement('p')
        root.className = 'element'
        const date = document.createElement('div')
        const geoLocation = document.createElement('div')
        const mood = document.createElement('div')

        geoLocation.textContent = `GeoData: ${item.lat.toFixed(2)}°/ ${item.long.toFixed(2)}°`
        mood.textContent = `Mood: ${item.mood}`

        const dateString = new Date(item.timestamp).toLocaleDateString()
        date.textContent = `Timestamp: ${dateString}`

        root.append(date, geoLocation, mood)

        container.append(root)

        document.body.append(container)
    }
    console.log(data)
}