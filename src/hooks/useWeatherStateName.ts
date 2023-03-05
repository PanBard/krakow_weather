import { WeatherState } from "../common";
import { useTranslations } from "./useTranslations"; 


export const useWeatherStateName = (wheatherstate: WeatherState) =>{
    const T = useTranslations();


    switch(wheatherstate){
        case WeatherState.Raining:
            return T.weatherState.raining

        case WeatherState.Thunderstorm:
            return T.weatherState.thunderstorm

        case WeatherState.Snowing:
            return T.weatherState.snowing

        case WeatherState.Sunny:
            return T.weatherState.sunny

        case WeatherState.Cloudy:
            return T.weatherState.cloudy

        default:
            return ''
    }


}