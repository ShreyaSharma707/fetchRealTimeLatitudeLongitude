const fetchLocation = document.getElementById('fetchLocation');

async function getData(latitude, longitude) {
    const promise= await fetch(`your_api_key`)

    return await promise.json();

}

async function getLocation(position) {
    const result= await getData(position.coords.latitude, position.coords.longitude);
    console.log(result);
}

function failedLocation() {
    console.log("Failed to get location");
}

fetchLocation.addEventListener('click', async () => {
    navigator.geolocation.getCurrentPosition(getLocation, failedLocation);
})
