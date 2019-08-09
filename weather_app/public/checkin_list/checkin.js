const map = L.map('checkinMap').setView([0, 0], 1);
const attribution =
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
//const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tileUrl =
    'https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(map);

getData()

async function getData() {
    const response = await fetch('/api')
    const data = await response.json()
    let txt

    for (item of data) {
        const marker = L.marker([item.lat, item.long]).addTo(map)

        if (item.weather.value < 0) {
            txt += 'No weather readings.'
        }
        else {
            txt += `<p>The weather here is ${item.weather.summary} with a temperature of ${item.weather.temperature}&deg;C</p>`
        }
        marker.bindPopup(txt)

        // const container = document.createElement('div')
        // container.className = 'container'
        // const root = document.createElement('p')
        // root.className = 'element'
        // const date = document.createElement('div')
        // const geoLocation = document.createElement('div')
        // const mood = document.createElement('div')

        // geoLocation.textContent = `GeoData: ${item.lat.toFixed(2)}°/ ${item.long.toFixed(2)}°`
        // mood.textContent = `Mood: ${item.mood}`

        // const dateString = new Date(item.timestamp).toLocaleDateString()
        // date.textContent = `Timestamp: ${dateString}`

        // root.append(date, geoLocation, mood)

        // container.append(root)

        // document.body.append(container)

    }
    console.log(data)
}