import styled from "styled-components";
import { COMPOSITION_CONFIG } from "../../config";


export const Regular = styled.p`
color: ${COMPOSITION_CONFIG.TEXT.COLOR.REGULAR};
font-size: ${COMPOSITION_CONFIG.TEXT.FONT_SIZE.MEDIUM};
font-weight: bold;
font-family: ${COMPOSITION_CONFIG.TEXT.FONT.SANS};
line-height: 1.3;
`