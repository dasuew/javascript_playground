let lat, long
const button = document.getElementById('submit');

button.addEventListener('click', async event => {
    const data = { lat, long }

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    const response = await fetch('/api', options)
    const json = await response.json()

    console.log(json)
})

if ("geolocation" in navigator) {
    console.log('Geolocation is available')
    navigator.geolocation.getCurrentPosition(async position => {
        lat = position.coords.latitude
        long = position.coords.longitude

        document.getElementById('latitude').textContent = lat.toFixed(2)
        document.getElementById('longitude').textContent = long.toFixed(2)

        marker.setLatLng([lat, long])
        mymap.setView([lat, long], 18)
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