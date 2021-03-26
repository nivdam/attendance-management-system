import { lighten, darken } from "polished";

const mainColor = "#68B1E1";

export const defaultTheme = {
  colors: {
    mainColor,
    secondaryColor: "red",
    white: "white",
    black: "black"
  }
};

export const lightTheme = {
  colors: {
    mainColor: lighten(0.5, defaultTheme.colors.mainColor)
  }
};
