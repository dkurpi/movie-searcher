import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

export const theme = {
  primary: "#E50914",
  white: "#FFF",
};

export const ThemeLayout: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      {children}
    </>
  </ThemeProvider>
);

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 300;
  width: 100vw;
  overflow-x: hidden;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  font-size: 20px;
  text-decoration: none;
  text-transform: uppercase;
}

a:hover {
  color: rgb(0, 174, 255);
}
`;
