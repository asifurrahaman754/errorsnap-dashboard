/* eslint-disable @typescript-eslint/no-empty-object-type */
import { cssColor } from "utils/colors";

export const BREAKPOINTS = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};

const theme = {
  typography: {
    allVariants: {
      color: cssColor("textPrimary"),
    },
    fontFamily: '"Roboto", sans-serif',
    h1: {
      fontSize: "32px",
      lineHeight: 1.2,
      fontWeight: 700,
    },
    h2: {
      fontSize: "24px",
      lineHeight: 1.3,
      fontWeight: 600,
    },
    body1: {
      fontSize: "16px",
      lineHeight: 1.5,
      fontWeight: 400,
    },
    body2: {
      fontSize: "14px",
      lineHeight: 1.43,
      fontWeight: 300,
    },
    button: {
      fontSize: "14px",
      lineHeight: 1.75,
      fontWeight: 500,
      textTransform: "none",
    },
    caption: {
      fontSize: "12px",
      lineHeight: 1.4,
      fontWeight: 300,
    },
  },
  palette: {
    white: "#ffffff",
    primary: {
      main: "#1E88E5",
    },
    secondary: {
      main: "#FF4081",
    },
    background: {
      default: "#121212",
      paper: "#1F1F1F",
      shade: "#1a1c20",
    },
    text: {
      primary: "#dbe5ea",
      secondary: "#B0BEC5",
    },
    divider: "#424242",
    error: {
      main: "#ff7f50",
    },
    red: {
      main: "#891422",
    },
    action: {
      hover: "rgba(255, 255, 255, 0.08)",
    },
  },
  breakpoints: {
    values: BREAKPOINTS,
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            backgroundColor: "#333333",
            "& fieldset": {
              borderColor: "#616161",
            },
            "&:hover fieldset": {
              borderColor: "#B0BEC5",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#1E88E5",
            },
          },
          "& .MuiInputLabel-root": {
            color: "#B0BEC5",
          },
          "& .MuiInputBase-input": {
            color: "#FFFFFF",
          },
          "& .Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: cssColor("textSecondary"),
          },
          "& .Mui-disabled .MuiInputBase-input": {
            color: cssColor("white"),
          },
          "& .Mui-error .MuiOutlinedInput-notchedOutline": {
            borderColor: cssColor("error"),
          },
          "& .Mui-error .MuiInputLabel-root": {
            color: cssColor("error"),
          },
          "& .Mui-error .MuiInputBase-input": {
            color: cssColor("error"),
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: cssColor("white"),
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "6px",
          textTransform: "none",
          fontWeight: 500,

          "&.Mui-disabled": {
            backgroundColor: "#2d2d2d",
            color: "#6b6b6b",
          },
        },
        contained: {
          backgroundColor: "#fff",
          color: "#000",
          "&:hover": {
            backgroundColor: "#f5f5f5",
          },
        },
        outlined: {
          borderColor: "#333",
          color: "#fff",
          "&:hover": {
            borderColor: "#444",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
          },
        },
      },
    },
  },
};

export interface CustomColorNames {
  primary: true;
  white: true;
  secondary: true;
  background: true;
  backgroundShade: true;
  paper: true;
  textPrimary: true;
  textSecondary: true;
  divider: true;
  error: true;
  hover: true;
  red: true;
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides extends CustomColorNames {}
}

export default theme;
