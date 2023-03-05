import styled from 'styled-components'
import { Img } from 'remotion'
import { WeatherState } from "../common"
import { Images } from '../assets'




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
                        <Umbrella src={Images.Umbrella}/>
                    )

                    
                case WeatherState.Snowing:
                    return (
                        <ChristmasTree src={Images.ChristmasTree}/>
                    )


                case WeatherState.Sunny:
                case WeatherState.Cloudy:
                    return (
                        <Sunbeds src={Images.Sunbeds}/>
                    )         
                
            
                default:
                    return null;
            }
            
        
    
}


const Umbrella = styled(Img)`
width: 650px;
height: 496px;
`

const ChristmasTree = styled(Img)`
width: 409px;
height: 621px;
`

const Sunbeds = styled(Img)`
width: 814px;
height: 465px;
`