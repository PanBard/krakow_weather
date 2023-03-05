import { useTranslations } from "../hooks";
import {Sequence, useVideoConfig} from 'remotion'
import { Intro } from "../sequences";

export const IsItRaining = () => {


  const T = useTranslations()
  const {fps} = useVideoConfig() //hook z remotion ktory mozemy wykorzystak w kazdym pliku

  return(
      <Sequence
        from={0} //od której klatki jest wyswietlane
        durationInFrames={3*fps} //ile dokłdanie ma trwać nasz filmik
        name = "Intro"

      >
              <Intro/> {/* Intro jako dziecko Sequence wyświetli się według podanych parametrów w sequence */}

      </Sequence>
  )
}