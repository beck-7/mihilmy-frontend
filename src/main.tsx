import React from "react";
import ReactDOM from "react-dom/client";
import { MantineProvider, createTheme } from "@mantine/core";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "@mantine/core/styles.css";
import "./index.css";

const theme = createTheme({
  primaryColor: "royalGreen",
  primaryShade: 6,
  fontFamily: `"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`,
  colors: {
    royalGreen: [
      "#00c207", // Lighter shade
      "#00a706",
      "#008b05",
      "#007404",
      "#005f03",
      "#004502", // Primary color
      "#003e02",
      "#003501",
      "#002d01", // Darker shade
      "#002d01", // Darker shade
    ],
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </MantineProvider>
  </React.StrictMode>
);
