import { useDeferredValue, useEffect, useState } from 'react';
import { Composition, delayRender, continueRender } from 'remotion';
import { fetchWeatherDataForCity } from './actions';
import { WeatherState } from './common';
import { IsItRaining } from './components';
import { APP_CONFIG, VIDEO_CONFIG } from './config';
import './reset.css';

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
	const{
		FPS,
		VIDEO_ID,
		VIDEO_WIDTH,
		VIDEO_HEIGHT,
		VIDEO_DURATION_IN_FRAMES
	} = VIDEO_CONFIG
const {CITY} = APP_CONFIG

const [handle] = useState(() => delayRender()) //zatrzymujemy renderowanie obiektu aż do pobrania danych
const [temperature, setTemperature] = useState<number>()
const [weatherState, setweatherState] = useState<WeatherState>()
const [isReadyToRender, setisReadyToRender ] = useState(false)
const fetchWeatherData = async () => {
	const {temperature, weatherState} = await fetchWeatherDataForCity(CITY)

	setTemperature(temperature)
	setweatherState(weatherState)
	setisReadyToRender(true) //dajemy znać że można renderować zawartość returna
	console.log('temperatura w',CITY,'=',temperature,'stan pogody=', weatherState)
	continueRender(handle) //dopiero tu wznawiamy renderowanie, po tym jak pobraliśmy dane
}
useEffect(() => { 
	fetchWeatherData()
},[]) // przez to [] funkcja fetchweatherState() wykona sie tylko raz i useEffect jest tu zabezpieczeniem do tego by pobrać dane tylko raz

	return isReadyToRender ? (			
		<>    
			<Composition
				// You can take the "id" to render a video:
				// npx remotion render src/index.ts <id> out/video.mp4
				fps={FPS}
				id={VIDEO_ID}
				width={VIDEO_WIDTH}
				height={VIDEO_HEIGHT}
				component={IsItRaining}
				durationInFrames={VIDEO_DURATION_IN_FRAMES}
				
				
				
				// You can override these props for each render:
				// https://www.remotion.dev/docs/parametrized-rendering
				defaultProps={{
					temperature: temperature as number,
					weatherState: weatherState as WeatherState,
				}}
			/>
			{/* Mount any React component to make it show up in the sidebar and work on it individually! */}
			
		</>
	) : null
};
