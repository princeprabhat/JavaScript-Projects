const my_api = "at_zH268i62HwGu126PDYdbKTSv2owhl"

const api_url = 'https://geo.ipify.org/api/'
let current_version = 'v1'

let current_ip = document.getElementById('current_ip')
let current_town = document.getElementById('current_location')
let current_time = document.getElementById('current_time')
let current_isp = document.getElementById('current_isp')

const user_ip = document.getElementById('ip_address')
const button = document.getElementById('search_btn')
var ip_url;



var map = L.map('map').setView([25.883495, 	86.600624], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([25.883495, 86.600624]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();






updateMarker = (update_marker = [-42, 42]) => {
    map.setView(update_marker, 13)
    L.marker(update_marker).addTo(map)
}


getIPDetails = (default_ip) =>{
    if(default_ip === undefined){
         ip_url = `${api_url}${current_version}?apiKey=${my_api}`
    }
    else{
         ip_url = `${api_url}${current_version}?apiKey=${my_api}&ipAddress=${default_ip}`
    }

    fetch(ip_url)
    .then(results => results.json())
    .then(data =>{
        current_ip.innerHTML = data.ip
        current_town.innerHTML = `${data.location.city} ${data.location.country} ${data.location.postalCode}`
        current_time.innerHTML = data.location.timezone
        current_isp.innerHTML = data.isp
        
        updateMarker([data.location.lat, data.location.lng])
    })
    .catch(error => alert("Something went wrong"));
}

getIPDetails()
document.addEventListener('load',updateMarker())

button.addEventListener('click', e=>{
    e.preventDefault()
    if(user_ip.value !=='' && user_ip.value !== null){
        getIPDetails(user_ip.value)
        return
    }
    else{
        alert("Enter a valid ip address")
    }
});












