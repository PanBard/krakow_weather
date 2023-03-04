import styled from "styled-components"


type VideoBackgroundProps = {
  backgroundColor: string,
  children: React.ReactNode
}



export const VideoBackground = styled.div<VideoBackgroundProps>`
flex: 1;
background-color: ${props=>props.backgroundColor};
`