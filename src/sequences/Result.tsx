import React from "react"
import { VideoBackground, Cloud, Typography, WeatherBaseImage } from "../components"
import { COMPOSITION_CONFIG} from '../config'
import { WeatherState } from "../common"
import { useTranslations, useWeatherStateName } from "../hooks"
import styled from "styled-components"

type ResultProps = {
    wheatherstate: WeatherState,
    temperature: number,
}





export const Result: React.FunctionComponent<ResultProps> = ({
    wheatherstate,
    temperature,
}) => {
 
    const {TEXT, VIDEO} = COMPOSITION_CONFIG
    const T = useTranslations()
    const stateName = useWeatherStateName(wheatherstate)


    return(
        <VideoBackground backgroundColor={VIDEO.BACKGROUND_COLOR}>
            <Container>
            <WeatherBaseImage weatherstate={wheatherstate}/>
            <TextContainer>
                <Typography.Heading>
                    {temperature} {T.common.celsjus}
                </Typography.Heading>

                <Typography.Heading>
                    {stateName}
                </Typography.Heading>
            </TextContainer>
            </Container>

            <Cloud
                rotate={15}
                scale={0.6}
                translateX={500}
                translateY={-940}
            />
            <Cloud
                rotate={-15}
                scale={0.6}
                translateX={-430}
                translateY={-980}
            />
            <Cloud
                translateX={0}
                translateY={-600}
            />
            <Cloud
            scale={0.8}
                translateX={-530}
                translateY={-300}
            />
            <Cloud
                scale={0.7}
                translateX={-580}
                translateY={500}
            />
            <Cloud
                scale={0.7}
                translateX={560}
                translateY={300}
            />

      </VideoBackground>
    )
}


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 300px;
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`
const HeadingWithShadow = styled(Typography.Heading)`
    text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
    z-index: 2;
`
