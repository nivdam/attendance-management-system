import React, { useState } from "react";

import Layout from "./layout/layout.component";
import { ThemeProvider } from "styled-components/macro";
import { defaultTheme, lightTheme } from "./theme";

import "./styles.css";

export default function App() {
  const [isDefaultTheme, setIsDefaultTheme] = useState(true);

  const toggleChangeTheme = () => {
    setIsDefaultTheme(!isDefaultTheme);
  };

  return (
    <div className="App">
      <ThemeProvider theme={isDefaultTheme ? defaultTheme : lightTheme}>
        <Layout>Page</Layout>
      </ThemeProvider>
    </div>
  );
}
