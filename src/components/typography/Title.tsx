import styled from "styled-components";
import { COMPOSITION_CONFIG } from "../../config";

type TitleProps = { //nasz props ktory przyjmjuje opcjonalny props - (?:)
    wlacz_ciemny_kolor_czionki?: boolean
}

export const Title = styled.h2<TitleProps>`  // <TitleProps> wrzucamy propsa do komponentu
color: ${ props => props.wlacz_ciemny_kolor_czionki 
    ? COMPOSITION_CONFIG.TEXT.COLOR.ACCENT 
    : COMPOSITION_CONFIG.TEXT.COLOR.REGULAR}; //dajemy waruneczek na zmianę koloru czcionki
font-size: ${COMPOSITION_CONFIG.TEXT.FONT_SIZE.LARGE};
font-weight: bold;
font-family: ${COMPOSITION_CONFIG.TEXT.FONT.SANS};
`