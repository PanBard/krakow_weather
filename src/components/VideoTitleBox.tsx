import styled from "styled-components"
import { Img, useCurrentFrame, useVideoConfig, spring, interpolate} from "remotion"
import { Images } from "../assets"
import { TitleBox } from "./TitleBox"

export const VideoTitleBox: React.FunctionComponent = () => {
    const frame = useCurrentFrame()
    const {fps} = useVideoConfig() 
    const scale = spring({  //animacja sprezyny 
        frame: frame -10,
        from: 0,
        to: 1,
        fps
    })

    const top = interpolate(    //falujace parasolki
        frame,
        [30, 55, 80],
        [-340,-350,-340]
    )




    return(
    <Containe style={{transform:`scale(${scale})`}} >
        <Umbrellas src={Images.Umbrellas} style={{top}}/>
        <TitleBox/>
    </Containe>
    
    )
    
}

const Containe = styled.div`
    position: relative;
    z-index: 2; //powoduje ze ten element bedzie przed chmurami dodanymi w intro
`

const Umbrellas = styled(Img)`
    height: 700px;
    width: 700px;
    position: absolute;
    top: -150px;
    left: 60px;
`