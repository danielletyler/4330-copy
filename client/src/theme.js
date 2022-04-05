import { createTheme } from "@material-ui/core";

const theme = createTheme({
  typography: {
    fontFamily: [
      //   "-apple-system",
      //   "BlinkMacSystemFont",
      //   '"Segoe UI"',
      //   "Roboto",
      //   '"Helvetica Neue"',
      //   "Arial",
      "sans-serif",
      //   '"Segoe UI Symbol"',
    ].join(","),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
