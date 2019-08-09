let lat, long

if ("geolocation" in navigator) {
    console.log('Geolocation is available')
    navigator.geolocation.getCurrentPosition(async position => {
        let lat, long, weather
        try {
            lat = position.coords.latitude
            long = position.coords.longitude

            document.getElementById('latitude').textContent = lat.toFixed(2)
            document.getElementById('longitude').textContent = long.toFixed(2)

            const api_url = `/weather/${lat},${long}`
            const weather_response = await fetch(api_url)
            const weather_json = await weather_response.json()
            weather = weather_json.weather.currently

            document.getElementById('temp').textContent = weather.temperature
            document.getElementById('summary').textContent = weather.summary
            console.log(weather)

            marker.setLatLng([lat, long])
            mymap.setView([lat, long], 18)
        }
        catch (error) {
            weather = { value: -1 }
            console.error('something went wrong.')
        }
        const data = { lat, long, weather }
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        const db_response = await fetch('/api', options)
        const db_json = await db_response.json()

        console.log(db_json)
    })

} else {
    console.log('Geolocation is not available')
}

const mymap = L.map('map').setView([0, 0], 1);

const attribution =
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
const tiles = L.tileLayer(tileUrl, { attribution })
tiles.addTo(mymap)

const marker = L.marker([0, 0]).addTo(mymap);