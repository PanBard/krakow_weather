import styled from "styled-components"
import { Img } from "remotion"
import { Images } from "../assets"
import { TitleBox } from "./TitleBox"

export const VideoTitleBox: React.FunctionComponent = () => {
    
    return(
    <Containe>
        <Umbrellas src={Images.Umbrellas}/>
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