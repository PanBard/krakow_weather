import React, { Children } from "react"
import { Img, interpolate, useCurrentFrame } from "remotion"
import styled, { AnyStyledComponent } from "styled-components"
import { Images } from "../assets"

type CloudProps = {
  translateX ?: number,
  translateY ?: number,
  scale ?: number,
  rotate ?: number,
  children?:any,
}

export const  Cloud: React.FunctionComponent<CloudProps> = ({
  translateX = 0,
  translateY = 0,
  scale = 1,
  rotate = 0,
  children
}) => {
  
    
  const frame = useCurrentFrame()

  const animatedtranslateX = interpolate(
      frame,
      [0, 120*scale], // dzieki temu mamy rozne szybkosci w zaleznosci od skali
      [translateX, translateX - 50]
  )
  
  
  return(
  <Container
  style={{
    transform: `translateX(${animatedtranslateX}px) translateY(${translateY}px) scale(${scale}) rotate(${rotate}deg)`
  }}
  >

      <BaseCloud src={Images.Cloud}/> 

      {children}
  </Container>

)}

const BaseCloud = styled(Img)`   // stała tylko do stylizowania chmury
width: '457px';
height: '295px';

` 


const Container = styled.div`
    position: absolute;
`