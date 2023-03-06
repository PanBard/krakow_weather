import { useState } from 'react';
import { Composition } from 'remotion';
import { WeatherState } from './common';
import { IsItRaining } from './components';
import { VIDEO_CONFIG } from './config';
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

const [temperature] = useState(20)
const [weatherState] = useState(WeatherState.Cloudy)



	return (			
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
					temperature,
					weatherState,
				}}
			/>
			{/* Mount any React component to make it show up in the sidebar and work on it individually! */}
			
		</>
	);
};
