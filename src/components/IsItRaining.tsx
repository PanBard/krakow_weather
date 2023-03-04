import React from "react";
import { COMPOSITION_CONFIG} from '../config'
import { useTranslations } from "../hooks";
import { Cloud } from "./Cloud";
import { Note, Regular, Title, Heading } from "./typography";
import { VideoBackground } from "./VideoBackground";

export const IsItRaining = () => {

  const {TEXT, VIDEO} = COMPOSITION_CONFIG
  const T = useTranslations()


  return(
      <VideoBackground backgroundColor={VIDEO.BACKGROUND_COLOR}>
        <Note>
          {T.intro.question}
        </Note>
        <Regular>
          {T.intro.question}
        </Regular>
        <Title >
        {T.intro.question}
        </Title>

        <Heading>
        {T.intro.question}
        </Heading>

        <Cloud
          translateX={20}
          translateY={-20}
          scale={2}
          rotate={-10}
        />

        <Cloud
        translateX={150}
        translateY={-100}  />






      </VideoBackground>
  )
}