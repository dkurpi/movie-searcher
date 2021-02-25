import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

export const theme = {
  primary: "#E50914",
  bright: "#E5091450",
  bar: "rgb(5,5,20,0.2)",
  background: "#181c24",
  black: "rgb(28,33,40)",
  white: "#FFF",
  pureBlack: "#111",
};

export const ThemeLayout: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Body>
      <GlobalStyle />
      {children}
    </Body>
  </ThemeProvider>
);

const Body = styled.div`
  text-align: center;
  background-color: ${theme.background};
  min-height: 100vh;
  font-size: calc(10px + 2vmin);
  color: white;
`;

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
