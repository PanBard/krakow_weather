import styled from "styled-components";
import { Img, useCurrentFrame, interpolate } from "remotion";
import { useTranslations } from "../hooks";
import { Typography } from ".";
import { Images } from "../assets";


export const TitleBox = () => {
    const T = useTranslations()
    const frame = useCurrentFrame() //do uzywania klatek filmu
    const opacity = interpolate(
        frame,
        [0,40,50],
        [0,0,1]
    )



    return(
        <Container>

            <TitleBoxImage src={Images.TitleBox} />

            <QuestionRow 
                style={{opacity}}
            >
                <Typography.Title>
                    {T.intro.question1}
                </Typography.Title>

                <Typography.Title wlacz_ciemny_kolor_czionki>
                    {T.intro.question2}
                </Typography.Title>
            </QuestionRow>

        </Container>
    )
}


const TitleBoxImage = styled(Img)`
    height: 468px;
    width: 761px;
`



const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`

const QuestionRow = styled.div`
    position: absolute;
    text-align: center;
    width: 580px;
`