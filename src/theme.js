import { Inter, Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { green, purple, yellow, grey, red, blue, cyan } from "@mui/material/colors";

export const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Roboto", "Inter", "Helvetica", "Arial", "sans-serif"],
});

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: ["Inter", "Arial"].join(","),
    h1Bold: {
      fontSize: "2.3rem",
      fontWeight: "900",
      "@media (min-width:600px)": {
        fontSize: "3rem",
      },
      "@media (min-width:900px)": {
        fontSize: "3.5rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "4rem",
      },
      "@media (min-width:1536px)": {
        fontSize: "5rem",
      },
    },
  },
  palette: {
    primary: {
      main: "#000000",
      "&:hover": {
        color: "#FFFFFF",
        opacity: 0.7,
      },
    },
    secondary: {
      main: grey[50],
    },
    tertiary: {
      main: grey[400],
    },
    accent: {
      main: yellow[500],
    },
    heart: {
      main: red[500],
    },
    blue: {
      main: blue[500],
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            color: "#FFFFFF",
            backgroundColor: "#000000",
            opacity: 0.2,
          },
        },
        reject: {
          "&:hover": {
            color: "#FFF",
            backgroundColor: "#cf1508",
            opacity: 0.9,
          },
        },
        text: {
          "&:hover": {
            color: "blue",
            fontWeight: 500,
            fontSize: "12px",
            textTransform: "none",
            backgroundColor: "#FFF",
            cursor: "pointer",
          },
        },
        PRO: {
          "&:hover": {
            fontWeight: 500,
            fontSize: "13px",
            backgroundColor: "#0f8d2a",
            color: "#FFF",
            cursor: "pointer",
            letterSpacing: 1.5,
            opacity: 0.5,
          },
        },
      },
      style: {
        backgroundColor: "red",
        fontSize: "24px",
        fontWeight: 800,
      },
      variants: [
        {
          props: {
            variant: "secondary",
          },
          style: {
            fontWeight: 500,
            fontSize: "13px",
            backgroundColor: "#42B7D0",
            color: "#FFF",
            cursor: "pointer",
            letterSpacing: 1.5,
          },
        },
        {
          props: {
            variant: "text",
          },
          style: {
            color: "blue",
            fontWeight: 500,
            fontSize: "12px",
            textTransform: "none",
            cursor: "pointer",
          },
        },
        {
          props: {
            variant: "reject",
          },
          style: {
            color: "#000",
            fontWeight: 500,
            fontSize: "12px",
            cursor: "pointer",
            backgroundColor: "#eb4034",
          },
        },
        {
          props: {
            variant: "PRO",
          },
          style: {
            fontWeight: 500,
            fontSize: "13px",
            backgroundColor: "#0f8d2a",
            color: "#FFF",
            cursor: "pointer",
            letterSpacing: 1.5,
          },
        },
      ],
    },
    MuiMobileStepper: {
      style: {
        backgroundColor: "#42B7D0",
        fontSize: "24px",
        fontWeight: 800,
        dot: {
          backgroundColor: "#008000",
          height: "15px",
          width: "15px",
        },
        dotActive: {
          backgroundColor: "#42B7D0",
        },
      },
    },
  },
});

export default theme;
