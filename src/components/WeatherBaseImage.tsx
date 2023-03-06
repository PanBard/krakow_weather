import styled from 'styled-components'
import { Img } from 'remotion'
import { WeatherState } from "../common"
import { Images } from '../assets'
import { Umbrella } from './Umbrella'
import { ChristmasTree } from './ChristmasTree'
import { Sunbeds } from './Sunbeds'

type WeatherBaseImageProps = {
    weatherstate: WeatherState
}

export const WeatherBaseImage: React.FunctionComponent<WeatherBaseImageProps> = ({
    weatherstate
}) => {
   
  
            switch (weatherstate) 
            {
                case WeatherState.Raining:
                case WeatherState.Thunderstorm: //jak zwracamy taki sam rezultat to mozna tak zrobic
                    return (
                        <Umbrella />
                    )

                    
                case WeatherState.Snowing:
                    return (
                        <ChristmasTree />
                    )


                case WeatherState.Sunny:
                case WeatherState.Cloudy:
                    return (
                        <Sunbeds />
                    )         
                
            
                default:
                    return null;
            }
            
        
    
}






