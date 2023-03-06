import { useTranslations } from "../hooks";
import {Sequence, useVideoConfig} from 'remotion'
import { Intro, Result, Outro} from "../sequences";
import { Fragment } from "react"; //eliminuje błąd z przymusem 1 dziecka  w returnie
import { WeatherState } from "../common";

export const IsItRaining = () => {


  const T = useTranslations()
  const {fps} = useVideoConfig() //hook z remotion ktory mozemy wykorzystak w kazdym pliku

  return(
    <Fragment>
        <Sequence
          from={0} //od której klatki jest wyswietlane
          durationInFrames={3*fps} //ile dokłdanie ma trwać nasz filmik
          name = "Intro"

        >
                <Intro/> {/* Intro jako dziecko Sequence wyświetli się według podanych parametrów w sequence */}

        </Sequence>

        <Sequence
          from={3*fps}
          durationInFrames={4*fps}
          name="Result"
        >
          <Result 
          temperature={10}
          wheatherstate={WeatherState.Raining}
          />
        </Sequence>


        <Sequence
          from={7*fps}
          durationInFrames={3*fps}
          name="Outro"
        >
          
          <Outro/>

        </Sequence>

    </Fragment>
      
  )
}