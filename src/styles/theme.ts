import { css, CSSProp } from "styled-components";

const colors = {
  red: "#C92A1F",
  yellow: "#F3CC64",
  green: "#59842A",
  bg: "#F3F3F3",
  white: "#FFFFFF",
  gray100: "#F3F3F3",
  gray200: "#D4D4D4",
  gray300: "#C9C9C9",
  gray400: "#727272",
  gray500: "#6D6D6D",
  gray600: "#525252",
  gray700: "#424242",
  gray800: "#0A0909",
  black: "#000000",
} as const;

interface Font {
  weight: 300 | 400 | 500 | 600 | 700;
  size: number;
  lineHeight: number;
  letterSpacing: number;
}

function FONT({ weight, size, lineHeight, letterSpacing }: Font): string {
  return `
      font-family: 'Apple SD Gothic Neo';
      font-weight: ${weight};
      font-size: ${size}rem;
      line-height: ${lineHeight}px;
      letter-spacing: -0.0${letterSpacing}px;
    `;
}

const fonts = {
  title1: FONT({ weight: 700, size: 2.0, lineHeight: 20, letterSpacing: 5 }),
  title2: FONT({ weight: 700, size: 1.8, lineHeight: 20, letterSpacing: 5 }),
  title3: FONT({ weight: 700, size: 1.7, lineHeight: 20, letterSpacing: 5 }),
  subtitle1: FONT({ weight: 700, size: 1.6, lineHeight: 20, letterSpacing: 5 }),
  subtitle2: FONT({ weight: 600, size: 1.6, lineHeight: 20, letterSpacing: 5 }),
  body1: FONT({ weight: 500, size: 1.6, lineHeight: 20, letterSpacing: 5 }),
  body2: FONT({ weight: 400, size: 1.6, lineHeight: 20, letterSpacing: 5 }),
  body3: FONT({ weight: 600, size: 1.5, lineHeight: 20, letterSpacing: 5 }),
  body4: FONT({ weight: 600, size: 1.3, lineHeight: 20, letterSpacing: 5 }),
  caption1: FONT({ weight: 600, size: 1.4, lineHeight: 20, letterSpacing: 5 }),
  caption2: FONT({ weight: 500, size: 1.4, lineHeight: 20, letterSpacing: 5 }),
} as const;

const theme = {
  colors,
  fonts,
} as const;

export default theme;
