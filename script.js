const fetchLocation = document.getElementById('fetchLocation');

async function getData(latitude, longitude) {
    const promise= await fetch(`http://api.weatherapi.com/v1/current.json?key=237b0ccaf74cb199e1238261309&q=${latitude},${longitude}&aqi=yes`)

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