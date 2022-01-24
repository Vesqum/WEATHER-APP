const input = document.querySelector('input')
const button = document.querySelector('button')
const cityName = document.querySelector('.city-name')
const warning = document.querySelector('.warning')
const photo = document.querySelector('.photo')
const weather = document.querySelector('.weather')
const temperature = document.querySelector('.temperature')
const humidity = document.querySelector('.humidity')


const API_LINK = 'https://api.openweathermap.org/data/2.5/weather?q='
const API_KEY = '&appid=7a241ccaac76ecc00eacfb7ded589517'
const API_UNITS = '&units=metric'

const getWather = () => {
    const city = input.value || 'London'
    const URL = API_LINK + city + API_KEY + API_UNITS
    

    axios.get(URL).then(res => {
        console.log(res.data)
        const temp = res.data.main.temp
        const hum = res.data.main.humidity
        const status = Object.assign({}, ...res.data.weather)
        console.log(status)

        cityName.textContent = res.data.name

        temperature.textContent = Math.floor(temp) + '°C'
        humidity.textContent = hum + '%'
    })
}


getWather()