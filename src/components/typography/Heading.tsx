import styled from "styled-components";
import { COMPOSITION_CONFIG } from "../../config";

type TitleProps = { //nasz props ktory przyjmjuje opcjonalny props - (?:)
    wlacz_ciemny_kolor_czionki?: boolean
}

export const Heading = styled.h2<TitleProps>`  // <TitleProps> wrzucamy propsa do komponentu
color: ${COMPOSITION_CONFIG.TEXT.COLOR.REGULAR};
font-size: ${COMPOSITION_CONFIG.TEXT.FONT_SIZE.EXTRA_LARGE};
font-weight: bold;
font-family: ${COMPOSITION_CONFIG.TEXT.FONT.SANS};
`