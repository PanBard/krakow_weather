import { APP_CONFIG } from "./config"
import { toWeatherModel } from "./utils"

export const fetchWeatherDataForCity = async (city: string) =>{
    const url = 'https://api.openweathermap.org/data/2.5/weather?q='
        .concat(city)
        .concat(`&appid=${APP_CONFIG.WEATHER_API_KEY}`)
        .concat(`&units=metric`)

    const {weatherState, temperature} = await fetch(url)
        .then( response => response.json())
        .then( data => toWeatherModel(data)) //dajemy pobrane dane do tej funkcji by zwrociła nam tylko potrzebne informacje
        .catch(()=>{
            throw new Error('Jest problem z pobraniem danych')
        })

    return {
        weatherState,
        temperature
    }

}